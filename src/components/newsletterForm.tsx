"use client";
import React, { FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsletterForm = () => {
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };
  return (
    <form className="flex gap-[5%]" onSubmit={handleSubmitForm}>
      <Input
        name="subscriber_email"
        className="font-campton py-[14px] pl-10 h-auto text-primary-text-black leading-[32px] placeholder:text-[#A7A7A7] placeholder:text-base rounded-[10px] focus-visible:ring-primary-gray-600 "
        type="email"
        placeholder="Enter your email address"
      />
      <Button
        className="bg-white font-campton font-medium text-[20px] text-primary-orange px-[48px] leading-[32px] py-[14px] h-auto rounded-[10px]"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
