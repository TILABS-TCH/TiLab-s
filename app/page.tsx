import React from "react";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { InteractiveLab } from "@/components/lab/InteractiveLab";
import { SkillsStack } from "@/components/skills/SkillsStack";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ContactForm } from "@/components/contact/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <InteractiveLab />
      <SkillsStack />
      <JourneyTimeline />
      <ProcessSection />
      <ContactForm />
    </>
  );
}
