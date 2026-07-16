// components/canvas/HomeSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import type { HomeContent, ThemeTokens } from "@/types";

interface HomeSectionProps {
  homeContent: HomeContent;
  theme: ThemeTokens;
}

export default function HomeSection({ homeContent, theme }: HomeSectionProps) {
  
  // إعدادات ظهور العناصر بشكل تدريجي ناعم خلف بعضها البعض
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // الفارق الزمني بين ظهور كل عنصر والتالي له
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 text-right"
    >
      {/* 1. عنوان الترحيب الرئيسي */}
      <motion.div variants={itemVariants} className="space-y-2">
        <span 
          className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-opacity-10"
          style={{ 
            color: theme.accentDefault, 
            backgroundColor: `${theme.accentDefault}15` 
          }}
        >
          أهلاً بك
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2" style={{ color: theme.textPrimary }}>
          {homeContent.welcomeMessage}
        </h2>
      </motion.div>

      {/* 2. الفقرة التعريفية */}
      <motion.p 
        variants={itemVariants} 
        className="text-base md:text-lg leading-relaxed max-w-3xl"
        style={{ color: theme.textSecondary }}
      >
        {homeContent.introduction}
      </motion.p>

      {/* 3. قائمة النقاط البارزة (Highlights) */}
      <motion.div variants={itemVariants} className="space-y-4 pt-4 border-t border-slate-700/50">
        <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme.accentDefault }}>
          أبرز مجالات التركيز:
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeContent.highlights.map((highlight, index) => (
            <li 
              key={index}
              className="flex items-start space-x-3 space-x-reverse p-3 rounded-xl border border-slate-800 bg-slate-900/40"
            >
              {/* أيقونة نقطية مخصصة للأناقة بـ CSS النظيف */}
              <span 
                className="w-2 h-2 rounded-full mt-2 shrink-0" 
                style={{ backgroundColor: theme.accentDefault }}
              />
              <span className="text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
