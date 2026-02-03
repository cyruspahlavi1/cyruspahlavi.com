'use client';

import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function TermsContent() {
  const { isRTL, locale } = useI18n();

  const sections = [
    {
      titleEn: 'Acceptance',
      titleFa: 'پذیرش',
      contentEn: 'By accessing and using cyruspahlavi.com, you acknowledge and agree to these terms of service.',
      contentFa: 'با دسترسی و استفاده از cyruspahlavi.com، شما این شرایط خدمات را تأیید و می‌پذیرید.',
    },
    {
      titleEn: 'Official Nature',
      titleFa: 'ماهیت رسمی',
      contentEn: 'This website is the official platform of Cyrus Pahlavi. All content represents official positions and statements unless otherwise noted.',
      contentFa: 'این وب‌سایت پلتفرم رسمی سایروس پهلوی است. تمام محتوا نشان‌دهنده مواضع و بیانیه‌های رسمی است مگر اینکه غیر از این ذکر شده باشد.',
    },
    {
      titleEn: 'Permitted Use',
      titleFa: 'استفاده مجاز',
      contentEn: 'You may:',
      contentFa: 'شما می‌توانید:',
      listEn: [
        'View, download, and print materials for personal, educational, or informational use',
        'Link to our content with proper attribution',
        'Share official statements and documents in their unaltered form',
      ],
      listFa: [
        'مشاهده، دانلود و چاپ مطالب برای استفاده شخصی، آموزشی یا اطلاعاتی',
        'لینک دادن به محتوای ما با ذکر منبع مناسب',
        'به اشتراک‌گذاری بیانیه‌ها و اسناد رسمی به صورت بدون تغییر',
      ],
    },
    {
      titleEn: 'Prohibited Use',
      titleFa: 'استفاده ممنوع',
      contentEn: 'You may not:',
      contentFa: 'شما نمی‌توانید:',
      listEn: [
        'Modify, alter, or misrepresent official content',
        'Use our seal, logos, or branding without permission',
        'Impersonate Cyrus Pahlavi or this website',
        'Use automated systems to access the website excessively',
      ],
      listFa: [
        'تغییر، اصلاح یا تحریف محتوای رسمی',
        'استفاده از مهر، لوگو یا برند ما بدون اجازه',
        'جعل هویت سایروس پهلوی یا این وب‌سایت',
        'استفاده از سیستم‌های خودکار برای دسترسی بیش از حد به وب‌سایت',
      ],
    },
    {
      titleEn: 'Intellectual Property',
      titleFa: 'مالکیت معنوی',
      contentEn: 'Content on this website, including text, images, logos, and the official seal, is protected by intellectual property rights.',
      contentFa: 'محتوای این وب‌سایت، شامل متن، تصاویر، لوگوها و مهر رسمی، توسط حقوق مالکیت معنوی محافظت می‌شود.',
    },
    {
      titleEn: 'Official Documents',
      titleFa: 'اسناد رسمی',
      contentEn: 'Official documents are provided for public information. Redistribution should maintain reference numbers and attribution to cyruspahlavi.com.',
      contentFa: 'اسناد رسمی برای اطلاع عمومی ارائه شده‌اند. توزیع مجدد باید شماره‌های مرجع و ارجاع به cyruspahlavi.com را حفظ کند.',
    },
    {
      titleEn: 'Disclaimer',
      titleFa: 'سلب مسئولیت',
      contentEn: 'Information is provided "as is" for informational purposes. We strive for accuracy but make no warranties about completeness or timeliness.',
      contentFa: 'اطلاعات «به همان صورت» برای اهداف اطلاعاتی ارائه می‌شود. ما برای دقت تلاش می‌کنیم اما هیچ ضمانتی در مورد کامل بودن یا به‌روز بودن نمی‌دهیم.',
    },
    {
      titleEn: 'External Links',
      titleFa: 'لینک‌های خارجی',
      contentEn: 'We are not responsible for content on external websites linked from our platform.',
      contentFa: 'ما مسئول محتوای وب‌سایت‌های خارجی که از پلتفرم ما لینک شده‌اند نیستیم.',
    },
    {
      titleEn: 'Changes',
      titleFa: 'تغییرات',
      contentEn: 'These terms may be updated periodically. Continued use constitutes acceptance of updated terms.',
      contentFa: 'این شرایط ممکن است به طور دوره‌ای به‌روزرسانی شوند. استفاده مداوم به معنای پذیرش شرایط به‌روزرسانی شده است.',
    },
    {
      titleEn: 'Contact',
      titleFa: 'تماس',
      contentEn: 'Questions about these terms can be directed to:',
      contentFa: 'سوالات در مورد این شرایط را می‌توانید به آدرس زیر ارسال کنید:',
      email: 'office@cyruspahlavi.com',
    },
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      <section className="bg-black py-24">
        <div className="container">
          <div className={isRTL ? "text-right" : ""}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {locale === 'fa' ? 'شرایط خدمات' : 'Terms of Service'}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">
              {locale === 'fa' ? 'شرایط حاکم بر استفاده' : 'Terms Governing Use'}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-neutral-400">
              {locale === 'fa'
                ? 'شرایط حاکم بر استفاده از cyruspahlavi.com.'
                : 'Terms governing use of cyruspahlavi.com.'}
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
                {section.listEn && (
                  <ul className={cn(
                    "mt-4 list-disc space-y-2 text-neutral-400",
                    isRTL ? "pr-5" : "pl-5"
                  )}>
                    {(isRTL ? section.listFa : section.listEn)?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
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
