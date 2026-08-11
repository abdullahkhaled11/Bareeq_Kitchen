/**
 * projects.js
 * ──────────────────────────────────────────────────────────────────────────
 * Central data source for all 6 projects.
 * Each project card on the homepage links to /projects/:slug.
 * The ProjectDetails page reads this array to render the correct project.
 *
 * To add / edit a project: modify this file only — no new pages needed.
 * ──────────────────────────────────────────────────────────────────────────
 */

import heroKitchen  from '@/assets/hero-kitchen.jpg';
import kitchen1     from '@/assets/kitchen-1.jpg';
import kitchen2     from '@/assets/kitchen-2.jpg';
import kitchen3     from '@/assets/kitchen-3.jpg';
import kitchen4     from '@/assets/kitchen-4.jpg';
import kitchen5     from '@/assets/kitchen-5.jpg';
import kitchen6     from '@/assets/kitchen-6.jpg';
import wardrobeImg  from '@/assets/wardrobe.png';
import wardrobe1    from '@/assets/wardrobe-1.png';
import wardrobe2    from '@/assets/wardrobe-2.png';
import wardrobe3    from '@/assets/wardrobe-3.png';
import wardrobe4    from '@/assets/wardrobe-4.png';
import wardrobe5    from '@/assets/wardrobe-5.png';
import wardrobe6    from '@/assets/wardrobe-6.png';
import laundryImg   from '@/assets/laundry.png';
import laundry1     from '@/assets/laundry-user-1.jpg';
import laundry2     from '@/assets/laundry-user-2.jpg';
import laundry3     from '@/assets/laundry-user-3.jpg';
import laundry4     from '@/assets/laundry-user-4.jpg';
import laundry5     from '@/assets/laundry-user-5.jpg';
import laundry6     from '@/assets/laundry-user-6.jpg';
import workshop     from '@/assets/workshop.jpg';
import washbasinsImg from '@/assets/washbasins.png';

// User's Uploaded Images from src/assets/Images
import img1 from '@/assets/Images/photo_2026-07-15_00-09-18.jpg';
import img2 from '@/assets/Images/photo_2026-07-24_15-03-26.jpg';
import img3 from '@/assets/Images/photo_2026-07-24_15-03-35.jpg';
import img4 from '@/assets/Images/photo_2026-07-24_15-03-40.jpg';
import img5 from '@/assets/Images/photo_2026-07-24_15-03-44.jpg';
import img6 from '@/assets/Images/photo_2026-07-24_15-03-49.jpg';
import img7 from '@/assets/Images/photo_2026-07-24_15-03-52.jpg';
import img8 from '@/assets/Images/photo_2026-07-24_15-03-55.jpg';
import img9 from '@/assets/Images/photo_2026-07-24_15-03-59.jpg';
import img10 from '@/assets/Images/photo_2026-07-24_15-04-02.jpg';
import img11 from '@/assets/Images/photo_2026-07-24_15-04-07.jpg';
import img12 from '@/assets/Images/photo_2026-07-24_15-04-09.jpg';
import img13 from '@/assets/Images/photo_2026-07-24_15-04-12.jpg';
import img14 from '@/assets/Images/photo_2026-07-24_15-04-14.jpg';
import img15 from '@/assets/Images/photo_2026-07-24_15-04-17.jpg';
import img16 from '@/assets/Images/photo_2026-07-24_15-04-21.jpg';
import img17 from '@/assets/Images/photo_2026-07-24_15-04-23.jpg';
import img18 from '@/assets/Images/photo_2026-07-24_15-04-28.jpg';
import img19 from '@/assets/Images/photo_2026-07-24_15-04-36.jpg';
import img20 from '@/assets/Images/photo_2026-07-24_15-04-38.jpg';
import img21 from '@/assets/Images/photo_2026-07-24_15-04-41.jpg';
import img22 from '@/assets/Images/photo_2026-07-24_15-04-44.jpg';
import img23 from '@/assets/Images/photo_2026-07-24_15-04-47.jpg';
import img24 from '@/assets/Images/photo_2026-07-24_15-04-50.jpg';
import img25 from '@/assets/Images/photo_2026-07-24_15-04-54.jpg';
import img26 from '@/assets/Images/photo_2026-07-24_15-04-56.jpg';

