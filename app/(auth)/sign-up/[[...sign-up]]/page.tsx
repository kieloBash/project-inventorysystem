import React from "react";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import bg from "@/public/svg/shop.svg";

const SignUpPage = () => {
  return (
    <main className="w-full h-screen grid grid-cols-3 py-4 bg-brown-100">
      <section className="col-span-2 bg-white rounded-e-2xl shadow-xl relative overflow-hidden flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-semibold text-brown-800 mt-20">
            Join Now!
          </h1>
          <p className="">{`Sign Up to start your Live journey today!`}</p>
        </div>
        <div className="w-full h-[60vh] relative overflow-hidden">
          <Image alt="pic1" src={bg} fill />
        </div>
      </section>
      <div className="flex justify-center items-center">
        <SignUp />
      </div>
    </main>
  );
};

export default SignUpPage;
