"use client";
import React, { useEffect, useState } from "react";
import { text } from "stream/consumers";

const getDaysInMonth = (month: string, year:string) => {
  let date = new Date(Number(year), Number(month)-1, 0);
  return date.getDate();
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
    onChange(`${day}/${month}/${year}`)
  }, [day, month, year]);

  return (
    <div className=" inline">
      {getDay && (
        <input 
          className="bg-transparent"
          value={day}
          onChange={(e) => setDay(e.currentTarget.value)}
          type="text"
          maxLength={2}
          placeholder="dd"
        />
      )}
      {getMonth && (
        <input 
          className="bg-transparent"
          value={month}
          onChange={(e) => setMonth(e.currentTarget.value)}
          type="text"
          maxLength={2}
          placeholder="mm"
        />
      )}
      {getYear && (
        <input 
          className="bg-transparent"
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
