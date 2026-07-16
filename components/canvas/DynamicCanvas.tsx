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
import ExperienceSection from "./ExperienceSection"; // استيراد قسم الخبرات الجديد

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
  
  const durationInSeconds = transitionConfig.globalDurationMs / 1000;

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
        {activeTab === "home" && (
          <HomeSection homeContent={homeContent} theme={theme} />
        )}

        {activeTab === "experience" && (
          // تم تبديل النص المؤقت بالمكون التفاعلي الجديد
          <ExperienceSection experiences={experiences} theme={theme} />
        )}

        {activeTab === "skills" && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2" style={{ color: theme.textPrimary }}>المهارات الفنية</h2>
            <p style={{ color: theme.textSecondary }}>قريباً: سنقوم ببناء شاشة أشرطة التقدم التفاعلية لمهاراتك الفنية والقانونية!</p>
          </div>
        )}

        {activeTab === "certs" && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2" style={{ color: theme.textPrimary }}>الشهادات والاعتمادات</h2>
            <p style={{ color: theme.textSecondary }}>قريباً: سنقوم ببناء الجدول الزمني الأنيق لعرض شهاداتك الأكاديمية والمهنية!</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
        {activeTab === "experience" && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2" style={{ color: theme.textPrimary }}>الخبرات المهنية</h2>
            <p style={{ color: theme.textSecondary }}>قريباً: سنقوم ببناء هذا المكون التفاعلي للخبرات وعرض نيل للطيران والمطار بالكامل!</p>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2" style={{ color: theme.textPrimary }}>المهارات الفنية</h2>
            <p style={{ color: theme.textSecondary }}>قريباً: سنقوم ببناء شاشة أشرطة التقدم التفاعلية لمهاراتك الفنية والقانونية!</p>
          </div>
        )}

        {activeTab === "certs" && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2" style={{ color: theme.textPrimary }}>الشهادات والاعتمادات</h2>
            <p style={{ color: theme.textSecondary }}>قريباً: سنقوم ببناء الجدول الزمني الأنيق لعرض شهاداتك الأكاديمية والمهنية!</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
