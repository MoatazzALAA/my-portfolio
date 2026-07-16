// layouts/PortfolioShell.tsx
"use client";

import React, { useState } from "react";
import type { 
  Profile, 
  ThemeTokens, 
  TransitionTokens, 
  HomeContent, 
  CompanyEntry, 
  SkillCategory, 
  Certification 
} from "@/types";
import LeftPanel from "@/components/shared/LeftPanel";

interface PortfolioShellProps {
  profile: Profile;
  theme: ThemeTokens;
  transitionConfig: TransitionTokens;
  homeContent: HomeContent;
  experiences: CompanyEntry[];
  skills: SkillCategory[];
  certifications: Certification[];
}

export default function PortfolioShell({
  profile,
  theme,
  transitionConfig,
  homeContent,
  experiences,
  skills,
  certifications,
}: PortfolioShellProps) {
  // تتبع التبويب النشط حالياً في الواجهة التفاعلية
  const [activeTab, setActiveTab] = useState<"home" | "experience" | "skills" | "certs">("home");

  return (
    <div 
      className="min-h-screen w-full flex flex-col lg:flex-row overflow-x-hidden"
      style={{ backgroundColor: theme.background }}
    >
      {/* 1. الشريط الجانبي الأيسر */}
      <LeftPanel profile={profile} theme={theme} />

      {/* 2. منطقة المحتوى والتنقل الرئيسي */}
      <main className="flex-1 flex flex-col p-6 lg:p-12 justify-between">
        {/* أزرار التنقل العلوية */}
        <nav className="flex space-x-4 space-x-reverse mb-8 overflow-x-auto pb-2">
          {[
            { id: "home", label: "الرئيسية" },
            { id: "experience", label: "الخبرات المهنية" },
            { id: "skills", label: "المهارات" },
            { id: "certs", label: "الشهادات والاعتمادات" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap"
              style={{
                backgroundColor: activeTab === tab.id ? theme.accentDefault : "transparent",
                color: activeTab === tab.id ? theme.background : theme.textSecondary,
                border: `1px solid ${activeTab === tab.id ? theme.accentDefault : `${theme.textSecondary}30`}`
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* مساحة عرض الشاشات التفاعلية (Canvas Area) */}
        <div className="flex-1 flex flex-col justify-center">
          {/* هنا سنستدعي الـ DynamicCanvas والـ Sections في الخطوة القادمة */}
          <div className="p-6 rounded-2xl" style={{ backgroundColor: theme.surface }}>
            <p className="text-center" style={{ color: theme.textSecondary }}>
              مساحة عرض قسم: <strong style={{ color: theme.accentDefault }}>{activeTab}</strong> ستكتمل في الخطوة القادمة عند ربط الـ Canvas!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
