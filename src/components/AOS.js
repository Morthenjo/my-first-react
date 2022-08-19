import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CoolText() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <div data-aos="fade-up"></div>;
}
