"use client";

import React from "react";
import EventCategories from "@/components/EventCategories";
import CompleteServices from "@/components/CompleteServices";

export default function ServicesExperience() {
  return (
    <>
      {/* SECTION A: Event Categories / Capabilities */}
      <EventCategories />

      {/* SECTION B: Complete Event Planning / 10 Services Grid */}
      <CompleteServices />
    </>
  );
}
