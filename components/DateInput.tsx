"use client";
import React, { useEffect, useState } from "react";

const getDaysInMonth = (month: string, year:string) => {
  let date = new Date(Number(year), Number(month)-1, 0);
  return date.getDate();
}

const isValidDate = (date: string) => {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return regex.test(date);
}

export default function DateInput({
  initialDate,
  value,
  onChange,
  getDay=true,
  getMonth=true,
  getYear=true,
  theme="dark",
  autoFocus,
} : {
  initialDate?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  getDay?: boolean;
  getMonth?: boolean;
  getYear?: boolean;
  theme?: "light" | "dark";
  autoFocus?: boolean;
}) {
  const [ initialDay, initialMonth, initialYear ] = (initialDate ?? "01/01/2024").split("/");
  const years = Array(20).map((_, i) => `20${23 + i}`);
  const months = Array(12).map((_, i) => `${1 + i}`); 

  const [day, setDay] = useState<string>(initialDay);
  const [month, setMonth] = useState<string>(initialMonth);
  const [year, setYear] = useState<string>(initialYear);

  useEffect(() => {
    if (Number(day) < 1 || Number(day) > getDaysInMonth(month, year)) {
      return;
    }

    if (Number(month) < 1 || Number(month) > 12) {
      return;
    }

    let fDay = day;
    let fMonth = month;
    if (day.length < 2) {
      fDay = `0${day}`
    }

    if (month.length < 2) {
      fMonth = `0${month}`
    }

    let date = `${day}/${month}/${year}`;
    if (isValidDate(date)) {
      onChange(date);
    }
  }, [day, month, year]);

  return (
    <div className="flex gap-1 font-mono">
      {getDay && (
        <>
        <input 
          className="bg-transparent w-5"
          value={day}
          onChange={(e) => setDay(e.currentTarget.value)}
          type="text"
          maxLength={2}
          placeholder="dd"
        />
        <span>/</span>
        </>
      )}
      {getMonth && (
        <>
        <input 
          className="bg-transparent w-5"
          value={month}
          onChange={(e) => setMonth(e.currentTarget.value)}
          type="text"
          maxLength={2}
          placeholder="mm"
        />
        <span>/</span>
        </>
      )}
      {getYear && (
        <input 
          className="bg-transparent w-9"
          value={year}
          onChange={(e) => setYear(e.currentTarget.value)}
          type="text"
          maxLength={4}
          placeholder="yyyy"
        />
      )}
    </div>
  );
}
