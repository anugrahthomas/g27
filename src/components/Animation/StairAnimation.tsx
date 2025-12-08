import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const StairAnimation = ({ children }: any) => {
  const location = useLocation();
  const stairRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairRef.current, {
      display: "flex",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(stairRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: 0,
    });
    gsap.from(appRef.current, {
        opacity:0,
        delay:0.7
    })
  }, [location.pathname]);
  return (
    <>
      <div ref={stairRef} className="flex h-screen w-full fixed top-0 z-10">
        <div className="stair h-full w-1/7 bg-black"></div>
        <div className="stair h-full w-1/7 bg-black"></div>
        <div className="stair h-full w-1/7 bg-black"></div>
        <div className="stair h-full w-1/7 bg-black"></div>
        <div className="stair h-full w-1/7 bg-black"></div>
        <div className="stair h-full w-1/7 bg-black"></div>
        <div className="stair h-full w-1/7 bg-black"></div>
      </div>
      <div ref={appRef}>{children}</div>
    </>
  );
};

export default StairAnimation;