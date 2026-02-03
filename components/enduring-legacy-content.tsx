'use client';

import { Quote } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function EnduringLegacyContent() {
  const { isRTL, locale } = useI18n();

  const values = [
    {
      titleEn: 'Strength',
      titleFa: 'قدرت',
      descriptionEn: 'Power exercised with wisdom and restraint',
      descriptionFa: 'قدرتی که با حکمت و خویشتن‌داری اعمال می‌شود',
    },
    {
      titleEn: 'Conscience',
      titleFa: 'وجدان',
      descriptionEn: 'Authority guided by moral principle',
      descriptionFa: 'اقتداری که توسط اصول اخلاقی هدایت می‌شود',
    },
    {
      titleEn: 'Tolerance',
      titleFa: 'تساهل',
      descriptionEn: 'Faith honoured without compulsion',
      descriptionFa: 'ایمانی که بدون اجبار محترم شمرده می‌شود',
    },
    {
      titleEn: 'Citizenship',
      titleFa: 'شهروندی',
      descriptionEn: 'Pluralism protected under law',
      descriptionFa: 'کثرت‌گرایی که تحت قانون محافظت می‌شود',
    },
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {locale === 'fa' ? 'میراث' : 'Legacy'}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {locale === 'fa'
                ? 'رهبری شکل‌گرفته توسط میراث نسل‌های گذشته'
                : 'Leadership shaped by the legacy of previous generations'}
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              {locale === 'fa'
                ? 'والاحضرت سایروس پهلوی معتقد است که یک رهبر واقعی شجاعت دارد که با مردم خود صادق باشد و از دیگران مانند خانواده مراقبت کند، که از ارزش‌های عمیق مهمان‌نوازی و جامعه نشأت می‌گیرد.'
                : 'HRH Cyrus Pahlavi firmly believes that a true leader has the courage to be open with his people and care for others as family, extending from the deep-rooted values of hospitality and community.'}
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <p className={cn(
              "text-xs font-semibold uppercase tracking-[0.3em] text-gold",
              isRTL && "text-right"
            )}>
              {locale === 'fa' ? 'میراث مداوم تحول' : 'A Continued Legacy of Transformation'}
            </p>
            <p className={cn(
              "mt-8 text-xl leading-relaxed text-white",
              isRTL && "text-right"
            )}>
              {locale === 'fa'
                ? 'ارزش‌هایی که توسط نسل‌های گذشته منتقل شده‌اند، چراغ راهنمایی برای حال و آینده هستند. والاحضرت همچنان از تعهد به رهبری با الگو بودن و میراث مردم‌محور الهام می‌گیرد.'
                : 'The values passed on by previous generations are a guiding light for the present and future. His Royal Highness continues to draw inspiration from a commitment to leading by example and a people-centred legacy.'}
            </p>
            <div className={cn(
              "mt-12 rounded-xl border border-white/10 bg-black p-10",
              isRTL && "text-right"
            )}>
              <Quote className={cn("h-8 w-8 text-gold/40", isRTL && "mr-auto ml-0")} />
              <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                {locale === 'fa'
                  ? '«این میراث برای همه ما ارزشمند است—توسط نیاکان ما شکل گرفته و از طریق ما و نسل‌های آینده که پرچم را به جلو می‌برند ادامه می‌یابد. مسئولیت ما در برابر نسل‌های گذشته و آینده این است که آنچه ارزشمند است را با تمام قدرت، تلاش و عزمی که خداوند به ما عطا کرده حفظ کنیم.»'
                  : '"This legacy is precious to us all—formed by our ancestors, and continuing through us and the generations to come who will carry the flag forward. Our responsibility to past and future generations is to preserve what is precious with all the strength, effort and determination that God has bestowed upon us."'}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                {locale === 'fa' ? 'والاحضرت سایروس پهلوی' : 'HRH Cyrus Pahlavi'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Leaders Section */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              {locale === 'fa' ? 'گرامیداشت ارزش‌های نیاکان ما' : 'Honouring the Values of Our Ancestors'}
            </h2>
            <p className="mt-8 text-lg text-neutral-400">
              {locale === 'fa'
                ? 'ارزش‌های سنتی مانند جامعه، سخاوت و فراگیری منبع عمیق غرور و تعلق هستند. والاحضرت سایروس پهلوی اطمینان از ارتباط جوانان با فرهنگ و ارزش‌های نیاکانشان را در اولویت قرار داده است.'
                : 'Traditional values such as community, generosity, and inclusivity are a profound source of pride and belonging. HRH Cyrus Pahlavi has made it a priority to ensure that youth remain connected to the culture and values of their ancestors.'}
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className={cn(
              "rounded-xl border border-white/10 bg-neutral-950 p-10",
              isRTL && "text-right"
            )}>
              <h3 className="font-serif text-2xl text-gold">
                {locale === 'fa' ? 'کوروش بزرگ' : 'Cyrus the Great'}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                {locale === 'fa' ? 'بنیان‌گذار امپراتوری پارس، ۵۵۹-۵۳۰ پیش از میلاد' : 'Founder of the Persian Empire, 559-530 BCE'}
              </p>
              <p className="mt-6 text-neutral-400">
                {locale === 'fa'
                  ? 'در طول قرن‌ها و جوامع، کوروش بزرگ به خاطر خویشتن‌داری پس از پیروزی به یاد آورده می‌شود—برای بازسازی معابد و بازگرداندن مردم آواره برای بازسازی زندگی‌شان. منشور کوروش به عنوان نماد جهانی کرامت انسانی و حقوق بنیادین مورد استناد قرار گرفته است.'
                  : 'Across centuries and communities, Cyrus the Great is remembered for restraint after victory—for restoring sanctuaries and returning displaced peoples to rebuild their lives. The Cyrus Cylinder has been invoked as a global symbol of human dignity and fundamental rights.'}
              </p>
            </div>
            <div className={cn(
              "rounded-xl border border-white/10 bg-neutral-950 p-10",
              isRTL && "text-right"
            )}>
              <h3 className="font-serif text-2xl text-gold">
                {locale === 'fa' ? 'میراث پهلوی' : 'The Pahlavi Legacy'}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                {locale === 'fa' ? 'ایران مدرن، ۱۳۰۴-۱۳۵۷' : 'Modern Iran, 1925-1979'}
              </p>
              <p className="mt-6 text-neutral-400">
                {locale === 'fa'
                  ? 'در دوران پهلوی، پایه‌های یک دولت مدنی مدرن بنا نهاده شد: دانشگاه‌ها گسترش یافتند، نهادهای ملی تقویت شدند و قانون شروع به شناسایی همه شهروندان به عنوان مشارکت‌کنندگان کامل در زندگی ملی کرد.'
                  : 'Under the Pahlavi era, the foundations of a modern civil state were built: universities expanded, national institutions strengthened, and the law began to recognize all citizens as full participants in national life.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className={cn(
            "grid gap-16 lg:grid-cols-2 lg:items-center",
            isRTL && "lg:flex-row-reverse"
          )}>
            <div className={isRTL ? "text-right lg:order-2" : ""}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                {locale === 'fa' ? 'تعهد به میراث' : 'A Commitment to Heritage'}
              </p>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-white md:text-4xl">
                {locale === 'fa'
                  ? 'حفظ میراث در حالی که به سوی آینده پیش می‌رویم'
                  : 'Preserving heritage while advancing toward the future'}
              </h2>
              <p className="mt-8 text-lg text-neutral-400">
                {locale === 'fa'
                  ? 'والاحضرت متعهد به حفظ میراث و نگهداری روح دیرینه وحدت و اخوت انسانی است. مطابق با این چشم‌انداز، ایشان از مردم با هر پیشینه‌ای که در زمینه‌های مختلف موفق هستند استقبال می‌کند.'
                  : 'HRH is committed to preserving heritage and maintaining a longstanding spirit of unity and human fraternity. Consistent with this vision, he welcomes people of all backgrounds who are contributing to success in many fields.'}
              </p>
              <p className="mt-6 text-neutral-500">
                {locale === 'fa'
                  ? 'با پیروی از نسل‌های گذشته و الهام از استقامت و مقاومت پیشینیان، والاحضرت سایروس پهلوی مصمم است که تاریخ و میراث غنی همچنان چراغ راهنما باقی بماند در حالی که به حرکت بلندپروازانه به سوی آینده ادامه می‌دهیم.'
                  : 'Following in the footsteps of previous generations, and inspired by the fortitude and resilience of those who came before, HRH Cyrus Pahlavi is determined to ensure that rich history and heritage remain a guiding light as we continue an ambitious march into the future.'}
              </p>
            </div>
            <div className={cn(
              "rounded-xl border border-white/10 bg-black p-10",
              isRTL ? "text-right lg:order-1" : ""
            )}>
              <Quote className={cn("h-8 w-8 text-gold/40", isRTL && "mr-auto ml-0")} />
              <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                {locale === 'fa'
                  ? '«ما خوشبخت هستیم که مردمی داریم که روحیه و عزم خود را برای غلبه بر سخت‌ترین چالش‌ها ثابت کرده‌اند. غرور ما به مردممان بی‌نهایت است.»'
                  : '"We are fortunate to have people who have proven their spirit and determination to overcome the toughest challenges. Our pride in our people is infinite."'}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                {locale === 'fa' ? 'والاحضرت سایروس پهلوی' : 'HRH Cyrus Pahlavi'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              {locale === 'fa' ? 'معیاری که ادعا می‌کنیم' : 'The standard we claim'}
            </h2>
            <p className="mt-6 text-lg text-neutral-400">
              {locale === 'fa'
                ? 'قدرت تحت قانون. اقتدار منضبط شده توسط وجدان. ایمان محترم شمرده شده بدون اجبار. کثرت‌گرایی محافظت شده توسط شهروندی.'
                : 'Strength under law. Authority disciplined by conscience. Faith honoured without compulsion. Pluralism protected by citizenship.'}
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.titleEn} className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
                <h4 className="font-serif text-xl text-gold">
                  {isRTL ? value.titleFa : value.titleEn}
                </h4>
                <p className="mt-4 text-sm text-neutral-500">
                  {isRTL ? value.descriptionFa : value.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
