import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full p-[20px] max-w-container border-[1px] border-division-medium rounded-[200px] flex mx-auto bg-primary-gray">
      <div className="w-full flex justify-between items-center">
        <div className="flex-[0_0_auto]">
          <Image
            className="mx-5"
            src="mavapay.svg"
            alt="MavaPay"
            width={100}
            height={10}
            priority
          />
        </div>
        <nav>
          <ul className="flex gap-6 text-primary-text-black text-[14px] font-campton">
            <li>
              <Link href="/" className="hover:underline underline-offset-4">
                API Guide
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline underline-offset-4">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline underline-offset-4">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button variant={"base"}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar