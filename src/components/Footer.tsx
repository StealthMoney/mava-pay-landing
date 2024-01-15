import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import GlobalContainer from "@/components/GlobalContainer";
import { footerItems, footer_discalimer, footer_subline } from "@/data/footer";
import { Facebook, GithubIcon, Linkedin, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <GlobalContainer>
        <div className="mt-[33px] md:mt-[66px] flex flex-col md:flex-row flex-wrap gap-[10%] text-primary-text-black">
          <div className="flex-[1_1_200px]">
            <div className="md:min-h-9 mb-5 flex items-center">
              <Image
                className=""
                src="mavapay.svg"
                alt="MavaPay"
                width={130}
                height={20}
                priority
              />
            </div>
            <div>
              <p className="font-campton md:text-xl font-normal">
                {footer_subline}
              </p>
            </div>
          </div>
          <div className="flex-[1_1_40%] flex gap-[40px] flex-col sm:flex-row sm:justify-between">
            {footerItems.map((item) => (
              <div key={item.header} className="">
                <p className="md:min-h-9 mb-5 font-archivo font-semibold text-2xl text-primary-text-black text-center md:text-left">
                  {item.header}
                </p>
                <ul className="flex flex-col gap-6 text-center md:text-left">
                  {item.nav.map((nav) => (
                    <li key={nav.name}>
                      <Link
                        href={nav.link}
                        className="block hover:underline underline-offset-4 font-campton text-sm"
                      >
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[1079px] my-[70px] mx-auto flex flex-col gap-4 font-campton">
          <p className="text-center text-primary-orange underline underline-offset-2">
            Disclaimer
          </p>
          <p className="text-center text-primary-text-black">
            {footer_discalimer}
          </p>
        </div>
      </GlobalContainer>
      <div className="bg-primary-gray-300 py-[36px] font-campton text-primary-gray-600">
        <GlobalContainer className="flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image src="cc.svg" alt="copyright" width={20} height={20} />
            </div>
            <p className="leading-none mt-[3px]">
              {new Date().getFullYear()} MavaPay. All rights reserved
            </p>
          </div>
          <div className="flex gap-2 md:gap-4">
            <GithubIcon className="w-6 h-6" fill="#666666" />
            <TwitterIcon className="w-6 h-6" fill="#666666" />
            <Linkedin className="w-6 h-6" />
            <Facebook className="w-6 h-6" />
          </div>
        </GlobalContainer>
      </div>
    </div>
  );
};

export default Footer;