// types/index.ts
//
// هذا الملف يحتوي على جميع واجهات التعريف البرمجية (Interfaces) للمشروع.
// يعمل كـ "عقد" يضمن توافق المكونات مع هيكلية البيانات القادمة من ملفات الـ JSON.

// 1. تعريف بيانات الملف الشخصي (Profile)
export interface Profile {
  name: string;
  role: string;
  avatarUrl?: string; // علامة الاستفهام تعني أن الحقل اختياري
  bio: string;
  skills_summary: string[];
  contacts: {
    email: string;
    github?: string;
    linkedin?: string;
  };
}

// 2. تعريف بيانات الألوان والتنسيق (Theme Tokens)
export interface ThemeTokens {
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  accentDefault: string;
}

// 3. تعريف بيانات حركات الانتقال (Transition Tokens)
export interface TransitionTokens {
  globalDurationMs: number;
  globalEasing: string;
}

// 4. تعريف بيانات الصفحة الرئيسية (Home Content)
export interface HomeContent {
  welcomeMessage: string;
  introduction: string;
  highlights: string[];
}

// 5. تعريف بيانات شركات الخبرة (Company Entry)
export interface CompanyEntry {
  id: string;
  name: string;
  role: string;
  period: string;
  watermarkBg?: string; // خلفية مخصصة للشركة
  logoUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  bullets: string[];
}

// 6. تعريف مصفوفة الشركات (Experiences Content Wrapper)
export interface ExperiencesContent {
  schemaVersion?: string;
  companies: CompanyEntry[];
}

// 7. تعريف مهارة فردية (Skill)
export interface Skill {
  name: string;
  level: number; // رقم من 1 إلى 100 يمثل مستوى الإتقان
}

// 8. تعريف فئة مهارات كاملة (Skill Category)
export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

// 9. تعريف مصفوفة المهارات (Skills Content Wrapper)
export interface SkillsContent {
  schemaVersion?: string;
  categories: SkillCategory[];
}

// 10. تعريف بيانات شهادة تعليمية أو مهنية (Certification)
export interface Certification {
  id: string;
  title: string;
  issuer?: string | null;
  year?: string | null;
  credentialId?: string;
}

// 11. تعريف مصفوفة الشهادات (Certificates Content Wrapper)
export interface CertificatesContent {
  schemaVersion?: string;
  certifications: Certification[];
}
