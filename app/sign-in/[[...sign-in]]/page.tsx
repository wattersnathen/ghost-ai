import { SignIn } from "@clerk/nextjs";

import { AuthMarketingPanel } from "@/components/auth/auth-marketing-panel";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen">
      <AuthMarketingPanel />

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <SignIn />
      </div>
    </div>
  );
}
