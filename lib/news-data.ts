export interface NewsArticle {
  slug: string;
  date: string;
  dateFa: string;
  category: 'investment' | 'humanitarian' | 'technology' | 'culture' | 'announcement' | 'press';
  titleEn: string;
  titleFa: string;
  excerptEn: string;
  excerptFa: string;
  contentEn: string[];
  contentFa: string[];
  featured?: boolean;
  externalUrl?: string;
  source?: string;
}

export const newsArticles: NewsArticle[] = [
  // 2026
  {
    slug: 'miga-dao-founding-chairman',
    date: '1 February 2026',
    dateFa: '۱۲ بهمن ۱۴۰۴',
    category: 'announcement',
    featured: true,
    titleEn: 'HRH Cyrus Pahlavi Appointed Founding Chairman of MIGA DAO',
    titleFa: 'والاحضرت سایروس پهلوی به عنوان رئیس بنیان‌گذار میگا دائو منصوب شد',
    excerptEn: 'New decentralized autonomous organization launches to coordinate transparent humanitarian funding for the global Persian community.',
    excerptFa: 'سازمان خودمختار غیرمتمرکز جدید برای هماهنگی تأمین مالی بشردوستانه شفاف برای جامعه جهانی ایرانیان راه‌اندازی شد.',
    contentEn: [
      'HRH Cyrus Pahlavi has been appointed Founding Chairman of MIGA DAO, a new decentralized autonomous organization designed to coordinate transparent humanitarian funding for the global Persian community.',
      'MIGA DAO represents a new model for humanitarian coordination, combining blockchain-based transparency with traditional philanthropic governance. The organization will work alongside MIGA Protocol and MIGA Foundation to ensure accountability in the distribution of resources.',
      '"Transparency is not optional in humanitarian work—it is essential," HRH Cyrus Pahlavi stated at the announcement. "MIGA DAO provides the infrastructure to ensure that every contribution can be tracked, every decision can be verified, and every beneficiary can be served with dignity."',
      'The DAO structure enables community participation in governance while maintaining the operational efficiency needed for effective humanitarian response. Token holders will participate in key decisions regarding fund allocation, partnership development, and strategic priorities.',
      'MIGA DAO will initially focus on emergency relief, educational scholarships, and support for Persian cultural institutions. The organization operates with full on-chain transparency, with all transactions and governance decisions publicly verifiable.',
      'The launch represents the culmination of years of work developing privacy-preserving and transparent financial infrastructure for humanitarian purposes.',
    ],
    contentFa: [
      'والاحضرت سایروس پهلوی به عنوان رئیس بنیان‌گذار میگا دائو، یک سازمان خودمختار غیرمتمرکز جدید طراحی شده برای هماهنگی تأمین مالی بشردوستانه شفاف برای جامعه جهانی ایرانیان، منصوب شده است.',
      'میگا دائو نمایانگر یک مدل جدید برای هماهنگی بشردوستانه است که شفافیت مبتنی بر بلاک‌چین را با حکمرانی خیریه سنتی ترکیب می‌کند. این سازمان در کنار پروتکل میگا و بنیاد میگا کار خواهد کرد تا پاسخگویی در توزیع منابع را تضمین کند.',
      '«شفافیت در کار بشردوستانه اختیاری نیست—ضروری است،» والاحضرت سایروس پهلوی در اعلامیه بیان کرد. «میگا دائو زیرساختی فراهم می‌کند تا اطمینان حاصل شود که هر کمکی قابل پیگیری، هر تصمیمی قابل تأیید و هر ذینفعی با کرامت خدمت‌رسانی شود.»',
      'ساختار دائو مشارکت جامعه در حکمرانی را امکان‌پذیر می‌سازد در حالی که کارایی عملیاتی مورد نیاز برای پاسخ بشردوستانه مؤثر را حفظ می‌کند. دارندگان توکن در تصمیمات کلیدی در مورد تخصیص بودجه، توسعه مشارکت و اولویت‌های استراتژیک شرکت خواهند کرد.',
      'میگا دائو در ابتدا بر کمک اضطراری، بورسیه‌های تحصیلی و حمایت از نهادهای فرهنگی ایرانی تمرکز خواهد کرد. این سازمان با شفافیت کامل آن‌چین فعالیت می‌کند، با تمام تراکنش‌ها و تصمیمات حکمرانی که به صورت عمومی قابل تأیید هستند.',
      'این راه‌اندازی نتیجه سال‌ها کار در توسعه زیرساخت مالی حفظ حریم خصوصی و شفاف برای اهداف بشردوستانه است.',
    ],
  },
  {
    slug: 'parsis-foundation-launch',
    date: '20 January 2026',
    dateFa: '۳۰ دی ۱۴۰۴',
    category: 'humanitarian',
    featured: true,
    titleEn: 'Parsis Foundation Officially Launched',
    titleFa: 'راه‌اندازی رسمی بنیاد پارسیس',
    excerptEn: 'New foundation established to support civic, cultural, and humanitarian initiatives for the global Persian community.',
    excerptFa: 'بنیاد جدید برای حمایت از ابتکارات مدنی، فرهنگی و بشردوستانه برای جامعه جهانی ایرانیان تأسیس شد.',
    contentEn: [
      'The Parsis Foundation has been officially launched, establishing a new platform to support civic, cultural, and humanitarian initiatives for the global Persian community.',
      'Founded under the direction of HRH Cyrus Pahlavi, the foundation brings together resources and expertise to address challenges facing Iranians worldwide, with particular focus on education, cultural preservation, and humanitarian relief.',
      '"The Parsis Foundation represents our commitment to serving the Persian community wherever they may be," HRH Cyrus Pahlavi said at the launch. "We are building infrastructure that can respond to immediate humanitarian needs while also investing in the long-term flourishing of our culture and people."',
      'The foundation will work alongside existing initiatives including Pars Network, which provides privacy-preserving communications infrastructure, and MIGA DAO, which coordinates transparent humanitarian funding.',
      'Initial programs will focus on educational scholarships, emergency relief for refugees and displaced persons, and support for Persian cultural institutions and artists in exile.',
      'The foundation operates with a commitment to transparency and accountability, with governance structures designed to ensure resources reach those who need them most effectively.',
    ],
    contentFa: [
      'بنیاد پارسیس رسماً راه‌اندازی شده است و یک پلتفرم جدید برای حمایت از ابتکارات مدنی، فرهنگی و بشردوستانه برای جامعه جهانی ایرانیان ایجاد کرده است.',
      'این بنیاد که تحت هدایت والاحضرت سایروس پهلوی تأسیس شده، منابع و تخصص را برای رسیدگی به چالش‌های پیش روی ایرانیان در سراسر جهان گرد هم می‌آورد، با تمرکز ویژه بر آموزش، حفظ فرهنگ و کمک بشردوستانه.',
      '«بنیاد پارسیس نشان‌دهنده تعهد ما به خدمت به جامعه ایرانی در هر کجا که باشند است،» والاحضرت سایروس پهلوی در مراسم راه‌اندازی گفت. «ما زیرساختی می‌سازیم که می‌تواند به نیازهای فوری بشردوستانه پاسخ دهد در حالی که در شکوفایی بلندمدت فرهنگ و مردم ما نیز سرمایه‌گذاری می‌کند.»',
      'این بنیاد در کنار ابتکارات موجود از جمله شبکه پارس، که زیرساخت ارتباطات حفظ حریم خصوصی را فراهم می‌کند، و میگا دائو، که تأمین مالی بشردوستانه شفاف را هماهنگ می‌کند، فعالیت خواهد کرد.',
      'برنامه‌های اولیه بر بورسیه‌های تحصیلی، کمک اضطراری برای پناهندگان و آوارگان، و حمایت از نهادهای فرهنگی ایرانی و هنرمندان در تبعید متمرکز خواهند بود.',
      'این بنیاد با تعهد به شفافیت و پاسخگویی فعالیت می‌کند، با ساختارهای حکمرانی طراحی شده برای اطمینان از اینکه منابع به مؤثرترین شکل به کسانی که بیشترین نیاز را دارند برسد.',
    ],
  },
  {
    slug: 'parsis-fund-launch',
    date: '10 January 2026',
    dateFa: '۲۰ دی ۱۴۰۴',
    category: 'investment',
    featured: true,
    titleEn: 'Parsis Fund Established for Technology and Humanitarian Investment',
    titleFa: 'صندوق پارسیس برای سرمایه‌گذاری فناوری و بشردوستانه تأسیس شد',
    excerptEn: 'New public goods fund focuses on technology, education, and humanitarian initiatives with HRH Cyrus Pahlavi as Chief Investment Officer.',
    excerptFa: 'صندوق کالاهای عمومی جدید بر فناوری، آموزش و ابتکارات بشردوستانه متمرکز است با والاحضرت سایروس پهلوی به عنوان مدیر سرمایه‌گذاری ارشد.',
    contentEn: [
      'The Parsis Fund has been established as a public goods fund investing in technology, education, and humanitarian initiatives.',
      'HRH Cyrus Pahlavi serves as Chief Investment Officer, bringing a focus on privacy-preserving technologies, educational access, and sustainable infrastructure development.',
      '"The Parsis Fund represents a different approach to investment—one that measures success not only in financial returns but in positive impact for communities," HRH Cyrus Pahlavi explained. "We believe that technology developed with human dignity at its core can generate both value and benefit."',
      'The fund\'s initial focus areas include privacy technology, educational scholarships for underserved communities, and infrastructure projects that support civil society.',
      'Investment decisions are guided by an ESG-integrated approach that considers environmental, social, and governance factors alongside financial analysis.',
      'The Parsis Fund works in coordination with the Parsis Foundation and MIGA DAO to create a comprehensive ecosystem supporting the Persian diaspora and humanitarian causes worldwide.',
    ],
    contentFa: [
      'صندوق پارسیس به عنوان یک صندوق کالاهای عمومی که در فناوری، آموزش و ابتکارات بشردوستانه سرمایه‌گذاری می‌کند، تأسیس شده است.',
      'والاحضرت سایروس پهلوی به عنوان مدیر سرمایه‌گذاری ارشد خدمت می‌کند و تمرکز بر فناوری‌های حفظ حریم خصوصی، دسترسی آموزشی و توسعه زیرساخت پایدار را می‌آورد.',
      '«صندوق پارسیس رویکرد متفاوتی به سرمایه‌گذاری را نشان می‌دهد—رویکردی که موفقیت را نه فقط در بازده مالی بلکه در تأثیر مثبت برای جوامع اندازه‌گیری می‌کند،» والاحضرت سایروس پهلوی توضیح داد. «ما معتقدیم که فناوری توسعه‌یافته با کرامت انسانی در هسته خود می‌تواند هم ارزش و هم منفعت ایجاد کند.»',
      'حوزه‌های تمرکز اولیه صندوق شامل فناوری حریم خصوصی، بورسیه‌های تحصیلی برای جوامع محروم و پروژه‌های زیرساختی که از جامعه مدنی حمایت می‌کنند، است.',
      'تصمیمات سرمایه‌گذاری توسط رویکردی یکپارچه ESG هدایت می‌شود که عوامل زیست‌محیطی، اجتماعی و حکمرانی را در کنار تحلیل مالی در نظر می‌گیرد.',
      'صندوق پارسیس در هماهنگی با بنیاد پارسیس و میگا دائو کار می‌کند تا یک اکوسیستم جامع حمایت از دیاسپورای ایرانی و امور بشردوستانه در سراسر جهان ایجاد کند.',
    ],
  },
  // 2024
  {
    slug: 'zoo-labs-foundation-investment',
    date: '15 November 2024',
    dateFa: '۲۵ آبان ۱۴۰۳',
    category: 'investment',
    featured: true,
    titleEn: 'Strategic Investment in Zoo Labs Foundation Announced',
    titleFa: 'اعلام سرمایه‌گذاری استراتژیک در بنیاد زو لبز',
    excerptEn: 'HRH Cyrus Pahlavi announces investment in Zoo Labs Foundation, supporting decentralized AI research and open science initiatives.',
    excerptFa: 'والاحضرت سایروس پهلوی سرمایه‌گذاری در بنیاد زو لبز را اعلام کرد، با حمایت از تحقیقات هوش مصنوعی غیرمتمرکز و ابتکارات علم باز.',
    contentEn: [
      'HRH Cyrus Pahlavi has announced a strategic investment in Zoo Labs Foundation, a leading organization in decentralized artificial intelligence (DeAI) research and decentralized science (DeSci) initiatives.',
      'The investment reflects a commitment to supporting open AI research networks and community-driven scientific governance. Zoo Labs Foundation operates zips.zoo.ngo, a governance framework for Zoo Improvement Proposals that advances transparent, community-led research coordination.',
      '"The future of artificial intelligence must be built on principles of openness, transparency, and broad participation," said HRH Cyrus Pahlavi. "Zoo Labs Foundation represents the kind of infrastructure that can help ensure AI development serves humanity rather than concentrating power."',
      'The foundation focuses on bleeding-edge AI infrastructure, experimental research, and building bridges between traditional scientific institutions and decentralized communities.',
      'This investment is part of a broader portfolio strategy focused on privacy-preserving technologies, cryptographic research, and systems that protect individual freedoms while advancing collective capabilities.',
    ],
    contentFa: [
      'والاحضرت سایروس پهلوی یک سرمایه‌گذاری استراتژیک در بنیاد زو لبز، یک سازمان پیشرو در تحقیقات هوش مصنوعی غیرمتمرکز (DeAI) و ابتکارات علم غیرمتمرکز (DeSci) را اعلام کرده است.',
      'این سرمایه‌گذاری نشان‌دهنده تعهد به حمایت از شبکه‌های تحقیقاتی هوش مصنوعی باز و حکمرانی علمی جامعه‌محور است. بنیاد زو لبز zips.zoo.ngo را اداره می‌کند، یک چارچوب حکمرانی برای پیشنهادات بهبود زو که هماهنگی تحقیقاتی شفاف و جامعه‌محور را پیش می‌برد.',
      '«آینده هوش مصنوعی باید بر اصول باز بودن، شفافیت و مشارکت گسترده بنا شود،» والاحضرت سایروس پهلوی گفت. «بنیاد زو لبز نوعی زیرساخت را نمایندگی می‌کند که می‌تواند به اطمینان از اینکه توسعه هوش مصنوعی به بشریت خدمت می‌کند به جای تمرکز قدرت، کمک کند.»',
      'این بنیاد بر زیرساخت‌های پیشرفته هوش مصنوعی، تحقیقات آزمایشی و ایجاد پل بین نهادهای علمی سنتی و جوامع غیرمتمرکز تمرکز دارد.',
      'این سرمایه‌گذاری بخشی از یک استراتژی پرتفولیو گسترده‌تر است که بر فناوری‌های حفظ حریم خصوصی، تحقیقات رمزنگاری و سیستم‌هایی که از آزادی‌های فردی محافظت می‌کنند در حالی که قابلیت‌های جمعی را پیش می‌برند، متمرکز است.',
    ],
  },
  {
    slug: 'private-exhibition-geneva-2024',
    date: '18 September 2024',
    dateFa: '۲۸ شهریور ۱۴۰۳',
    category: 'culture',
    titleEn: 'Private Exhibition Opens in Geneva',
    titleFa: 'نمایشگاه خصوصی در ژنو افتتاح شد',
    excerptEn: 'A new collection of paintings exploring themes of exile, memory, and cultural identity opens at a private gallery in Geneva.',
    excerptFa: 'مجموعه جدیدی از نقاشی‌ها با موضوعات تبعید، خاطره و هویت فرهنگی در یک گالری خصوصی در ژنو افتتاح شد.',
    contentEn: [
      'A new private exhibition featuring works by HRH Cyrus Pahlavi has opened in Geneva, Switzerland, showcasing paintings that explore themes of exile, memory, nature, and cultural identity.',
      'The exhibition presents works created over the past three years, continuing a visual practice that the artist has described as "a form of freedom—particularly for those living under coercion."',
      'Working primarily through painting, His Royal Highness explores the experience of displacement and the preservation of cultural memory. The works incorporate Persian motifs while engaging with contemporary aesthetic concerns.',
      '"Painting offers a space where past and present can coexist," HRH Cyrus Pahlavi noted at the opening. "For those of us who carry the weight of exile, creative work becomes a way of maintaining connection to what we have lost while building something new."',
      'The exhibition is open by appointment to collectors and curators. Previous works have been exhibited in Monaco, Dubai, and New York, with pieces auctioned at Sotheby\'s London and featured on Artnet.',
    ],
    contentFa: [
      'یک نمایشگاه خصوصی جدید شامل آثار والاحضرت سایروس پهلوی در ژنو، سوئیس افتتاح شده است که نقاشی‌هایی با موضوعات تبعید، خاطره، طبیعت و هویت فرهنگی را به نمایش می‌گذارد.',
      'این نمایشگاه آثاری را که در سه سال گذشته خلق شده‌اند ارائه می‌دهد و فعالیت تجسمی را ادامه می‌دهد که هنرمند آن را «نوعی آزادی—به ویژه برای کسانی که تحت اجبار زندگی می‌کنند» توصیف کرده است.',
      'والاحضرت با کار عمدتاً از طریق نقاشی، تجربه آوارگی و حفظ حافظه فرهنگی را کاوش می‌کند. آثار نقش‌مایه‌های ایرانی را در خود جای می‌دهند در حالی که با نگرانی‌های زیبایی‌شناختی معاصر درگیر می‌شوند.',
      '«نقاشی فضایی ارائه می‌دهد که در آن گذشته و حال می‌توانند همزیستی کنند،» والاحضرت سایروس پهلوی در افتتاحیه اشاره کرد. «برای کسانی از ما که بار تبعید را حمل می‌کنیم، کار خلاقانه راهی برای حفظ ارتباط با آنچه از دست داده‌ایم در حالی که چیز جدیدی می‌سازیم، می‌شود.»',
      'این نمایشگاه با قرار قبلی برای کلکسیونرها و متصدیان باز است. آثار قبلی در موناکو، دبی و نیویورک به نمایش گذاشته شده‌اند و قطعاتی در ساتبی‌ها لندن حراج شده و در آرت‌نت نمایش داده شده‌اند.',
    ],
  },
  // 2023
  {
    slug: 'lux-fund-uranium-thesis',
    date: '22 March 2023',
    dateFa: '۲ فروردین ۱۴۰۲',
    category: 'investment',
    titleEn: 'Lux Fund Uranium Investment Thesis Validated',
    titleFa: 'تأیید تز سرمایه‌گذاری اورانیوم صندوق لاکس',
    excerptEn: 'Uranium positions established by Lux Fund in 2021 show strong performance as global energy transition accelerates nuclear adoption.',
    excerptFa: 'موقعیت‌های اورانیوم که توسط صندوق لاکس در ۲۰۲۱ ایجاد شد، با تسریع پذیرش هسته‌ای در گذار انرژی جهانی، عملکرد قوی نشان می‌دهد.',
    contentEn: [
      'Uranium investments established by Lux Fund have demonstrated strong returns as the global energy transition increasingly recognizes nuclear power as essential to achieving climate goals.',
      'The fund\'s uranium thesis, developed in 2021 under the strategic direction of HRH Cyrus Pahlavi as Managing Partner, anticipated the renewed interest in nuclear energy driven by energy security concerns and decarbonization imperatives.',
      '"The uranium position reflected our conviction that nuclear power would be revalued as the world confronted the realities of energy transition," explained the investment team. "What was once considered controversial is now recognized as necessary for any serious approach to reducing carbon emissions."',
      'The investment approach focused on uranium producers and enrichment capabilities, with particular attention to jurisdictions with stable regulatory environments and long-term production potential.',
      'Lux Fund continues to maintain positions in energy transition assets, with a focus on technologies and commodities essential to building sustainable infrastructure for future generations.',
    ],
    contentFa: [
      'سرمایه‌گذاری‌های اورانیوم که توسط صندوق لاکس ایجاد شده‌اند، بازده قوی نشان داده‌اند زیرا گذار انرژی جهانی به طور فزاینده‌ای انرژی هسته‌ای را برای دستیابی به اهداف اقلیمی ضروری می‌داند.',
      'تز اورانیوم صندوق، که در سال ۲۰۲۱ تحت هدایت استراتژیک والاحضرت سایروس پهلوی به عنوان شریک مدیر توسعه یافت، علاقه مجدد به انرژی هسته‌ای ناشی از نگرانی‌های امنیت انرژی و الزامات کربن‌زدایی را پیش‌بینی کرد.',
      '«موقعیت اورانیوم بازتاب اعتقاد ما بود که انرژی هسته‌ای با مواجهه جهان با واقعیت‌های گذار انرژی، ارزش‌گذاری مجدد خواهد شد،» تیم سرمایه‌گذاری توضیح داد. «آنچه زمانی بحث‌برانگیز تلقی می‌شد، اکنون برای هر رویکرد جدی به کاهش انتشار کربن ضروری شناخته می‌شود.»',
      'رویکرد سرمایه‌گذاری بر تولیدکنندگان اورانیوم و قابلیت‌های غنی‌سازی متمرکز بود، با توجه ویژه به حوزه‌های قضایی با محیط‌های نظارتی پایدار و پتانسیل تولید بلندمدت.',
      'صندوق لاکس همچنان موقعیت‌هایی در دارایی‌های گذار انرژی حفظ می‌کند، با تمرکز بر فناوری‌ها و کالاهای ضروری برای ایجاد زیرساخت پایدار برای نسل‌های آینده.',
    ],
  },
  // 2022
  {
    slug: 'art-dubai-2022',
    date: '11 March 2022',
    dateFa: '۲۰ اسفند ۱۴۰۰',
    category: 'culture',
    titleEn: 'Works Featured at Art Dubai 2022',
    titleFa: 'آثار در نمایشگاه آرت دبی ۲۰۲۲ نمایش داده شد',
    excerptEn: 'Paintings exploring Persian heritage and modern identity presented at the prestigious Art Dubai fair.',
    excerptFa: 'نقاشی‌هایی با موضوع میراث ایرانی و هویت مدرن در نمایشگاه معتبر آرت دبی ارائه شد.',
    contentEn: [
      'Works by HRH Cyrus Pahlavi were presented at Art Dubai 2022, one of the Middle East\'s leading contemporary art fairs.',
      'The paintings, which explore themes of Persian heritage, exile, and modern identity, attracted significant attention from regional and international collectors.',
      'Art Dubai has established itself as a vital meeting point for collectors, curators, and artists from across the Middle East, North Africa, and South Asia, with increasing global participation.',
      '"Art has always served as a bridge between cultures and a way of preserving what politics cannot protect," HRH Cyrus Pahlavi noted. "For the Persian diaspora, creative work offers both a way to maintain connection to our heritage and a means of dialogue with the wider world."',
      'The presentation included works that incorporate traditional Persian motifs rendered through contemporary techniques, reflecting the artist\'s ongoing exploration of cultural memory and displacement.',
    ],
    contentFa: [
      'آثار والاحضرت سایروس پهلوی در آرت دبی ۲۰۲۲، یکی از نمایشگاه‌های هنر معاصر پیشرو خاورمیانه، ارائه شد.',
      'نقاشی‌ها، که موضوعات میراث ایرانی، تبعید و هویت مدرن را کاوش می‌کنند، توجه قابل توجهی از کلکسیونرهای منطقه‌ای و بین‌المللی جلب کردند.',
      'آرت دبی خود را به عنوان یک نقطه ملاقات حیاتی برای کلکسیونرها، متصدیان و هنرمندان از سراسر خاورمیانه، شمال آفریقا و جنوب آسیا، با مشارکت جهانی فزاینده، تثبیت کرده است.',
      '«هنر همیشه به عنوان پلی بین فرهنگ‌ها و راهی برای حفظ آنچه سیاست نمی‌تواند محافظت کند عمل کرده است،» والاحضرت سایروس پهلوی اشاره کرد. «برای دیاسپورای ایرانی، کار خلاقانه هم راهی برای حفظ ارتباط با میراث ما و هم وسیله‌ای برای گفتگو با جهان گسترده‌تر ارائه می‌دهد.»',
      'این ارائه شامل آثاری بود که نقش‌مایه‌های سنتی ایرانی را با تکنیک‌های معاصر ترکیب می‌کردند، که کاوش مداوم هنرمند در حافظه فرهنگی و آوارگی را منعکس می‌کند.',
    ],
  },
  {
    slug: 'lux-fund-silver-position',
    date: '8 February 2022',
    dateFa: '۱۹ بهمن ۱۴۰۰',
    category: 'investment',
    titleEn: 'Lux Fund Establishes Strategic Silver Position',
    titleFa: 'صندوق لاکس موقعیت استراتژیک نقره ایجاد کرد',
    excerptEn: 'Investment thesis centers on silver\'s critical role in solar energy infrastructure and electronic manufacturing.',
    excerptFa: 'تز سرمایه‌گذاری بر نقش حیاتی نقره در زیرساخت انرژی خورشیدی و تولید الکترونیک متمرکز است.',
    contentEn: [
      'Lux Fund has established a strategic position in silver, citing the metal\'s critical role in solar panel manufacturing and broader electronic applications.',
      'The investment thesis, developed by the fund\'s team including Managing Partner HRH Cyrus Pahlavi, focuses on the structural demand increase for silver driven by the global energy transition.',
      '"Silver occupies a unique position at the intersection of precious metals and industrial commodities," the fund noted in its analysis. "The photovoltaic industry alone is projected to significantly increase silver demand over the coming decade."',
      'The position complements the fund\'s broader focus on energy transition assets, including uranium and related infrastructure investments.',
      'Lux Fund\'s approach emphasizes long-term structural trends rather than short-term trading, with investment horizons typically measured in years rather than quarters.',
    ],
    contentFa: [
      'صندوق لاکس یک موقعیت استراتژیک در نقره ایجاد کرده است، با استناد به نقش حیاتی این فلز در تولید پنل‌های خورشیدی و کاربردهای الکترونیکی گسترده‌تر.',
      'تز سرمایه‌گذاری، که توسط تیم صندوق از جمله شریک مدیر والاحضرت سایروس پهلوی توسعه یافته، بر افزایش ساختاری تقاضا برای نقره ناشی از گذار انرژی جهانی متمرکز است.',
      '«نقره موقعیت منحصر به فردی در تقاطع فلزات گرانبها و کالاهای صنعتی اشغال می‌کند،» صندوق در تحلیل خود اشاره کرد. «پیش‌بینی می‌شود صنعت فتوولتائیک به تنهایی تقاضای نقره را در دهه آینده به طور قابل توجهی افزایش دهد.»',
      'این موقعیت مکمل تمرکز گسترده‌تر صندوق بر دارایی‌های گذار انرژی، از جمله سرمایه‌گذاری‌های اورانیوم و زیرساخت‌های مرتبط است.',
      'رویکرد صندوق لاکس بر روندهای ساختاری بلندمدت تأکید دارد نه معاملات کوتاه‌مدت، با افق‌های سرمایه‌گذاری که معمولاً به جای سه‌ماهه‌ها در سال‌ها اندازه‌گیری می‌شوند.',
    ],
  },
  // 2021
  {
    slug: 'lux-fund-managing-partner',
    date: '1 September 2021',
    dateFa: '۱۰ شهریور ۱۴۰۰',
    category: 'announcement',
    featured: true,
    titleEn: 'HRH Cyrus Pahlavi Joins Lux Fund as Managing Partner',
    titleFa: 'والاحضرت سایروس پهلوی به صندوق لاکس به عنوان شریک مدیر پیوست',
    excerptEn: 'Strategic leadership role focusing on privacy technology investments and next-generation infrastructure.',
    excerptFa: 'نقش رهبری استراتژیک با تمرکز بر سرمایه‌گذاری‌های فناوری حریم خصوصی و زیرساخت نسل بعدی.',
    contentEn: [
      'HRH Cyrus Pahlavi has joined Lux Fund as Managing Partner, bringing strategic direction to the fund\'s investments in privacy-preserving technologies and next-generation infrastructure.',
      'In this role, HRH Cyrus Pahlavi will guide investment strategy across the fund\'s focus areas, which include applied cryptography, privacy-preserving computation, and the commodities essential to energy transition.',
      '"Privacy technology is not merely a commercial opportunity—it is essential infrastructure for human dignity," HRH Cyrus Pahlavi stated. "As governments and corporations increase their surveillance capabilities, the tools that protect individual freedom become ever more important."',
      'The appointment reflects years of work at the intersection of technology and human rights, including founding roles at Lux Partners and ongoing involvement with privacy-preserving communications infrastructure.',
      'Lux Fund\'s thesis is that privacy technology, like cryptography and secure communications, will become increasingly valuable as digital systems permeate every aspect of life.',
    ],
    contentFa: [
      'والاحضرت سایروس پهلوی به صندوق لاکس به عنوان شریک مدیر پیوسته است و هدایت استراتژیک را به سرمایه‌گذاری‌های صندوق در فناوری‌های حفظ حریم خصوصی و زیرساخت نسل بعدی می‌آورد.',
      'در این نقش، والاحضرت سایروس پهلوی استراتژی سرمایه‌گذاری را در حوزه‌های تمرکز صندوق، که شامل رمزنگاری کاربردی، محاسبات حفظ حریم خصوصی و کالاهای ضروری برای گذار انرژی است، هدایت خواهد کرد.',
      '«فناوری حریم خصوصی صرفاً یک فرصت تجاری نیست—بلکه زیرساخت ضروری برای کرامت انسانی است،» والاحضرت سایروس پهلوی بیان کرد. «با افزایش قابلیت‌های نظارتی دولت‌ها و شرکت‌ها، ابزارهایی که از آزادی فردی محافظت می‌کنند بیش از پیش اهمیت پیدا می‌کنند.»',
      'این انتصاب سال‌ها کار در تقاطع فناوری و حقوق بشر را منعکس می‌کند، از جمله نقش‌های بنیان‌گذاری در لاکس پارتنرز و مشارکت مداوم با زیرساخت ارتباطات حفظ حریم خصوصی.',
      'تز صندوق لاکس این است که فناوری حریم خصوصی، مانند رمزنگاری و ارتباطات امن، با نفوذ سیستم‌های دیجیتال به هر جنبه از زندگی، ارزش فزاینده‌ای پیدا خواهد کرد.',
    ],
  },
  {
    slug: 'monaco-group-exhibition-2021',
    date: '22 May 2021',
    dateFa: '۱ خرداد ۱۴۰۰',
    category: 'culture',
    titleEn: 'Group Exhibition in Monaco Features Persian-Inspired Works',
    titleFa: 'نمایشگاه گروهی در موناکو آثار الهام‌گرفته از ایران را به نمایش گذاشت',
    excerptEn: 'Paintings exploring themes of memory and heritage presented alongside contemporary artists from the region.',
    excerptFa: 'نقاشی‌هایی با موضوعات خاطره و میراث در کنار هنرمندان معاصر منطقه ارائه شد.',
    contentEn: [
      'A group exhibition in Monaco featured paintings by HRH Cyrus Pahlavi alongside works by contemporary artists from the Middle East and Mediterranean region.',
      'The exhibition explored themes of cultural heritage, displacement, and the dialogue between traditional and contemporary artistic practices.',
      'Works by HRH Cyrus Pahlavi incorporated Persian motifs and explored the experience of exile through a visual language that bridges Eastern and Western artistic traditions.',
      '"The group format allows for unexpected conversations between works," noted the curator. "These artists share a concern with memory, place, and the preservation of cultural identity in an increasingly globalized world."',
      'The exhibition received attention from European collectors and was covered by regional art publications.',
    ],
    contentFa: [
      'یک نمایشگاه گروهی در موناکو نقاشی‌های والاحضرت سایروس پهلوی را در کنار آثار هنرمندان معاصر از خاورمیانه و منطقه مدیترانه به نمایش گذاشت.',
      'این نمایشگاه موضوعات میراث فرهنگی، آوارگی و گفتگو بین شیوه‌های هنری سنتی و معاصر را کاوش کرد.',
      'آثار والاحضرت سایروس پهلوی نقش‌مایه‌های ایرانی را در بر گرفته و تجربه تبعید را از طریق زبان بصری‌ای که سنت‌های هنری شرقی و غربی را پل می‌زند، کاوش کردند.',
      '«قالب گروهی امکان گفتگوهای غیرمنتظره بین آثار را فراهم می‌کند،» متصدی اشاره کرد. «این هنرمندان نگرانی مشترکی در مورد خاطره، مکان و حفظ هویت فرهنگی در جهانی که به طور فزاینده جهانی می‌شود دارند.»',
      'این نمایشگاه توجه کلکسیونرهای اروپایی را جلب کرد و توسط نشریات هنری منطقه‌ای پوشش داده شد.',
    ],
  },
  // 2019
  {
    slug: 'sothebys-london-2019',
    date: '3 October 2019',
    dateFa: '۱۱ مهر ۱۳۹۸',
    category: 'culture',
    titleEn: 'Work Auctioned at Sotheby\'s London',
    titleFa: 'اثر در ساتبی‌ها لندن حراج شد',
    excerptEn: 'Painting from the exile series sold at prestigious auction house, marking growing recognition of the artist\'s work.',
    excerptFa: 'نقاشی از مجموعه تبعید در خانه حراج معتبر فروخته شد، که نشان‌دهنده شناخت رو به رشد از کار هنرمند است.',
    contentEn: [
      'A painting by HRH Cyrus Pahlavi was sold at Sotheby\'s London, marking a significant moment in the recognition of the artist\'s visual practice.',
      'The work, part of a series exploring themes of exile and cultural memory, attracted competitive bidding from international collectors.',
      '"Having work recognized at this level represents validation of what painting means for those of us in exile," HRH Cyrus Pahlavi reflected. "Art becomes a way of making the invisible visible—of giving form to experiences that cannot be easily expressed in words."',
      'The auction result reflects growing interest in works that engage with themes of displacement and cultural preservation, particularly from artists of the Persian diaspora.',
      'Works by HRH Cyrus Pahlavi continue to be held in private collections in Europe, the Middle East, and North America.',
    ],
    contentFa: [
      'یک نقاشی توسط والاحضرت سایروس پهلوی در ساتبی‌ها لندن فروخته شد، که لحظه مهمی در شناخت فعالیت تجسمی هنرمند را رقم زد.',
      'این اثر، بخشی از مجموعه‌ای که موضوعات تبعید و حافظه فرهنگی را کاوش می‌کند، پیشنهادات رقابتی از کلکسیونرهای بین‌المللی را جذب کرد.',
      '«شناخته شدن کار در این سطح نشان‌دهنده تأیید معنای نقاشی برای کسانی از ما در تبعید است،» والاحضرت سایروس پهلوی تأمل کرد. «هنر راهی برای مرئی کردن نامرئی می‌شود—برای شکل دادن به تجربیاتی که به راحتی در کلمات بیان نمی‌شوند.»',
      'نتیجه حراج علاقه رو به رشد به آثاری را منعکس می‌کند که با موضوعات آوارگی و حفظ فرهنگی درگیر هستند، به ویژه از هنرمندان دیاسپورای ایرانی.',
      'آثار والاحضرت سایروس پهلوی همچنان در مجموعه‌های خصوصی در اروپا، خاورمیانه و آمریکای شمالی نگهداری می‌شوند.',
    ],
  },
  // 2018
  {
    slug: 'pars-network-launch',
    date: '20 June 2018',
    dateFa: '۳۰ خرداد ۱۳۹۷',
    category: 'technology',
    titleEn: 'Pars Network Launches Privacy-Preserving Infrastructure',
    titleFa: 'شبکه پارس زیرساخت حفظ حریم خصوصی را راه‌اندازی کرد',
    excerptEn: 'New platform provides resilient communications for Iranians facing censorship and information blackouts.',
    excerptFa: 'پلتفرم جدید ارتباطات مقاوم را برای ایرانیان مواجه با سانسور و قطع اطلاعات فراهم می‌کند.',
    contentEn: [
      'Pars Network has launched as a privacy-preserving platform providing resilient communications and public-interest media infrastructure for Iranians facing censorship and information blackouts.',
      'The platform was developed with input from HRH Cyrus Pahlavi and other technologists committed to protecting freedom of information for the Persian community worldwide.',
      '"Access to information is a fundamental human right," HRH Cyrus Pahlavi stated. "Pars Network exists to ensure that no government can completely silence its people or cut them off from the world."',
      'The platform employs advanced cryptographic techniques to protect user privacy while enabling access to news, communications, and essential services.',
      'Pars Network operates as part of a broader ecosystem of privacy-preserving technologies developed to support civil society and human rights organizations.',
    ],
    contentFa: [
      'شبکه پارس به عنوان یک پلتفرم حفظ حریم خصوصی راه‌اندازی شده است که ارتباطات مقاوم و زیرساخت رسانه‌ای منافع عمومی را برای ایرانیان مواجه با سانسور و قطع اطلاعات فراهم می‌کند.',
      'این پلتفرم با مشارکت والاحضرت سایروس پهلوی و سایر فناوران متعهد به حفاظت از آزادی اطلاعات برای جامعه ایرانی در سراسر جهان توسعه یافته است.',
      '«دسترسی به اطلاعات یک حق بنیادین انسانی است،» والاحضرت سایروس پهلوی بیان کرد. «شبکه پارس وجود دارد تا اطمینان حاصل کند که هیچ دولتی نمی‌تواند مردم خود را کاملاً ساکت کند یا آنها را از جهان قطع کند.»',
      'این پلتفرم از تکنیک‌های رمزنگاری پیشرفته برای محافظت از حریم خصوصی کاربران استفاده می‌کند در حالی که دسترسی به اخبار، ارتباطات و خدمات ضروری را امکان‌پذیر می‌سازد.',
      'شبکه پارس به عنوان بخشی از یک اکوسیستم گسترده‌تر از فناوری‌های حفظ حریم خصوصی توسعه‌یافته برای حمایت از جامعه مدنی و سازمان‌های حقوق بشر فعالیت می‌کند.',
    ],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(): NewsArticle[] {
  return newsArticles.filter((article) => article.featured);
}

export function getArticlesByCategory(category: NewsArticle['category']): NewsArticle[] {
  return newsArticles.filter((article) => article.category === category);
}

export const categories = [
  { value: 'all', labelEn: 'All', labelFa: 'همه' },
  { value: 'investment', labelEn: 'Investment', labelFa: 'سرمایه‌گذاری' },
  { value: 'humanitarian', labelEn: 'Humanitarian', labelFa: 'بشردوستانه' },
  { value: 'technology', labelEn: 'Technology', labelFa: 'فناوری' },
  { value: 'culture', labelEn: 'Culture', labelFa: 'فرهنگ' },
  { value: 'announcement', labelEn: 'Announcements', labelFa: 'اطلاعیه‌ها' },
  { value: 'press', labelEn: 'Press', labelFa: 'مطبوعات' },
];
