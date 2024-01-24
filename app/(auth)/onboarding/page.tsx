"use client";
import React, { useState } from "react";

import bg from "@/public/svg/window.svg";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { createUser } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";

const OnboardingPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleStart() {

    if (!user) return;
    setIsLoading(true);

    const res = await createUser({
      name: user.fullName || "",
      email: user.emailAddresses[0].emailAddress,
      role: "Admin",
    });

    if (res) {
      router.push("/dashboard");
    } else {
      setIsLoading(false);
    }
  }
  return (
    <main className="w-full h-screen bg-brown-200 relative grid grid-cols-7 pt-10">
      <div className="col-span-2"></div>
      <div className="bg-white flex flex-col justify-between items-center h-full col-span-3 rounded-t-2xl border shadow">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className=" text-4xl font-light text-brown-800 mt-16">
            Welcome, {user?.firstName}
          </h1>
          <p className="text-brown-800">Ready to start your career?</p>
          <Button
            className="mt-6"
            type="button"
            onClick={handleStart}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                Get Started <ChevronRight className="w-6 h-6 ml-2" />
              </>
            )}
          </Button>
        </div>
        <div className="w-full h-[60vh] relative overflow-hidden">
          <Image alt="pic1" src={bg} fill />
        </div>
      </div>
      <div className="col-span-2"></div>
    </main>
  );
};

export default OnboardingPage;
