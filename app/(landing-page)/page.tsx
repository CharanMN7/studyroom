import Navbar from "@/app/(landing-page)/navbar";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" mx-auto text-center space-y-8 h-[calc(100vh-69px)] flex items-center justify-center flex-col">
        <h1 className="italic text-6xl font-extrabold">
          <Cover>Hyper ⚡️tudy Force</Cover>
        </h1>{" "}
        {/* Add a Full text logo here */}
        <p className="text-3xl max-w-[600px] text-muted-foreground">
          Study topics of your choice by chatting with AI directly or by using
          your own PDF books and notes
        </p>
        <Button variant="default" className="rounded-full z-[10]" asChild>
          <Link href="/auth">
            <span className="group inline-flex items-center">
              Login or Get Started!{" "}
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </Button>
        <ShootingStars />
      </div>
    </>
  );
}