// General Kitchen Videos
import mainVid1 from '@/assets/Videos/vivideo-remove-audio-from-video.mp4';
import mainVid2 from '@/assets/Videos/vivideo-remove-audio-from-video (1).mp4';
import mainVid3 from '@/assets/Videos/vivideo-remove-audio-from-video (2).mp4';
import mainVid4 from '@/assets/Videos/vivideo-remove-audio-from-video (3).mp4';
import mainVid5 from '@/assets/Videos/vivideo-remove-audio-from-video (4).mp4';
import mainVid6 from '@/assets/Videos/vivideo-remove-audio-from-video (5).mp4';
import mainVid7 from '@/assets/Videos/vivideo-remove-audio-from-video (6).mp4';
import mainVid8 from '@/assets/Videos/vivideo-remove-audio-from-video (7).mp4';
import mainVid9 from '@/assets/Videos/vivideo-remove-audio-from-video (8).mp4';
import mainVid10 from '@/assets/Videos/vivideo-remove-audio-from-video (9).mp4';

import vid3053 from '@/assets/Videos/IMG_3053.MP4';
import vid3061 from '@/assets/Videos/IMG_3061.MP4';
import vid3064 from '@/assets/Videos/IMG_3064.MP4';
import vid3071 from '@/assets/Videos/IMG_3071.MP4';

// Wardrobe Videos
import wardrobeVid1 from '@/assets/Videos/خزائن ملابس/vivideo-remove-audio-from-video.mp4';
import wardrobeVid2 from '@/assets/Videos/خزائن ملابس/vivideo-remove-audio-from-video (1).mp4';
import wardrobeVid3 from '@/assets/Videos/خزائن ملابس/vivideo-remove-audio-from-video (2).mp4';
import wardrobeVid4 from '@/assets/Videos/خزائن ملابس/vivideo-remove-audio-from-video (3).mp4';

// Laundry Videos
import laundryVid1 from '@/assets/Videos/غرف غسيل/vivideo-remove-audio-from-video.mp4';
import laundryVid2 from '@/assets/Videos/غرف غسيل/vivideo-remove-audio-from-video (1).mp4';
import laundryVid3 from '@/assets/Videos/غرف غسيل/vivideo-remove-audio-from-video (2).mp4';

