"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BRIDE, GROOM } from "@/constants";
import DownArrowIcon from "./icons/DownArrowIcon";
import CopyIcon from "./icons/CopyIcon";
import PhoneIcon from "./icons/PhoneIcon";
import MessageIcon from "./icons/MessageIcon";

interface IContactItem {
  side: "신랑" | "신부";
}

const ContactItem = ({ side }: IContactItem) => {
  const data = side === "신부" ? BRIDE : GROOM;

  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${data.account.bank} ${data.account.number}`
      );
      alert("클립보드에 복사되었습니다.");
    } catch {
      alert("클립보드에 복사 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col">
      <button
        className="w-full p-4 bg-gray-100 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-base">{side}측</p>
        <span
          className={`transition-transform ${
            isOpen ? "-rotate-180" : "rotate-0"
          }`}
        >
          <DownArrowIcon />
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-4 py-8 bg-white flex flex-col gap-2">
          <div className="flex justify-between items-center gap-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <p className="text-base text-gray-500">{side}</p>
                <p className="text-lg">{data.name}</p>
              </div>
              <p className="text-lg">
                {data.account.bank} {data.account.number}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a href={`tel:${data.phone}`}>
                <PhoneIcon />
              </a>
              <a href={`sms:${data.phone}`}>
                <MessageIcon />
              </a>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center text-base text-gray-600 cursor justify-center gap-2 border border-gray-200 p-2 rounded-lg"
          >
            <CopyIcon />
            계좌 복사하기
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-6">
      <h1 className="text-xl text-main font-bold">마음 전하실 곳</h1>
      <div className="flex flex-col rounded-xl overflow-hidden shadow-md w-full">
        <ContactItem side="신랑" />
        <hr className="border-t w-full border-gray-200" />
        <ContactItem side="신부" />
      </div>
    </div>
  );
};

export default Contact;
