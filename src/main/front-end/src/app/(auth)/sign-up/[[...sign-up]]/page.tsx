import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center py-24">
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}
