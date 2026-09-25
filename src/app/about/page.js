"use client";

import { useState } from "react";

function AboutPage() {
  const [count, setCount] = useState(1);

  return <div>AboutPage {count}</div>;
}

export default AboutPage;
