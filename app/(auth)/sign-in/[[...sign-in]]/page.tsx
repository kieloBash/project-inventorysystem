import React from "react";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import bg from "@/public/svg/photoshoot.svg";

const SignInPage = () => {
  return (
    <main className="w-full h-screen grid grid-cols-3 py-4 bg-brown-100">
      <div className="flex justify-center items-center">
        <SignIn />
      </div>
      <section className="col-span-2 bg-white rounded-s-2xl shadow-xl relative overflow-hidden flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-semibold text-brown-800 mt-20">
            Welcome!
          </h1>
          <p className="">{`Sign In to view the dashboard to your heart's content!`}</p>
        </div>
        <div className="w-full h-[60vh] relative overflow-hidden">
          <Image alt="pic1" src={bg} fill />
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
