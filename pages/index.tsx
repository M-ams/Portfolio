import { useState, useEffect } from "react";
import Image from "next/image";
import Mams from "./Mams";
import Homepage from "./homepage";
import Cookies from "js-cookie";

export default function Home() {
  const [showMams, setShowMams] =  useState<boolean>(!!Cookies.get('animation'));
  /* check if cookie existe dans la fonctionn usestate */
  useEffect(() => {
    setTimeout(() => {
      setShowMams(true);
      /* ajouter cookie */ 
      Cookies.set("animation", "true",{ expires: 1 / 288, path: '' });
    }, 3000);
  }, []);

  return <>{showMams ? <Homepage /> : <Mams />}</>;
}
