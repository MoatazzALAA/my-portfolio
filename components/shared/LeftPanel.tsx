// components/shared/LeftPanel.tsx
"use client";

import React from "react";
import type { Profile, ThemeTokens } from "@/types";

interface LeftPanelProps {
  profile: Profile;
  theme: ThemeTokens;
}

export default function LeftPanel({ profile, theme }: LeftPanelProps) {
  return (
    <aside 
      className="w-full lg:w-96 p-8 flex flex-col justify-between shrink-0 border-b lg:border-b-0 lg:border-r"
      style={{ 
        backgroundColor: theme.surface, 
        borderColor: `${theme.accentDefault}20` // إضافة شفافية للحدود
      }}
    >
      {/* القسم العلوي: معلومات الملف الشخصي */}
      <div className="flex flex-col items-center lg:items-start space-y-6">
        {/* الصورة الشخصية الافتراضية */}
        <div 
          className="w-32 h-32 rounded-full overflow-hidden border-2 flex items-center justify-center text-4xl font-bold bg-slate-800"
          style={{ borderColor: theme.accentDefault, color: theme.accentDefault }}
        >
          {profile.name.charAt(0)}
        </div>

        {/* النصوص والتعريف */}
        <div className="text-center lg:text-left space-y-2">
          <h1 className="text-2xl font-bold" style={{ color: theme.textPrimary }}>
            {profile.name}
          </h1>
          <p className="text-sm font-semibold" style={{ color: theme.accentDefault }}>
            {profile.role}
          </p>
          <p className="text-sm leading-relaxed mt-4" style={{ color: theme.textSecondary }}>
            {profile.bio}
          </p>
        </div>

        {/* نقاط القوة والاهتمامات */}
        <div className="w-full space-y-2 pt-4 border-t border-slate-700/50">
          {profile.skills_summary.map((skill, index) => (
            <span 
              key={index} 
              className="inline-block bg-slate-800/80 text-xs px-3 py-1 rounded-full mr-2 mb-2 border border-slate-700"
              style={{ color: theme.textPrimary }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* القسم السفلي: روابط الاتصال */}
      <div className="mt-8 lg:mt-0 pt-6 border-t border-slate-700/50 flex justify-center lg:justify-start space-x-4 space-x-reverse">
        {profile.contacts.email && (
          <a 
            href={`mailto:${profile.contacts.email}`}
            className="text-xs hover:underline"
            style={{ color: theme.accentDefault }}
          >
            البريد الإلكتروني
          </a>
        )}
        {profile.contacts.linkedin && (
          <a 
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline"
            style={{ color: theme.accentDefault }}
          >
            لينكد إن
          </a>
        )}
      </div>
    </aside>
  );
}
