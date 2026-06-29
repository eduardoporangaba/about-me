"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type ContainerScrollProps = {
  titleComponent: ReactNode;
  children: ReactNode;
};

type HeaderProps = {
  translate: MotionValue<number>;
  titleComponent: ReactNode;
  shouldReduceMotion: boolean | null;
};

type CardProps = {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: ReactNode;
  shouldReduceMotion: boolean | null;
};

export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleRange = useMemo<[number, number, number]>(() => {
    return isMobile ? [0.72, 0.9, 0.98] : [0.88, 1.05, 1];
  }, [isMobile]);

  const rotate = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [22, 4, 0]), {
    stiffness: 90,
    damping: 24,
  });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.55, 1], scaleRange), {
    stiffness: 90,
    damping: 24,
  });
  const translate = useSpring(
    useTransform(scrollYProgress, [0, 0.55, 1], [60, -40, -120]),
    {
      stiffness: 90,
      damping: 24,
    }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-[76rem] items-start justify-center px-2 pb-12 pt-28 sm:h-[72rem] sm:pt-24 md:h-[78rem] md:items-center md:px-8 md:py-12 lg:h-[74rem] lg:px-20 xl:h-[72rem]"
    >
      <div className="relative w-full py-10 md:py-32 [perspective:1000px]">
        <Header
          translate={translate}
          titleComponent={titleComponent}
          shouldReduceMotion={shouldReduceMotion}
        />
        <Card
          rotate={rotate}
          scale={scale}
          shouldReduceMotion={shouldReduceMotion}
        >
          {children}
        </Card>
      </div>
    </div>
  );
}

function Header({ translate, titleComponent, shouldReduceMotion }: HeaderProps) {
  return (
    <motion.div
      style={{ y: shouldReduceMotion ? 0 : translate }}
      className="mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
}

function Card({ rotate, scale, children, shouldReduceMotion }: CardProps) {
  return (
    <motion.div
      style={{
        rotateX: shouldReduceMotion ? 0 : rotate,
        scale: shouldReduceMotion ? 1 : scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mx-auto mt-8 h-[44rem] w-full max-w-5xl rounded-[28px] border-4 border-[#6C6C6C] bg-[#222222] p-2 shadow-2xl sm:h-[40rem] md:mt-10 md:h-[38rem] md:rounded-[30px] md:p-5 lg:h-[36rem] xl:h-[34rem]"
    >
      <div className="h-full w-full overflow-hidden rounded-[20px] bg-zinc-950 text-white md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
}
