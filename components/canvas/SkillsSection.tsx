// components/canvas/SkillsSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import type { SkillCategory, ThemeTokens } from "@/types";

interface SkillsSectionProps {
  skills: SkillCategory[];
  theme: ThemeTokens;
}

export default function SkillsSection({ skills, theme }: SkillsSectionProps) {
  
  // إعدادات حركة حاوي المجموعات لظهور المجموعات تلو الأخرى
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right w-full"
    >
      {skills.map((category) => (
        <motion.div
          key={category.id}
          variants={cardVariants}
          className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 space-y-4"
        >
          {/* عنوان الفئة الفرعية للمهارات */}
          <h3 className="text-md font-bold border-b border-slate-800 pb-2" style={{ color: theme.textPrimary }}>
            {category.title}
          </h3>

          {/* قائمة المهارات الفردية داخل الفئة */}
          <div className="space-y-4">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="space-y-1.5">
                {/* اسم المهارة والنسبة المئوية */}
                <div className="flex justify-between text-xs font-semibold">
                  <span style={{ color: theme.textPrimary }}>{skill.name}</span>
                  <span style={{ color: theme.accentDefault }}>{skill.level}%</span>
                </div>

                {/* الخلفية الرمادية للشريط */}
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  {/* الشريط التفاعلي المتحرك */}
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: theme.accentDefault }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
