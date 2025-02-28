"use client";

import { BRIDE, GROOM } from "@/constants";
import { useDateCountDown } from "./hooks/useDateCountDown";

const DateCounterDown = () => {
  const { day, hours, minutes, seconds } = useDateCountDown();

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-xl font-bold text-main">D-Day</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-1 items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-gray-200 w-11 py-2 rounded-md">
            <p className="text-lg font-bold">{day}</p>
            <p className="text-3xs text-gray-400">DAYS</p>
          </div>
          <p className="text-base h-8">:</p>
          <div className="flex flex-col items-center justify-center bg-gray-200 w-11 py-2 rounded-md">
            <p className="text-lg font-bold">{hours}</p>
            <p className="text-3xs text-gray-400">HOUR</p>
          </div>
          <p className="text-base h-8">:</p>
          <div className="flex flex-col items-center justify-center bg-gray-200 w-11 py-2 rounded-md">
            <p className="text-lg font-bold">{minutes}</p>
            <p className="text-3xs text-gray-400">MIN</p>
          </div>
          <p className="text-base h-8">:</p>
          <div className="flex flex-col items-center justify-center bg-gray-200 w-11 py-2 rounded-md">
            <p className="text-lg font-bold">{seconds}</p>
            <p className="text-3xs text-gray-400">SEC</p>
          </div>
        </div>
        <p className="text-base text-center">
          {GROOM.name} <span className="text-red font-bold">♥</span>{" "}
          {BRIDE.name}의 결혼식이{" "}
          <span className="text-red font-bold">{day}</span>일 남았습니다.
        </p>
      </div>
    </div>
  );
};

export default DateCounterDown;
