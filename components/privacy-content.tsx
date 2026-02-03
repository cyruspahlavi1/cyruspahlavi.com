'use client';

import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function PrivacyContent() {
  const { isRTL, locale } = useI18n();

  const sections = [
    {
      titleEn: 'Information Collection',
      titleFa: 'جمع‌آوری اطلاعات',
      contentEn: 'This website is primarily informational. We do not collect personal information unless you voluntarily contact us through official email channels.',
      contentFa: 'این وب‌سایت عمدتاً اطلاعاتی است. ما اطلاعات شخصی جمع‌آوری نمی‌کنیم مگر اینکه شما به طور داوطلبانه از طریق کانال‌های ایمیل رسمی با ما تماس بگیرید.',
    },
    {
      titleEn: 'Email Communications',
      titleFa: 'ارتباطات ایمیلی',
      contentEn: 'If you contact us through our official email addresses (office@cyruspahlavi.com, press@cyruspahlavi.com, gov@cyruspahlavi.com), we may retain your email for official record-keeping purposes.',
      contentFa: 'اگر از طریق آدرس‌های ایمیل رسمی ما (office@cyruspahlavi.com، press@cyruspahlavi.com، gov@cyruspahlavi.com) با ما تماس بگیرید، ممکن است ایمیل شما را برای اهداف نگهداری سوابق رسمی حفظ کنیم.',
    },
    {
      titleEn: 'Website Analytics',
      titleFa: 'تحلیل‌های وب‌سایت',
      contentEn: 'We may use standard web analytics to understand how visitors use our website. This information is aggregated and does not identify individuals.',
      contentFa: 'ما ممکن است از تحلیل‌های استاندارد وب برای درک نحوه استفاده بازدیدکنندگان از وب‌سایت استفاده کنیم. این اطلاعات تجمیعی است و افراد را شناسایی نمی‌کند.',
    },
    {
      titleEn: 'Security',
      titleFa: 'امنیت',
      contentEn: 'We implement appropriate technical and organizational measures to protect information. All official communications use email authentication (SPF/DKIM/DMARC) to prevent impersonation.',
      contentFa: 'ما اقدامات فنی و سازمانی مناسب را برای محافظت از اطلاعات اجرا می‌کنیم. تمام ارتباطات رسمی از احراز هویت ایمیل (SPF/DKIM/DMARC) برای جلوگیری از جعل هویت استفاده می‌کنند.',
    },
    {
      titleEn: 'Third-Party Links',
      titleFa: 'لینک‌های شخص ثالث',
      contentEn: 'Our website contains links to external platforms (art galleries, social media, etc.). We are not responsible for the privacy practices of external websites.',
      contentFa: 'وب‌سایت ما شامل لینک‌هایی به پلتفرم‌های خارجی (گالری‌های هنری، شبکه‌های اجتماعی و غیره) است. ما مسئول سیاست‌های حریم خصوصی وب‌سایت‌های خارجی نیستیم.',
    },
    {
      titleEn: 'Contact',
      titleFa: 'تماس',
      contentEn: 'Questions about this privacy policy can be directed to:',
      contentFa: 'سوالات در مورد این سیاست حریم خصوصی را می‌توانید به آدرس زیر ارسال کنید:',
      email: 'office@cyruspahlavi.com',
    },
    {
      titleEn: 'Updates',
      titleFa: 'به‌روزرسانی‌ها',
      contentEn: 'This policy may be updated periodically. Changes will be posted on this page.',
      contentFa: 'این سیاست ممکن است به طور دوره‌ای به‌روزرسانی شود. تغییرات در این صفحه منتشر خواهند شد.',
    },
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      <section className="bg-black py-24">
        <div className="container">
          <div className={isRTL ? "text-right" : ""}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {locale === 'fa' ? 'سیاست حریم خصوصی' : 'Privacy Policy'}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">
              {locale === 'fa' ? 'نحوه رسیدگی به اطلاعات' : 'How We Handle Information'}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-neutral-400">
              {locale === 'fa'
                ? 'نحوه محافظت و رسیدگی به اطلاعات در cyruspahlavi.com.'
                : 'How we protect and handle information on cyruspahlavi.com.'}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.titleEn} className={isRTL ? "text-right" : ""}>
                <h2 className="font-serif text-xl text-gold">
                  {isRTL ? section.titleFa : section.titleEn}
                </h2>
                <p className="mt-4 text-neutral-400">
                  {isRTL ? section.contentFa : section.contentEn}
                  {section.email && (
                    <strong className="text-white"> {section.email}</strong>
                  )}
                </p>
              </div>
            ))}
            <div className={cn(
              "border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-neutral-500",
              isRTL && "text-right"
            )}>
              <p>
                <strong className="text-white">
                  {locale === 'fa' ? 'آخرین به‌روزرسانی:' : 'Last Updated:'}
                </strong>{' '}
                {locale === 'fa' ? '۱۲ بهمن ۱۴۰۴' : 'February 1, 2026'}
              </p>
              <p className="mt-2">
                <strong className="text-white">
                  {locale === 'fa' ? 'تاریخ اجرا:' : 'Effective Date:'}
                </strong>{' '}
                {locale === 'fa' ? '۱۲ بهمن ۱۴۰۴' : 'February 1, 2026'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
