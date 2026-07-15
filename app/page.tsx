// app/page.tsx
//
// هذه هي الصفحة الرئيسية للموقع (React Server Component).
// تقوم بجلب البيانات بالكامل وتمريرها مباشرة كـ Props إلى PortfolioShell.

import { contentAdapter } from "@/adapters/jsonAdapter";
import PortfolioShell from "@/layouts/PortfolioShell";

export default async function Page() {
  // جلب البيانات بشكل متوازي وسريع جداً من محول البيانات
  const [profile, designConfig, homeContent, experiencesContent, skillsContent, certificatesContent] =
    await Promise.all([
      contentAdapter.getProfile(),
      contentAdapter.getGlobalDesignConfig(),
      contentAdapter.getHomeContent(),
      contentAdapter.getExperiences(),
      contentAdapter.getSkills(),
      contentAdapter.getCertifications(),
    ]);

  return (
    // تمرير البيانات المستلمة مباشرة إلى الغلاف الرئيسي للموقع
    <PortfolioShell
      profile={profile}
      theme={designConfig.theme}
      transitionConfig={designConfig.transitions}
      homeContent={homeContent}
      experiences={experiencesContent.companies}
      skills={skillsContent.categories}
      certifications={certificatesContent.certifications}
    />
  );
}
