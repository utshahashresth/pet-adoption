import React from "react";
import { User } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between gap-6 bg-amber-100 p-6 text-amber-800 font-bold items-center">
        <Link href="/">
          <div>CuddlePaws</div>
        </Link>

        <div className="flex gap-9">
          <div>Home</div>
          <Link href="/adoption">
            <div>Adoption</div>
          </Link>
          <Link href="/contact">
            <div>Contact</div>
          </Link>
        </div>
        <div>
          <User />
        </div>
      </div>
    </>
  );
}
