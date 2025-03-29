import LogoIcon from "@/components/logo-icon";
import { LoginForm } from "./login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <LogoIcon />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/placeholder-dark.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover "
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
