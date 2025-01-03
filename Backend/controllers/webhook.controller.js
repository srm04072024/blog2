import { User } from "../models/user.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed");
  }
  const headerPayload = req.headers;
  const svix_id = headerPayload["svix-id"];
  const svix_signature = headerPayload["svix-signature"];
  const svix_timestamp = headerPayload["svix-timestamp"];
  const payload = req.body;
  // const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.log("Error", err);
    res.status(400).json({
      message: "Webhook verification failed!",
    });
  }

  if (evt.type === "user.created") {
    const { email_addresses, primary_email_address_id } = evt.data;
    const userEmail = email_addresses.find(
      (email) => email.id === primary_email_address_id
    );

    const newUser = new User({
      clerkUserId: evt.data.id,
      username: evt.data.username || userEmail.email_address,
      email: userEmail.email_address,
      img: evt.data.profile_image_url,
    });
    await newUser.save();
  }

  if (evt.type === "user.deleted") {
    const deletedUser = await User.findOneAndDelete({
      clerkUserId: evt.data.id,
    });

    await Post.deleteMany({ user: deletedUser._id });
    await Comment.deleteMany({ user: deletedUser._id });
  }

  return res.status(200).json({
    message: "Webhook received",
  });
};
