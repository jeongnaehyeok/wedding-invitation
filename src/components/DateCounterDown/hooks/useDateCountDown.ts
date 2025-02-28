import { WEDDING_DATE, WEDDING_TIME } from "@/constants";
import { useEffect, useState } from "react";

interface ICountdown {
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): ICountdown => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { day: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const day = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { day, hours, minutes, seconds };
};

export const useDateCountDown = (): ICountdown => {
  const parseDate = (dateStr: string, timeStr: string): Date => {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hour, minute] = timeStr.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minute);
  };

  const targetDate = parseDate(WEDDING_DATE, WEDDING_TIME);
  const [timeLeft, setTimeLeft] = useState<ICountdown>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
