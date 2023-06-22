"use client";

import Image from "next/image";
import AuthForm from "./components/AuthForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  const session = useSession();
  const router = useRouter();
  if (session) {
    return router.push("/users");
  }
  return (
    <main
      className={`flex min-h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-gray-100`}
    >
      <header className="flex flex-col items-center justify-center gap-5">
        <Image
          src="/logo.svg"
          height="48"
          width="48"
          alt="Messenger-Logo"
          className="object-contain"
        />
        <h2 className="text-xl font-bold capitalize">
          Sign In To Your Account
        </h2>
      </header>
      <AuthForm />
    </main>
  );
};

export default Home;
