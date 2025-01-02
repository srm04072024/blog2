import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-80px)]">
      <SignUp signInUrl="/signin" />
    </div>
  );
}

export default Signup;
