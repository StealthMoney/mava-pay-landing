import GlobalContainer from "@/components/GlobalContainer";
import NewsletterForm from "@/components/newsletterForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
  faq_items,
  faq_text,
  how_it_works_list,
  mavapay_advantage_items,
  mavapay_advantage_subline,
  mavapay_business_items,
  mavapay_business_subline,
  newsletter_text,
  user_testimonials_items,
  user_testimonials_subline,
} from "@/data/home";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const calculateSpan = (index: number) => {
    const ff = mavapay_advantage_items[index].span;
    switch (index) {
      case 0:
        return "md:col-span-7";
      case 1:
        return "md:col-span-5";
      default:
        return "md:col-span-4";
    }
  };

  return (
    <main className="">
      {/* HERO */}
      <GlobalContainer>
        <div className="flex pt-44 pb-16 gap-4">
          <div className="flex-[1_1_50%] gap-4">
            <h1 className="font-archivo font-bold text-[52px] leading-[84px] text-primary-text-black">
              Secure, Swift, Business-Ready - Your Go-To API for Bitcoin to
              Naira Conversions.
            </h1>
            <p className="mb-8 font-campton text-xl leading-[36px] text-primary-gray-500">
              Experience the convenience of securely swapping your Bitcoin for
              Naira, transferring it directly to your Nigerian bank account with
              our user-friendly platform.
            </p>
            <Button
              variant="base"
              className="font-campton text-lg font-normal px-[48px] py-[21px] h-auto"
            >
              Get Started Now
            </Button>
          </div>
          <div className="flex-[1_1_40%]">
            <Image
              src="/hero.png"
              alt="hero"
              width={1200}
              height={800}
              priority
            />
          </div>
        </div>
      </GlobalContainer>

      {/* HOW IT WORKS */}
      <div className="bg-primary-gray-300 pt-[103px] pb-[90px]">
        <GlobalContainer>
          <p className="font-campton font-medium text-lg text-primary-orange uppercase">
            how it works
          </p>
          <div className="mt-[68px] flex gap-[54px] items-center">
            <div>
              <Image
                src="/bitcoin_hero.png"
                alt="bitcoin as a physical coin"
                width={800}
                height={800}
                priority
              />
            </div>
            <div>
              <p className="font-archivo font-semibold text-[32px] text-primary-text-black leading-[48px] tracking-wider">
                Ready to convert your Bitcoin to Naira hassle free?
              </p>
              <div className="mt-7 mb-12 flex flex-col gap-8">
                {how_it_works_list.map((item, index) => (
                  <div key={item} className="flex gap-4 items-end">
                    <div className="grid place-items-center border-2 h-6 w-6 leading-none rounded-full border-primary-orange text-primary-orange">
                      {index + 1}
                    </div>
                    <p className="font-campton text-xl leading-none text-[#212121]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                variant="base"
                className="font-campton text-lg font-normal px-[48px] py-[21px] h-auto"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </GlobalContainer>
      </div>

      {/* MAVAPAY ADVANTAGE */}
      <div className="py-[103px]">
        <GlobalContainer>
          <p className="font-campton font-medium text-lg text-primary-orange uppercase">
            the mavapay advantage
          </p>
          <div className="flex mt-[22px]">
            <div className="flex-[0_1_60%] text-primary-text-black">
              <h2 className="font-archivo font-semibold text-[32px] leading-[32px]">
                Why Choose Mava Pay
              </h2>
              <p className="mt-5 font-campton text-lg leading-7">
                {mavapay_advantage_subline}
              </p>
            </div>
            <div className="flex-[1_1_auto]">
              <Image
                src="/advantage_arrow.svg"
                alt="arrow"
                width={200}
                height={200}
                // priority
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-12 gap-6 text-primary-text-black">
            {mavapay_advantage_items.map((item, index) => (
              <div
                key={item.heading}
                // className={`flex flex-col gap-4 p-8 ${item.span} border border-division-medium rounded-[20px]`}
                className={cn(
                  "flex flex-col gap-4 p-8 border col-span-full border-division-medium rounded-[20px]",
                  calculateSpan(index)
                )}
              >
                <div className="w-16 h-16 rounded-full bg-primary-orange grid place-items-center">
                  <Image
                    src={`/advantage_0${index + 1}.svg`}
                    alt="icon"
                    width={32}
                    height={32}
                    // priority
                  />
                </div>
                <p className="mb-2 font-archivo font-bold text-[28px] leading-[42px]">
                  {item.heading}
                </p>
                <p className="font-campton text-2xl font-normal">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </GlobalContainer>
      </div>

      {/* MAVA PAY FOR BUSINESS */}
      <div className="bg-primary-gray-300 py-[103px]">
        <GlobalContainer>
          <p className="font-campton font-medium text-lg text-primary-orange uppercase">
            MAVA PAY FOR BUSINESS
          </p>
          <div className="flex mt-[22px] items-center">
            <div className="flex-[0_1_60%] flex flex-col gap-[38px] text-primary-text-black">
              <h2 className="font-archivo font-semibold text-[32px] leading-[60px]">
                {mavapay_business_subline}
              </h2>
              <div className="flex flex-col gap-8">
                {mavapay_business_items.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 bg-primary-orange rounded-full"></div>
                    <p className="font-campton text-xl leading-[30px] text-[#212121]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                variant="base"
                className="font-campton text-lg font-normal px-[3ch] py-[1.5ch] h-auto w-fit"
              >
                Get Started Now
              </Button>
            </div>
            <div className="relative">
              <Image
                className="-translate-x-[10%]"
                src="/business_arrow.svg"
                alt="upwards arrow illustration"
                width={600}
                height={600}
                // priority
              />
            </div>
          </div>
        </GlobalContainer>
      </div>

      {/* USER STORIES */}
      <div className="py-[103px]">
        <GlobalContainer>
          <p className="font-campton font-medium text-lg text-primary-orange uppercase">
            WHAT OUR USERS ARE SAYING
          </p>
          <h2 className="mt-[22px] font-archivo font-semibold text-[32px] leading-[60px]">
            {user_testimonials_subline}
          </h2>
          <Carousel className="w-full mt-[60px]">
            <CarouselContent>
              {user_testimonials_items.map((item) => (
                <CarouselItem
                  key={item.author}
                  className="flex gap-[5%] items-center"
                >
                  <div className="flex-[0_1_435px]">
                    <Image
                      src={item.img}
                      alt="upwards arrow illustration"
                      width={600}
                      height={600}
                      // priority
                    />
                  </div>
                  <div className="flex-[1_1_50%]">
                    <span className="font-archivo font-bold text-[50px] md:text-[150px] leading-none text-primary-orange opacity-50">
                      “
                    </span>
                    <p className="font-campton text-[28px] leading-[44px] text-primary-text-black">
                      {item.text}
                    </p>
                    <div className="flex flex-col gap-2 mt-16">
                      <p className="font-archivo tracking-widest font-medium text-[24px] leading-[36px] text-primary-text-black">
                        {item.author}
                      </p>
                      <p className="font-campton text-[20px] leading-[24px] text-primary-gray-600">
                        {item.occupation}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </GlobalContainer>
      </div>

      {/* FAQS */}
      <div className="py-[103px]">
        <GlobalContainer>
          <p className="font-campton font-medium text-lg text-primary-orange uppercase">
            SUPPORT
          </p>
          <div className="flex mt-[22px] gap-[5%] text-primary-text-black">
            <div className="flex-[1_1_45%] flex flex-col gap-[38px] text-primary-text-black">
              <h2 className="font-archivo font-semibold text-[32px] leading-[60px]">
                FAQS
              </h2>
              <p className="font-campton text-xl leading-[30px]">
                {faq_text}
                {" "}
                <span className="font-medium text-primary-orange underline underline-offset-2">
                  <Link href="/">Contact Us</Link>
                </span>
              </p>
            </div>
            <div className="flex-[1_1_55%] font-campton text-primary-text-black">
              <Accordion type="single" collapsible className="w-full">
                {faq_items.map((item) => (
                  <AccordionItem key={item.heading} value={item.heading}>
                    <AccordionTrigger className="mt-4 text-xl leading-[30px]">
                      {item.heading}
                    </AccordionTrigger>
                    <AccordionContent>{item.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </GlobalContainer>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-primary-gray-300 py-[103px]">
        <GlobalContainer>
          <div className="w-[80%] mx-auto bg-primary-orange rounded-[10px] py-[86px] px-[150px]">
            <div className="flex flex-col gap-[20px]">
              <p className="font-campton font-medium text-2xl text-white leading-[44px]">
                {newsletter_text}
              </p>
              <NewsletterForm />
            </div>
          </div>
        </GlobalContainer>
      </div>

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-100/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
