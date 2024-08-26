'use client'
import React from "react";
import Hero from "@/components/Hero/Hero";
import OfferInvestment from "@/components/OffersInvestment/OfferInvestment";
import Dashboard from "@/components/Dashboard/Dashboard";
import LookingForward from "@/components/LookingForward/LookingForward";

export default function Home() {
  return (
    <>
    <div className="min-h-screen w-full ">
      <Hero />
      <OfferInvestment/>
      <Dashboard/>
      <LookingForward/>
    </div>
    </>
  );
}