// pages/sign-in/[[...sign-in]].tsx
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
    return (
      <>
    <div>
                <Image src='/RENT.png' width={ 900} height={1000} className="object-contain h-full w-full"/>
      <SignIn />
    </div>
     </>
  );
}