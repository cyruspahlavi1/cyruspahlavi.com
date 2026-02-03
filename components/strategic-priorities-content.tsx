'use client';

import { Quote, Leaf, Users, GraduationCap, Handshake, Building, Shield } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function StrategicPrioritiesContent() {
  const { isRTL, locale } = useI18n();

  const priorities = [
    {
      icon: Leaf,
      titleEn: 'Championing Sustainability to Protect Our Planet',
      titleFa: 'حمایت از پایداری برای حفاظت از سیاره ما',
      descriptionEn: 'HRH Cyrus Pahlavi believes that in a rapidly shifting world, it is our duty to think generations ahead and to have the courage to take bold steps. Addressing complex challenges such as climate change, water scarcity, and environmental degradation requires innovative partnerships and pragmatic solutions.',
      descriptionFa: 'والاحضرت سایروس پهلوی معتقد است که در جهانی که به سرعت در حال تغییر است، وظیفه ماست که نسل‌ها جلوتر فکر کنیم و شجاعت گام‌های جسورانه را داشته باشیم. رسیدگی به چالش‌های پیچیده مانند تغییرات اقلیمی، کمبود آب و تخریب محیط زیست نیازمند مشارکت‌های نوآورانه و راه‌حل‌های عملگرایانه است.',
      quoteEn: 'Sustainability is a fundamental component of our approach and endeavours to promote climate action, foster international cooperation, and seek practical solutions to the challenges facing our planet.',
      quoteFa: 'پایداری جزء اساسی رویکرد و تلاش‌های ما برای ترویج اقدام اقلیمی، تقویت همکاری بین‌المللی و جستجوی راه‌حل‌های عملی برای چالش‌های پیش روی سیاره ماست.',
    },
    {
      icon: Users,
      titleEn: 'Strengthening Peaceful Coexistence for a Stable Future',
      titleFa: 'تقویت همزیستی مسالمت‌آمیز برای آینده‌ای پایدار',
      descriptionEn: "Diversity built our communities, and HRH Cyrus Pahlavi's unwavering commitment to inclusivity will continue to shape the future. Nurturing constructive relationships within and beyond borders is paramount to ensuring growth and stability. We stand shoulder to shoulder with those seeking to build a better world and celebrate what unites us in the spirit of tolerance, peace, and stability.",
      descriptionFa: 'تنوع جوامع ما را ساخته است و تعهد راسخ والاحضرت سایروس پهلوی به فراگیری همچنان آینده را شکل خواهد داد. پرورش روابط سازنده در داخل و خارج از مرزها برای تضمین رشد و ثبات بسیار مهم است. ما شانه به شانه کسانی که به دنبال ساختن جهانی بهتر هستند ایستاده‌ایم و آنچه ما را در روح تساهل، صلح و ثبات متحد می‌کند جشن می‌گیریم.',
      quoteEn: 'We extend the hand of friendship to all who share our values of peaceful coexistence and mutual respect to achieve progress and prosperity.',
      quoteFa: 'ما دست دوستی را به سوی همه کسانی که ارزش‌های همزیستی مسالمت‌آمیز و احترام متقابل ما را برای دستیابی به پیشرفت و رفاه به اشتراک می‌گذارند دراز می‌کنیم.',
    },
    {
      icon: GraduationCap,
      titleEn: 'Advancing Education as the Foundation of Development',
      titleFa: 'پیشبرد آموزش به عنوان پایه توسعه',
      descriptionEn: 'Supporting and empowering all members of society is essential when building a globally connected and thriving community, and that empowerment begins with a quality education and opportunities for all. HRH invests in the leaders of tomorrow with a focus on high-quality education and initiatives that underpin strong traditions, character, and resilience.',
      descriptionFa: 'حمایت و توانمندسازی همه اعضای جامعه در ساختن جامعه‌ای جهانی متصل و پررونق ضروری است و این توانمندسازی با آموزش با کیفیت و فرصت‌ها برای همه آغاز می‌شود. والاحضرت در رهبران فردا با تمرکز بر آموزش با کیفیت بالا و ابتکاراتی که سنت‌های قوی، شخصیت و تاب‌آوری را پشتیبانی می‌کنند سرمایه‌گذاری می‌کند.',
      quoteEn: 'We are blessed with many resources, especially our highly skilled human capital—people come first, because for a community to prosper, so too must its people.',
      quoteFa: 'ما منابع بسیاری داریم، به ویژه سرمایه انسانی بسیار ماهر—مردم در اولویت هستند، زیرا برای رونق یک جامعه، مردم آن نیز باید پیشرفت کنند.',
    },
    {
      icon: Handshake,
      titleEn: 'Reinforcing International Cooperation to Foster Enduring Peace',
      titleFa: 'تقویت همکاری بین‌المللی برای تقویت صلح پایدار',
      descriptionEn: 'In pursuit of the shared goals of international peace, stability, and development, HRH Cyrus Pahlavi believes in the importance of building and nurturing constructive partnerships with other nations to help create a more harmonious and sustainable world.',
      descriptionFa: 'در راستای اهداف مشترک صلح، ثبات و توسعه بین‌المللی، والاحضرت سایروس پهلوی به اهمیت ایجاد و پرورش مشارکت‌های سازنده با سایر کشورها برای کمک به ایجاد جهانی هماهنگ‌تر و پایدارتر اعتقاد دارد.',
      quoteEn: 'We continue to build bridges of partnership and cooperation, serve as a facilitator of diplomatic dialogue, and actively support international efforts aimed at promoting peace and prosperity.',
      quoteFa: 'ما به ساختن پل‌های مشارکت و همکاری ادامه می‌دهیم، به عنوان تسهیل‌کننده گفتگوی دیپلماتیک عمل می‌کنیم و فعالانه از تلاش‌های بین‌المللی با هدف ترویج صلح و رفاه حمایت می‌کنیم.',
    },
    {
      icon: Building,
      titleEn: 'Driving Economic Prosperity and Resilience',
      titleFa: 'پیشبرد رفاه و تاب‌آوری اقتصادی',
      descriptionEn: 'Consistent with the longstanding ambition to develop an increasingly resilient, dynamic, and knowledge-based economy, HRH continues to invest in people and knowledge as the most powerful drivers of economic development and diversification. This includes partnering with nations and stakeholders around the world to facilitate trade and investment, promote sustainable growth, and develop infrastructure that enables individuals and economies to thrive.',
      descriptionFa: 'مطابق با بلندپروازی دیرینه برای توسعه اقتصادی تاب‌آور، پویا و مبتنی بر دانش، والاحضرت همچنان در مردم و دانش به عنوان قوی‌ترین محرک‌های توسعه اقتصادی و تنوع‌بخشی سرمایه‌گذاری می‌کند. این شامل مشارکت با کشورها و ذینفعان در سراسر جهان برای تسهیل تجارت و سرمایه‌گذاری، ترویج رشد پایدار و توسعه زیرساخت‌هایی است که افراد و اقتصادها را قادر به شکوفایی می‌سازد.',
      quoteEn: 'Further diversifying our economy is a key strategic focus of our future plans. It is therefore necessary to accelerate economic development efforts to continue building a leading global presence.',
      quoteFa: 'تنوع بیشتر اقتصاد ما یک تمرکز استراتژیک کلیدی برنامه‌های آینده ماست. بنابراین لازم است تلاش‌های توسعه اقتصادی را برای ادامه ساختن حضور پیشرو جهانی تسریع کنیم.',
    },
    {
      icon: Shield,
      titleEn: 'Affirming Identity and Shared Belonging',
      titleFa: 'تأیید هویت و تعلق مشترک',
      descriptionEn: 'Emerging from humble beginnings, rapid transformation was the result of the grit, hard work, and determination of our ancestors to build a better future for all. In championing present and open leadership, HRH believes that future progress relies on our collective vision and commitment, and that every individual can uniquely contribute towards writing the next chapter.',
      descriptionFa: 'با ظهور از آغازهای فروتنانه، تحول سریع نتیجه پشتکار، سخت‌کوشی و عزم نیاکان ما برای ساختن آینده‌ای بهتر برای همه بود. در حمایت از رهبری حاضر و باز، والاحضرت معتقد است که پیشرفت آینده بر چشم‌انداز و تعهد جمعی ما متکی است و هر فردی می‌تواند به طور منحصر به فرد در نوشتن فصل بعدی مشارکت کند.',
      quoteEn: 'We are fortunate to have people who have proven their spirit and determination to overcome the toughest challenges. Our pride in our people is infinite.',
      quoteFa: 'ما خوشبخت هستیم که مردمی داریم که روحیه و عزم خود را برای غلبه بر سخت‌ترین چالش‌ها ثابت کرده‌اند. غرور ما به مردممان بی‌نهایت است.',
    },
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {locale === 'fa' ? 'اولویت‌های استراتژیک' : 'Strategic Priorities'}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {locale === 'fa'
                ? 'بهبود کیفیت زندگی برای بشریت و تصور جهانی بهتر برای همه'
                : 'Improving quality of life for humanity and envisioning a better world for all'}
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              {locale === 'fa'
                ? 'فلسفه و باورهایی که زیربنای رهبری والاحضرت سایروس پهلوی هستند، چراغ راهنمای حال و آینده‌اند. از سرمایه‌گذاری در آموزش و تسریع تنوع اقتصادی تا پیشبرد اخوت انسانی و پایداری محیط زیست، این اولویت‌های استراتژیک تعهد مادام‌العمر به خدمت به مردم و مشارکت در ثبات جهانی را منعکس می‌کنند.'
                : "The philosophy and beliefs that underpin HRH Cyrus Pahlavi's leadership are a guiding light for the present and future. From investing in education and accelerating economic diversification to advancing human fraternity and environmental sustainability, these strategic priorities reflect a lifelong commitment to serving people and contributing to global stability."}
            </p>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="bg-neutral-950">
        {priorities.map((priority, index) => {
          const Icon = priority.icon;
          return (
            <div key={priority.titleEn} className="border-t border-white/10 py-24">
              <div className="container">
                <div className={cn(
                  "grid gap-16 lg:grid-cols-2 lg:items-start",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}>
                  <div className={cn(
                    isRTL && "text-right",
                    index % 2 === 1 && "lg:order-2"
                  )}>
                    <Icon className={cn("h-12 w-12 text-gold", isRTL && "mr-auto ml-0")} />
                    <h2 className="mt-8 font-serif text-3xl leading-tight text-white md:text-4xl">
                      {isRTL ? priority.titleFa : priority.titleEn}
                    </h2>
                    <p className="mt-8 text-lg text-neutral-400">
                      {isRTL ? priority.descriptionFa : priority.descriptionEn}
                    </p>
                  </div>
                  <div className={cn(
                    "rounded-xl border border-white/10 bg-black p-10",
                    isRTL && "text-right",
                    index % 2 === 1 && "lg:order-1"
                  )}>
                    <Quote className={cn("h-8 w-8 text-gold/40", isRTL && "mr-auto ml-0")} />
                    <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                      &ldquo;{isRTL ? priority.quoteFa : priority.quoteEn}&rdquo;
                    </p>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                      {locale === 'fa' ? 'والاحضرت سایروس پهلوی' : 'HRH Cyrus Pahlavi'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
