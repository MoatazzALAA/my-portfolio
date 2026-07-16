// components/canvas/ExperienceSection.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CompanyEntry, ThemeTokens } from "@/types";

interface ExperienceSectionProps {
  experiences: CompanyEntry[];
  theme: ThemeTokens;
}

export default function ExperienceSection({ experiences, theme }: ExperienceSectionProps) {
  // تتبع الشركة المحددة حالياً لعرض تفاصيلها (تبدأ افتراضياً بالشركة الأولى)
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(
    experiences[0]?.id || ""
  );

  // جلب بيانات الشركة المحددة حالياً من المصفوفة
  const activeCompany = experiences.find((c) => c.id === selectedCompanyId) || experiences[0];

  if (!activeCompany) {
    return (
      <div className="text-center py-8" style={{ color: theme.textSecondary }}>
        لا توجد خبرات مهنية مضافة حالياً.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 text-right">
      
      {/* 1. قائمة اختيار الشركات (الشريط الجانبي للخبرات) */}
      <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 shrink-0 md:w-48 gap-2 border-b md:border-b-0 md:border-l border-slate-800">
        {experiences.map((company) => {
          const isSelected = company.id === selectedCompanyId;
          return (
            <button
              key={company.id}
              onClick={() => setSelectedCompanyId(company.id)}
              className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap text-right focus:outline-none w-full flex items-center justify-between"
              style={{
                backgroundColor: isSelected ? `${theme.accentDefault}15` : "transparent",
                color: isSelected ? theme.accentDefault : theme.textSecondary,
                borderRight: isSelected ? `3px solid ${theme.accentDefault}` : "3px solid transparent",
              }}
            >
              <span>{company.name}</span>
            </button>
          );
        })}
      </div>

      {/* 2. لوحة تفاصيل الخبرة والإنجازات المتغيرة */}
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCompany.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* رأس تفاصيل الوظيفة */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold" style={{ color: theme.textPrimary }}>
                {activeCompany.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold" style={{ color: theme.accentDefault }}>
                  {activeCompany.name}
                </span>
                <span style={{ color: theme.textSecondary }}>•</span>
                <span style={{ color: theme.textSecondary }}>{activeCompany.period}</span>
              </div>
            </div>

            {/* عرض بطاقات الأرقام والمقاييس (Metrics) */}
            {activeCompany.metrics && activeCompany.metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {activeCompany.metrics.map((metric, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-center"
                  >
                    <span className="text-2xl font-black" style={{ color: theme.accentDefault }}>
                      {metric.value}
                    </span>
                    <span className="text-xs mt-1" style={{ color: theme.textSecondary }}>
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* نقاط مهام الإنجازات والمسؤوليات */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.accentDefault }}>
                المسؤوليات والإنجازات الأساسية:
              </h4>
              <ul className="space-y-3">
                {activeCompany.bullets.map((bullet, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start space-x-2 space-x-reverse text-sm leading-relaxed"
                    style={{ color: theme.textSecondary }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" 
                      style={{ backgroundColor: theme.accentDefault }}
                    />
                    <span style={{ color: theme.textPrimary }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
