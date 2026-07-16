// components/canvas/DynamicCanvas.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { 
  ThemeTokens, 
  TransitionTokens, 
  HomeContent, 
  CompanyEntry, 
  SkillCategory, 
  Certification 
} from "@/types";
import HomeSection from "./HomeSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import CertsSection from "./CertsSection";

interface DynamicCanvasProps {
  activeTab: "home" | "experience" | "skills" | "certs";
  theme: ThemeTokens;
  transitionConfig: TransitionTokens;
  homeContent: HomeContent;
  experiences: CompanyEntry[];
  skills: SkillCategory[];
  certifications: Certification[];
}

export default function DynamicCanvas({
  activeTab,
  theme,
  transitionConfig,
  homeContent,
  experiences,
  skills,
  certifications,
}: DynamicCanvasProps) {
  
  // تحويل وقت الحركة إلى ثوانٍ لـ framer-motion
  const durationInSeconds = transitionConfig.globalDurationMs / 1000;

  // إعدادات حركة التلاشي والانتقال
  const variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: durationInSeconds,
          ease: transitionConfig.globalEasing,
        }}
        className="w-full h-full min-h-[400px] flex flex-col justify-center rounded-2xl p-6 md:p-8"
        style={{ backgroundColor: theme.surface }}
      >
        {/* عرض التبويب النشط بناءً على القيمة الحالية */}
        {activeTab === "home" && (
          <HomeSection homeContent={homeContent} theme={theme} />
        )}

        {activeTab === "experience" && (
          <ExperienceSection experiences={experiences} theme={theme} />
        )}

        {activeTab === "skills" && (
          <SkillsSection skills={skills} theme={theme} />
        )}

        {activeTab === "certs" && (
          <CertsSection certifications={certifications} theme={theme} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
