import { WEDDING_DATE } from "@/constants";

const Calendar = () => {
  const [year, month, day] = WEDDING_DATE.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingDays = Array.from({ length: startDay }, () => null);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-xl text-main text-gray">{month}월</h1>
      <div className="grid grid-cols-7 gap-3 text-center">
        {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
          <div
            key={day}
            className={`font-semibold ${index === 0 ? "text-red" : ""}`}
          >
            {day}
          </div>
        ))}
        {paddingDays.map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {daysArray.map((d) => {
          const currentDayOfWeek = new Date(year, month - 1, d).getDay();
          const isTargetDate = d === day;
          const className = `size-[1.625rem] text-base text-center ${
            isTargetDate
              ? "text-white bg-main rounded-full"
              : currentDayOfWeek === 0
              ? "text-red"
              : ""
          }
          `;

          return (
            <div key={d} className={className}>
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
