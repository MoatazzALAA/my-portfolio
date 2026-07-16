// components/canvas/CertsSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Certification, ThemeTokens } from "@/types";

interface CertsSectionProps {
  certifications: Certification[];
  theme: ThemeTokens;
}

export default function CertsSection({ certifications, theme }: CertsSectionProps) {
  
  // إعدادات الحركة لظهور الشهادات تلو الأخرى بسلاسة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4 text-right w-full"
    >
      <div className="border-b border-slate-800 pb-3 mb-6">
        <h3 className="text-xl font-bold" style={{ color: theme.textPrimary }}>
          الشهادات المهنية والاعتمادات الأكاديمية
        </h3>
        <p className="text-xs mt-1" style={{ color: theme.textSecondary }}>
          سجل بالوثائق والشهادات المعتمدة التي تم الحصول عليها خلال المسيرة المهنية
        </p>
      </div>

      <div className="space-y-4">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700/80 transition-colors duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            {/* تفاصيل الشهادة والجهة المانحة */}
            <div className="space-y-1">
              <h4 className="text-md font-bold" style={{ color: theme.textPrimary }}>
                {cert.title}
              </h4>
              <div className="flex items-center gap-2 text-xs" style={{ color: theme.textSecondary }}>
                <span>{cert.issuer}</span>
                {cert.year && (
                  <>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </>
                )}
              </div>
            </div>

            {/* رقم الاعتماد (Credential ID) إن وجد */}
            {cert.credentialId && (
              <div 
                className="text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950/50"
                style={{ color: theme.accentDefault }}
              >
                ID: {cert.credentialId}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
