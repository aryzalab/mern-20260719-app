"use client";
import { HOME_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import React from "react";

function ContactPage() {
  const router = useRouter();

  setTimeout(() => {
    router.push(HOME_ROUTE)
  }, 5000);

  return <div>ContactPage</div>;
}

export default ContactPage;
