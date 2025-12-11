"use client";

import { TypeAnimation } from "react-type-animation";

export default function NameAnimation() {
  const longest = "Eduardo Porangaba";
  return <TypeAnimation sequence={["Eduardo ;)"]} speed={3} />;
}
