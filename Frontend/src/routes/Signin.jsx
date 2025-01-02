import { SignIn } from "@clerk/clerk-react";

function Signin() {
  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/signup" />
    </div>
  );
}

export default Signin;
