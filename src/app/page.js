"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Contacts from "@/components/Contacts";
import Port from "@/components/Port";
import Site from "@/components/Site";
import Skill from "@/components/Skill";
import Skip from "@/components/Skip";
import React, { useEffect } from "react";
import smooth from "@/utils/smooth";
import link from "@/utils/link";

export default function Home() {
  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
