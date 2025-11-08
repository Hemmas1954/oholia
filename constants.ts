
import { Content } from './types';

export const contentData: { [key: string]: Content } = {
  ar: {
    nav: {
      about: "عن Oholia",
      benefits: "الفوائد",
      product: "المنتج",
      testimonials: "الآراء",
    },
    hero: {
      headline: "الترطيب الطبيعي يبدأ من هنا.",
      subheadline: "كريم Oholia – تركيبة طبيعية تمنح بشرتك نعومة وإشراقة تدوم.",
      ctaPrimary: "اشتري الآن",
      ctaSecondary: "تعرفي أكثر",
    },
    about: {
      title: "قصتنا: نقاء الطبيعة في كل قطرة",
      p1: "وُلدت Oholia من شغفنا بجمال الطبيعة وقدرتها على الشفاء. نحن نؤمن بأن العناية بالبشرة يجب أن تكون تجربة نقية وبسيطة.",
      p2: "باستخدام مكونات طبيعية فاخرة مثل زيت الأرغان الغني، والألوفيرا المهدئة، وفيتامين E المغذي، صنعنا كريمًا لا يرطب فحسب، بل يعيد لبشرتك حيويتها الطبيعية.",
      p3: "كل عبوة من Oholia هي وعد بالثقة والجمال المستمد من قلب الطبيعة.",
    },
    benefits: {
      title: "لماذا تختارين Oholia؟",
      items: [
        { icon: 'hydration', text: "ترطيب عميق" },
        { icon: 'softness', text: "ملمس ناعم" },
        { icon: 'natural', text: "مكونات طبيعية" },
        { icon: 'protection', text: "حماية من الجفاف" },
        { icon: 'glow', text: "إشراقة طبيعية" },
      ],
    },
    product: {
      title: "كريم Oholia المرطب",
      description: "تركيبتنا الفريدة تمتصها البشرة بسرعة لتوفير ترطيب فوري وطويل الأمد. مثالي لجميع أنواع البشرة، يترك بشرتك ناعمة كالحرير ومتألقة بشكل طبيعي. استمتعي بقوة الطبيعة النقية.",
      price: "3,200 د.ج",
      size: "50 مل / 1.7 أونصة سائلة",
      addToCart: "أضف إلى السلة",
      feature1: "مختبر من قبل أطباء الجلدية",
      feature2: "لم يتم اختباره على الحيوانات",
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      reviews: [
        { quote: "أفضل كريم جربته على الإطلاق! بشرتي تبدو أكثر صحة ونضارة.", name: "فاطمة الزهراء", before: "قبل", after: "بعد" },
        { quote: "أعاني من بشرة جافة، وهذا الكريم كان المنقذ. ترطيبه يدوم طوال اليوم.", name: "أمين", before: "قبل", after: "بعد" },
        { quote: "أحب أنه طبيعي ويناسب بشرتي الحساسة. الرائحة خفيفة ومنعشة.", name: "سارة", before: "قبل", after: "بعد" },
      ],
    },
    gallery: {
      title: "أسلوب حياة Oholia"
    },
    cta: {
      title: "ابدئي روتينك الطبيعي مع Oholia اليوم.",
      button: "اطلبي الآن",
    },
    footer: {
      madeIn: "صُنع بحب في الجزائر",
      contact: "اتصل بنا",
      privacy: "سياسة الخصوصية",
      rights: "© 2024 Oholia. كل الحقوق محفوظة.",
    },
  },
  en: {
    nav: {
      about: "About Oholia",
      benefits: "Benefits",
      product: "Product",
      testimonials: "Reviews",
    },
    hero: {
      headline: "Natural Hydration Starts Here.",
      subheadline: "Oholia Cream – A natural formula that gives your skin lasting softness and radiance.",
      ctaPrimary: "Shop Now",
      ctaSecondary: "Learn More",
    },
    about: {
      title: "Our Story: The Purity of Nature in Every Drop",
      p1: "Oholia was born from our passion for nature's beauty and its healing power. We believe skincare should be a pure and simple experience.",
      p2: "Using luxurious natural ingredients like rich Argan oil, soothing Aloe Vera, and nourishing Vitamin E, we've crafted a cream that not only moisturizes but restores your skin's natural vitality.",
      p3: "Every jar of Oholia is a promise of confidence and beauty drawn from the heart of nature.",
    },
    benefits: {
      title: "Why Choose Oholia?",
      items: [
        { icon: 'hydration', text: "Deep Hydration" },
        { icon: 'softness', text: "Soft Texture" },
        { icon: 'natural', text: "Natural Ingredients" },
        { icon: 'protection', text: "Dryness Protection" },
        { icon: 'glow', text: "Natural Glow" },
      ],
    },
    product: {
      title: "Oholia Moisturizing Cream",
      description: "Our unique formula absorbs quickly to provide immediate and long-lasting hydration. Perfect for all skin types, it leaves your skin silky smooth and naturally radiant. Enjoy the power of pure nature.",
      price: "3,200 DZD",
      size: "50ml / 1.7 fl oz",
      addToCart: "Add to Cart",
      feature1: "Dermatologist Tested",
      feature2: "Cruelty-Free",
    },
    testimonials: {
      title: "What Our Customers Say",
      reviews: [
        { quote: "The best cream I have ever tried! My skin looks healthier and more radiant.", name: "Fatima Z.", before: "Before", after: "After" },
        { quote: "I suffer from dry skin, and this cream has been a lifesaver. The hydration lasts all day.", name: "Amine", before: "Before", after: "After" },
        { quote: "I love that it's natural and suits my sensitive skin. The scent is light and refreshing.", name: "Sarah", before: "Before", after: "After" },
      ],
    },
    gallery: {
      title: "The Oholia Lifestyle"
    },
    cta: {
      title: "Start Your Natural Routine with Oholia Today.",
      button: "Order Now",
    },
    footer: {
      madeIn: "Made with love in Algeria",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      rights: "© 2024 Oholia. All rights reserved.",
    },
  },
};
