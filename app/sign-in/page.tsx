"use client";
import React, { useRef } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { toastSuccess, toastWarning } from '@/toast';

export default function Page() {
  const username = useRef("");
  const password = useRef("");
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const result = await signIn("credentials", {
        username: username.current,
        password: password.current,
        redirect: false,
        callbackUrl: '/'
      });

      if (result?.ok) {
        toastSuccess("Succesfully logged in");
        router.push("/");
      } else {
        toastWarning("Error")
      }
    } catch (error) {
      console.log("Error signing in: ", error);
    }
  };

  return (
    <main className="flex justify-center mx-auto min-h-dvh md:max-w-5xl">
      <div
        className="flex flex-col items-center mt-16 sm:mt-24 md:mt-32 lg:mt-40 gap-4 font-mono"
      >
        <h1 className="text-neutral-200 font-bold text-4xl">sign In</h1>
        <input
          className="bg-transparent outline-none text-neutral-200"
          type="text"
          placeholder="username"
          onChange={(e) => (username.current = e.target.value)}
          autoFocus
        />
        <input
          className="bg-transparent outline-none text-neutral-200"
          placeholder="password"
          type="password"
          onChange={(e) => (password.current = e.target.value)}
        />
        <button 
          className="bg-red-700 px-8 py-2"
          type="submit"
          onClick={onSubmit}
        >
          <span className="text-neutral-200 text-lg font-bold">
            Login
          </span>
        </button>
      </div>
    </main>
  )
}
