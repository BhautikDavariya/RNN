'use client'

import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/login');
  }, []); // ✅ Add useEffect to avoid redirecting during render

  return null; // or <></>
}
