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
import DynamicCanvas from "@/components/canvas/DynamicCanvas";

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
  // تتبع التبويب النشط حالياً في الواجهة التفاعلية (يبدأ افتراضياً بـ "home")
  const [activeTab, setActiveTab] = useState<"home" | "experience" | "skills" | "certs">("home");

  return (
    <div 
      className="min-h-screen w-full flex flex-col lg:flex-row overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: theme.background }}
    >
      {/* 1. الشريط الجانبي الأيسر (Left Panel) الثابت والمتجاوب */}
      <LeftPanel profile={profile} theme={theme} />

      {/* 2. منطقة المحتوى والتبديل التفاعلي */}
      <main className="flex-1 flex flex-col p-6 lg:p-12 justify-between min-w-0">
        
        {/* شريط التنقل العلوي الفاخر */}
        <nav className="flex space-x-4 space-x-reverse mb-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
          {[
            { id: "home", label: "الرئيسية" },
            { id: "experience", label: "الخبرات المهنية" },
            { id: "skills", label: "المهارات" },
            { id: "certs", label: "الشهادات والاعتمادات" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap focus:outline-none"
              style={{
                // تغيير الخلفية والنص والحدود ديناميكياً بحسب التبويب النشط وثيم الموقع
                backgroundColor: activeTab === tab.id ? theme.accentDefault : "transparent",
                color: activeTab === tab.id ? theme.background : theme.textSecondary,
                border: `1px solid ${activeTab === tab.id ? theme.accentDefault : `${theme.textSecondary}20`}`
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* مساحة عرض الشاشات التفاعلية (Dynamic Canvas Area) */}
        <div className="flex-1 flex flex-col justify-center">
          {/* استدعاء الشاشة الذكية وتمرير كافة الخصائص إليها */}
          <DynamicCanvas
            activeTab={activeTab}
            theme={theme}
            transitionConfig={transitionConfig}
            homeContent={homeContent}
            experiences={experiences}
            skills={skills}
            certifications={certifications}
          />
        </div>
      </main>
    </div>
  );
}            >
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
