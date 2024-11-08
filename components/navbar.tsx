import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 flex justify-between items-center px-4 py-4 border-b  bg-background/50 backdrop-blur z-[99]">
      <Link href="/s1">
        <p className="font-semibold text-2xl">H⚡️F</p>{" "}
        {/* Replace it with an image */}
      </Link>
      <div className="flex gap-4 items-center">
        <Button variant="outline" className="rounded-full">
          <Link href="/s1/about">Login</Link>
        </Button>
        or
        <Button variant="default" className="rounded-full">
          <Link href="/s1/about">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};
export default Navbar;
