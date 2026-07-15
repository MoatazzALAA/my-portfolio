// app/layout.tsx
//
// هذا هو الملف الهيكلي الخارجي للموقع بالكامل.
// وظيفته تهيئة بنية الصفحة الأساسية (HTML) واستدعاء ملف التنسيقات (CSS).

import type { Metadata } from "next";
import "@/styles/globals.css"; // استدعاء ملف التنسيقات الرئيسي الذي سننشئه لاحقاً

// إعدادات البحث والأرشفة (SEO) للموقع
export const metadata: Metadata = {
  title: "معرض أعمالي المهني",
  description: "معرض أعمال شخصي تم بناؤه باستخدام Next.js و Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {/* هنا سيتم عرض محتويات الصفحات المختلفة داخل الموقع */}
        {children}
      </body>
    </html>
  );
}
