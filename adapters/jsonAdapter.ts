// adapters/jsonAdapter.ts
//
// هذا الملف هو محول البيانات (Adapter) المسؤول عن قراءة ملفات الـ JSON
// المحلية من الخادم وتحويلها إلى كائنات برمجية تفهمها لغة TypeScript.

import fs from "fs/promises";
import path from "path";
import type {
  Profile,
  ThemeTokens,
  TransitionTokens,
  HomeContent,
  ExperiencesContent,
  SkillsContent,
  CertificatesContent,
} from "@/types";

// دالة مساعدة لقراءة أي ملف JSON من مجلد content بأمان
async function readJsonFile<T>(fileName: string): Promise<T> {
  // تحديد المسار الفيزيائي للملف داخل السيرفر
  const filePath = path.join(process.cwd(), "content", fileName);
  
  try {
    // قراءة محتوى الملف كـ نص (UTF-8)
    const fileContent = await fs.readFile(filePath, "utf-8");
    // تحويل النص إلى كائن برمجى (JSON Object) وإرجاعه
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`خطأ أثناء قراءة ملف الـ JSON: ${fileName}`, error);
    throw new Error(`فشل في جلب البيانات من الملف: ${fileName}`);
  }
}

// الكائن الرئيسي المصدّر للمشروع لجلب كافة المحتويات
export const contentAdapter = {
  // 1. جلب بيانات الملف الشخصي
  async getProfile(): Promise<Profile> {
    const data = await readJsonFile<Profile>("profile.json");
    return data satisfies Profile;
  },

  // 2. جلب إعدادات التصميم والحركات العامة
  async getGlobalDesignConfig(): Promise<{ theme: ThemeTokens; transitions: TransitionTokens }> {
    const data = await readJsonFile<{ theme: ThemeTokens; transitions: TransitionTokens }>("design.json");
    return data satisfies { theme: ThemeTokens; transitions: TransitionTokens };
  },

  // 3. جلب محتوى الصفحة الرئيسية الترحيبي
  async getHomeContent(): Promise<HomeContent> {
    const data = await readJsonFile<HomeContent>("home.json");
    return data satisfies HomeContent;
  },

  // 4. جلب مصفوفة خبرات العمل والشركات
  async getExperiences(): Promise<ExperiencesContent> {
    const data = await readJsonFile<ExperiencesContent>("experiences.json");
    return data satisfies ExperiencesContent;
  },

  // 5. جلب قائمة المهارات وفئاتها
  async getSkills(): Promise<SkillsContent> {
    const data = await readJsonFile<SkillsContent>("skills.json");
    return data satisfies SkillsContent;
  },

  // 6. جلب قائمة الشهادات والاعتمادات
  async getCertifications(): Promise<CertificatesContent> {
    const data = await readJsonFile<CertificatesContent>("certificates.json");
    return data satisfies CertificatesContent;
  },
};
