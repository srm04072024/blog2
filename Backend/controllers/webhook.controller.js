import { User } from "../models/user.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed");
  }
  // const headerPayload = req.headers;
  // const svix_id = headerPayload["svix-id"];
  // const svix_signature = headerPayload["svix-signature"];
  // const svix_timestamp = headerPayload["svix-timestamp"];
  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    console.log("Error", err);
    return new Response("Error", { status: 400 });
  }
  console.log(evt.data);

  if (evt.type === "user.created") {
    const { email_addresses, primary_email_address_id } = evt.data;
    const userEmail = email_addresses.find(
      (email) => email.id === primary_email_address_id
    );
    console.log(userEmail);
    const newUser = new User({
      clerkUserId: evt.data.id,
      username: evt.data.username || userEmail.email_address,
      email: userEmail.email_address,
      img: evt.data.profile_image_url,
    });
    await newUser.save();
  }
  return new Response("Webhook Received", { status: 200 });
};
