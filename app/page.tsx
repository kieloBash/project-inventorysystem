import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import bg from "@/public/hang.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between pt-24 h-screen overflow-hidden bg-gradient-to-r from-brown-50 to-brown-300">
      <div className="flex flex-col">
        <Navbar />
        <h1 className="text-6xl  font-bold w-full max-w-3xl text-center mt-12 text-brown-800">
          Let's <span className="text-main-500 font-extralight">MINE</span>{" "}
          together, to bring up the future{" "}
          <span className="text-main-500 font-extralight">FASHION</span> in you!
        </h1>
        <p className="mt-4 text-brown-800">
          The inventory system for Shoppee sellers to quickly record their sales
          and generate invoices.
        </p>
        <div className="flex justify-center items-center">
          <Link href={"/sign-in"}>
            <Button className="mt-4">
              Get Started Now <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[60vh] relative overflow-hidden mt-16 border-t-4 border-brown-800">
        <Image alt="pic1" src={bg} fill objectFit={"cover"} />
      </div>
    </main>
  );
}
