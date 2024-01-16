"use client";


import { useState, useEffect } from "react";
import Image from "next/image";
import Mams from "./Mams";
import Homepage from "./homepage";

export default function Home() {
  const [showMams, setShowMams] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowMams(true);
    }, 3000);
  }, []);

  return <>{showMams ? <Homepage /> : <Mams />}</>;
}