const projects = [
  /* ───────────────────────── 1. مطابخ حديثة ───────────────────────── */
  {
    id: 1,
    slug: 'modern-kitchen',
    category: 'مطابخ حديثة',
    title: 'مطابخ حديثة راقية',
    subtitle: 'حيث يلتقي الابتكار بالجماليات العصرية لخلق مطبخ استثنائي',
    heroImage: kitchen1,
    gallery: [kitchen1, img1, img2, img3, kitchen2, img4],
    additionalGallery: [img5, img6, kitchen5, heroKitchen],
    videos: [mainVid1, mainVid2, mainVid3],
    description:
      'نقدم لك مطابخ حديثة تجمع بين الجماليات العصرية والوظائف العملية. تُصنَّع من أجود المواد وتُصمَّم بأحدث الأساليب العالمية لتناسب ذوقك وتلبي احتياجاتك اليومية. فريقنا من المصممين ذوي الخبرة يضمن لك تجربة فريدة من بداية الفكرة حتى التسليم النهائي.',
    features: [
      {
        iconName: 'Sparkles',
        title: 'تصميم ثلاثي الأبعاد',
        desc: 'نقدم لك مخططات ثلاثية الأبعاد دقيقة قبل البدء في التنفيذ لرؤية مطبخك بشكل واقعي.',
      },
      {
        iconName: 'Shield',
        title: 'ضمان شامل 10 سنوات',
        desc: 'نضمن جودة التصنيع والتركيب لمدة 10 سنوات كاملة مع خدمة صيانة دورية.',
      },
      {
        iconName: 'Settings',
        title: 'تخصيص كامل',
        desc: 'كل مطبخ يُصنَّع خصيصًا لمساحتك واحتياجاتك — لا نماذج جاهزة.',
      },
      {
        iconName: 'Clock',
        title: 'تسليم في الموعد',
        desc: 'نلتزم بالجداول الزمنية المتفق عليها بدون تأخير.',
      },
    ],
    specifications: [
      { label: 'المادة', value: 'MDF عالي الكثافة + طلاء PU' },
      { label: 'الأبواب', value: 'ألمنيوم بإطار بروفايل حديث' },
      { label: 'الأسطح', value: 'كوارتز أو جرانيت طبيعي' },
      { label: 'الأدراج', value: 'سكك ناعمة Blum النمساوية' },
      { label: 'الإضاءة', value: 'LED تحت الخزانات + داخلية' },
      { label: 'ضمان', value: '10 سنوات تصنيع + تركيب' },
    ],
    stats: [
      { value: '+500', label: 'مشروع مكتمل' },
      { value: '100%', label: 'رضا العملاء' },
      { value: '10', label: 'سنوات ضمان' },
    ],
    cta: {
      title: 'هل تريد مطبخًا حديثًا يناسب مساحتك؟',
      desc: 'تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر بدون التزام.',
      buttonText: 'احصل على عرض سعر مجاني',
    },
  },

  /* ───────────────────────── 2. مطابخ كلاسيك ──────────────────────── */
  {
    id: 2,
    slug: 'classic-kitchen',
    category: 'مطابخ كلاسيكية',
    title: 'مطابخ كلاسيكية فاخرة',
    subtitle: 'أناقة خالدة وتفاصيل محفورة تعكس ذوقًا رفيعًا لا يُضاهى',
    heroImage: kitchen2,
    gallery: [kitchen2, img7, img8, img9, kitchen1, img10],
    additionalGallery: [img11, img12, kitchen6, heroKitchen],
    videos: [mainVid4, mainVid5, vid3053],
    description:
      'المطبخ الكلاسيكي هو شهادة على الرقي والفن. نصنع لك مطابخ كلاسيكية بأجود أنواع الأخشاب المستوردة وتشطيبات يدوية دقيقة تُبرز التفاصيل الزخرفية بأعلى مستوى من الإتقان. كل قطعة تُحكى قصة حرفية أصيلة.',
    features: [
      {
        iconName: 'Gem',
        title: 'أخشاب مستوردة فاخرة',
        desc: 'نستخدم أجود أنواع الخشب الصلب المستورد لضمان المتانة والجمال.',
      },
      {
        iconName: 'Paintbrush',
        title: 'تشطيب يدوي',
        desc: 'كل لمسة زخرفية تُنفَّذ يدويًا بواسطة حرفيين مهرة ذوي خبرة طويلة.',
      },
      {
        iconName: 'Layout',
        title: 'تصميم متوازن',
        desc: 'نوازن بين التناسق البصري والاستخدام الأمثل للمساحة.',
      },
      {
        iconName: 'Award',
        title: 'جودة معتمدة',
        desc: 'جميع موادنا تحمل شهادات الجودة الدولية.',
      },
    ],
    specifications: [
      { label: 'المادة', value: 'خشب صلب مستورد' },
      { label: 'التشطيب', value: 'دهان يدوي متعدد الطبقات' },
      { label: 'الأسطح', value: 'رخام طبيعي مستورد' },
      { label: 'المقابض', value: 'نحاس أو ذهبي مطفي' },
      { label: 'الإضاءة', value: 'كريستال + LED دافئ' },
      { label: 'ضمان', value: '10 سنوات شامل' },
    ],
    stats: [
      { value: '+300', label: 'مطبخ كلاسيك' },
      { value: '15+', label: 'سنة خبرة' },
      { value: '100%', label: 'عملاء راضون' },
    ],
    cta: {
      title: 'أضف لمسة كلاسيكية فاخرة لمنزلك',
      desc: 'احصل على استشارة تصميم مجانية مع أفضل مصممينا.',
      buttonText: 'طلب استشارة مجانية',
    },
  },

  /* ───────────────────────── 3. مطابخ خشب طبيعي ─────────────────── */
  {
    id: 3,
    slug: 'natural-wood-kitchen',
    category: 'خشب طبيعي',
    title: 'مطابخ الخشب الطبيعي',
    subtitle: 'دفء الطبيعة يسكن مطبخك — جمال أصيل يدوم عبر الأجيال',
    heroImage: kitchen3,
    gallery: [kitchen3, img13, img14, img15, kitchen4, img16],
    additionalGallery: [img17, img18, workshop, kitchen5],
    videos: [mainVid6, mainVid7, mainVid8],
    description:
      'الخشب الطبيعي يمنح مطبخك دفئًا لا تستطيع أي مادة أخرى منحه. نستخدم أخشابًا طبيعية مختارة بعناية ومعالجة لتتحمل الرطوبة والحرارة، مع الحفاظ على جمالها الأصيل لسنوات طويلة. كل قطعة تحمل بصمة الطبيعة الفريدة.',
    features: [
      {
        iconName: 'Leaf',
        title: 'خشب معالج بيئيًا',
        desc: 'أخشاب مستدامة ومعالجة ضد الرطوبة والحشرات والتشقق.',
      },
      {
        iconName: 'Palette',
        title: 'تنوع الألوان الطبيعية',
        desc: 'اختر من بين طيف واسع من ألوان الخشب الطبيعي لتناسب ديكورك.',
      },
      {
        iconName: 'Hammer',
        title: 'تصنيع محلي متقن',
        desc: 'يُصنَّع كل مطبخ في ورشتنا المجهزة بأحدث الآلات.',
      },
      {
        iconName: 'Recycle',
        title: 'مواد صديقة للبيئة',
        desc: 'نستخدم مواد معتمدة بيئيًا آمنة لعائلتك.',
      },
    ],
    specifications: [
      { label: 'الخشب', value: 'بلوط أو زان أو جوز' },
      { label: 'التشطيب', value: 'ورنيش مائي غير سام' },
      { label: 'الأسطح', value: 'خشب مصمت أو كوارتز' },
      { label: 'المعالجة', value: 'ضد الرطوبة والحشرات' },
      { label: 'الأدراج', value: 'سكك صامتة ناعمة' },
      { label: 'ضمان', value: '10 سنوات' },
    ],
    stats: [
      { value: '+200', label: 'مشروع خشبي' },
      { value: '5★', label: 'تقييم العملاء' },
      { value: '10', label: 'سنوات ضمان' },
    ],
    cta: {
      title: 'أضف دفء الطبيعة إلى مطبخك',
      desc: 'استشارة مجانية ونماذج من أخشابنا الطبيعية تصل إليك.',
      buttonText: 'احجز موعد مجاني',
    },
  },

  /* ───────────────────────── 4. مطابخ ألومنيوم ──────────────────── */
  {
    id: 4,
    slug: 'aluminium-kitchen',
    category: 'مطابخ ألومنيوم',
    title: 'مطابخ الألومنيوم العصرية',
    subtitle: 'متانة لا تُهزم وتصميم نظيف عصري يواكب أحدث الاتجاهات',
    heroImage: kitchen4,
    gallery: [kitchen4, img19, img20, img21, kitchen3, img22],
    additionalGallery: [img23, img24, workshop, kitchen6],
    videos: [mainVid9, mainVid10, vid3061, vid3064],
    description:
      'مطابخ الألومنيوم الحل الأمثل للمناخ السعودي — لا تتأثر بالرطوبة، لا تصدأ، سهلة التنظيف، وتدوم لعقود. نقدم تصاميم ألومنيوم عصرية بأشكال وألوان متعددة تناسب جميع الأذواق والمساحات.',
    features: [
      {
        iconName: 'Shield',
        title: 'مقاوم للرطوبة والصدأ',
        desc: 'الألومنيوم لا يصدأ ولا يتأثر بالرطوبة مثالي للمناخ الخليجي.',
      },
      {
        iconName: 'Zap',
        title: 'خفيف وقوي',
        desc: 'الألومنيوم خفيف الوزن مع متانة عالية جدًا تضمن الاستخدام المكثف.',
      },
      {
        iconName: 'Paintbrush',
        title: 'ألوان لا محدودة',
        desc: 'أكثر من 200 لون وتشطيب متاح عبر تقنية Powder Coating.',
      },
      {
        iconName: 'DollarSign',
        title: 'تكلفة منافسة',
        desc: 'تحصل على جودة عالية بتكلفة أقل مقارنة بالخشب.',
      },
    ],
    specifications: [
      { label: 'السماكة', value: 'بروفايل 1.2mm – 1.5mm' },
      { label: 'التشطيب', value: 'Powder Coating مطفي أو لامع' },
      { label: 'الأسطح', value: 'جرانيت أو سيراميك أو ألومنيوم' },
      { label: 'اللحام', value: 'TIG welding دقيق' },
      { label: 'الأدراج', value: 'سكك ألومنيوم ناعمة' },
      { label: 'ضمان', value: '10 سنوات' },
    ],
    stats: [
      { value: '+400', label: 'مطبخ ألومنيوم' },
      { value: '200+', label: 'لون وتشطيب' },
      { value: '10', label: 'سنوات ضمان' },
    ],
    cta: {
      title: 'مطبخ ألومنيوم بجودة لا تُنافس',
      desc: 'احصل على عرض سعر مجاني لمطبخك الجديد اليوم.',
      buttonText: 'احصل على عرض سعر',
    },
  },

  /* ───────────────────────── 5. خزائن ملابس ──────────────────────── */
  {
    id: 5,
    slug: 'wardrobe',
    category: 'خزائن ملابس',
    title: 'خزائن الملابس الفاخرة',
    subtitle: 'تنظيم ذكي وأناقة بلا حدود — خزانة ملابسك تعكس شخصيتك',
    heroImage: wardrobeImg,
    gallery: [wardrobe1, wardrobe2, wardrobe3, wardrobe4, wardrobe5, wardrobe6],
    additionalGallery: [wardrobe2, wardrobe4, wardrobe6, wardrobe1],
    videos: [wardrobeVid1, wardrobeVid2, wardrobeVid3, wardrobeVid4],
    description:
      'خزائن الملابس المُصنَّعة خصيصًا لك تحول غرفتك إلى غرفة فندقية فاخرة. نصمم ونصنع خزائن ملابس بمقاسات مخصصة تستغل كل سنتيمتر من المساحة المتاحة بذكاء، مع تشطيبات راقية وإضاءة داخلية ذكية.',
    features: [
      {
        iconName: 'LayoutGrid',
        title: 'استغلال أمثل للمساحة',
        desc: 'نصمم الداخل بدقة لأقصى استخدام ممكن لكل سنتيمتر.',
      },
      {
        iconName: 'Lightbulb',
        title: 'إضاءة داخلية ذكية',
        desc: 'LED داخلية مع حساس فتح الباب لرؤية محتوياتك بسهولة.',
      },
      {
        iconName: 'Lock',
        title: 'أقفال بصمة ورقمية',
        desc: 'خيار أقفال ذكية بالبصمة أو رمز رقمي للحفظ الآمن.',
      },
      {
        iconName: 'Sliders',
        title: 'تخصيص داخلي كامل',
        desc: 'حدد تقسيم الداخل: أرفف — سحابات — بار شنق — أدراج.',
      },
    ],
    specifications: [
      { label: 'الأبواب', value: 'منزلقة أو دولابية' },
      { label: 'المادة', value: 'MDF + لوح HDF' },
      { label: 'التشطيب', value: 'لمينيت أو دهان PU' },
      { label: 'الأدراج', value: 'Soft-close Blum' },
      { label: 'الإضاءة', value: 'LED داخلية مع حساس' },
      { label: 'ضمان', value: '10 سنوات' },
    ],
    stats: [
      { value: '+350', label: 'خزانة منفذة' },
      { value: '100%', label: 'تخصيص كامل' },
      { value: '10', label: 'سنوات ضمان' },
    ],
    cta: {
      title: 'احصل على خزانة ملابسك الفاخرة',
      desc: 'نزورك في المنزل مجانًا لقياس المساحة وتقديم التصميم.',
      buttonText: 'احجز زيارة مجانية',
    },
  },

  /* ───────────────────────── 6. غرف غسيل ────────────────────────── */
  {
    id: 6,
    slug: 'laundry-room',
    category: 'غرف غسيل',
    title: 'غرف الغسيل المتكاملة',
    subtitle: 'نظام تخزين ذكي وتصميم عملي يجعل الغسيل أكثر متعة وتنظيمًا',
    heroImage: laundryImg,
    gallery: [laundry1, laundry2, laundry3, laundry4, laundry5, laundry6],
    additionalGallery: [laundry3, laundry4, laundry5, laundry6],
    videos: [laundryVid1, laundryVid2, laundryVid3],
    description:
      'غرفة الغسيل المُجهَّزة جيدًا تُحوَّل مهمة الغسيل من عبء إلى تجربة ممتعة. نصمم ونُنفذ غرف غسيل متكاملة مع خزائن مخصصة لكل أجهزتك وموادك، مع أسطح عمل وحلول تخزين ذكية تناسب مساحتك تمامًا.',
    features: [
      {
        iconName: 'Package',
        title: 'تخزين ذكي',
        desc: 'خزائن مخصصة لمواد التنظيف والملابس والأجهزة.',
      },
      {
        iconName: 'Zap',
        title: 'توصيلات متكاملة',
        desc: 'نتولى ترتيب توصيلات الماء والكهرباء بشكل آمن وأنيق.',
      },
      {
        iconName: 'Layers',
        title: 'أسطح عمل واسعة',
        desc: 'أسطح طوي وفرز الملابس بارتفاع مريح.',
      },
      {
        iconName: 'Wind',
        title: 'تهوية ذكية',
        desc: 'نراعي حلول التهوية المناسبة لمنع الرطوبة.',
      },
    ],
    specifications: [
      { label: 'المادة', value: 'MDF مقاوم للرطوبة' },
      { label: 'التشطيب', value: 'لمينيت مضاد للبلل' },
      { label: 'الأسطح', value: 'لام أو كوارتز مضاد للبقع' },
      { label: 'التوصيلات', value: 'كهرباء + سباكة متكاملة' },
      { label: 'التهوية', value: 'مشبكات + نظام تهوية' },
      { label: 'ضمان', value: '10 سنوات' },
    ],
    stats: [
      { value: '+150', label: 'غرفة غسيل' },
      { value: '100%', label: 'متكاملة' },
      { value: '10', label: 'سنوات ضمان' },
    ],
    cta: {
      title: 'حوّل غرفة الغسيل إلى مساحة منظمة وعملية',
      desc: 'تصميم مجاني ومعاينة بالمنزل — تواصل معنا الآن.',
      buttonText: 'طلب تصميم مجاني',
    },
  },

  /* ───────────────────────── 7. مغاسل فاخرة ────────────────────────── */
  {
    id: 7,
    slug: 'washbasins',
    category: 'مغاسل فاخرة',
    title: 'المغاسل والمرايا الفاخرة',
    subtitle: 'تصاميم مغاسل مودرن وكلاسيك مصنوعة من أجود أنواع الرخام والأخشاب المقاومة للمياه',
    heroImage: washbasinsImg,
    gallery: [washbasinsImg, img1, img2, img3, img4, img5],
    additionalGallery: [img6, img7, img8, washbasinsImg],
    videos: [mainVid1, mainVid2],
    description:
      'نصمم ونصنع مغاسل رخامية وخشبية فاخرة تناسب المجالس والدورات والمداخل بكافة المقاسات، مع لمسات إضاءة LED مدمجة وأحواض رخام طبيعي مصممة خصيصاً لمساحتك.',
    features: [
      {
        iconName: 'Sparkles',
        title: 'رخام طبيعي وفخم',
        desc: 'أحواض وأسطح مصنوعة من أجود أنواع الرخام والكوارتز المقاوم للبقع.',
      },
      {
        iconName: 'Shield',
        title: 'مقاومة تامة للمياه',
        desc: 'معالجة كاملة للأخشاب بمواد إيطالية مضادة للرطوبة والمياه.',
      },
      {
        iconName: 'Lightbulb',
        title: 'إضاءة مرايا ذكية',
        desc: 'مرايا مجهزة بإضاءة LED مخفية ولمسات تصميمية عصرية.',
      },
      {
        iconName: 'Settings',
        title: 'تفصيل حسب المقاس',
        desc: 'تصميم مخصص 100% يناسب مساحتك وديكور منزلك.',
      },
    ],
    specifications: [
      { label: 'المادة', value: 'رخام طبيعي + خشب معالج ضد المياه' },
      { label: 'الأحواض', value: 'رخام مصمت أو سيراميك إسباني' },
      { label: 'المرايا', value: 'مرايا بلجيكية بإضاءة LED ذكية' },
      { label: 'الإكسسوارات', value: 'خلاطات ذهبية/سوداء مقاومة للصدأ' },
      { label: 'التشطيب', value: 'دهان PU عالي الجودة' },
      { label: 'ضمان', value: '10 سنوات' },
    ],
    stats: [
      { value: '+250', label: 'مغسلة منفذة' },
      { value: '100%', label: 'رخام فاخر' },
      { value: '10', label: 'سنوات ضمان' },
    ],
    cta: {
      title: 'صمم مغسلة فاخرة تعكس فخامة منزلك',
      desc: 'تواصل معنا للحصول على تصميم مجاني وعرض سعر مخصص.',
      buttonText: 'طلب تصميم مغسلة',
    },
  },
];

export default projects;
