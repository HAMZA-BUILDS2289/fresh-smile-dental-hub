// =====================================================================
//  FRESHSMILE DENTAL HUB — single source of truth for the whole site.
//  Edit text, numbers, services and blog posts here.
// =====================================================================

export const BUSINESS = {
  name: "Freshsmile Dental Hub",
  short: "Freshsmile",
  tagline:
    "Modern clinic committed to exceptional and comfortable dental care in the heart of Osogbo",
  rating: 4.8,
  reviewCount: 18,
  address:
    "Sir Grounding 3 Kobogbogboe, beside Ascension filling station, Osogbo, 230001, Osun",
  addressShort: "Beside Ascension filling station, Osogbo, Osun",
  phoneDisplay: "0913 656 2143",
  phoneTel: "+2349136562143",
  whatsappNumber: "2349136562143",
  mission:
    "To help you achieve and maintain a healthy, beautiful smile through a patient-centered approach. We offer a comprehensive range of services, including routine check-ups, teeth whitening, and advanced treatments like root canals and corrective braces. Our dedicated team prioritizes preserving your natural teeth, ensuring each patient receives a personalized treatment plan designed for lasting oral health.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

/** Build a WhatsApp link with a pre-filled message. Every booking button uses this. */
export function wa(message?: string) {
  const text =
    message ||
    "Hello Freshsmile Dental Hub, I want to book an appointment. Please let me know the available dates and times.";
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.address
)}&output=embed`;
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.address
)}`;

// ---------------------------------------------------------------------
// Numbers shown in the stats band. These are all verifiable facts.
// Add "Happy patients" / "Years of experience" here once you have real figures.
// ---------------------------------------------------------------------
export const stats = [
  { value: 4.8, decimals: 1, suffix: "★", label: "Average Google rating" },
  { value: 18, decimals: 0, suffix: "", label: "Verified patient reviews" },
  { value: 11, decimals: 0, suffix: "", label: "Dental treatments under one roof" },
  { value: 100, decimals: 0, suffix: "%", label: "Personalised treatment plans" },
];

export const attributes = [
  { icon: "calendar", title: "By appointment", text: "Appointment required — so you're never kept waiting." },
  { icon: "building", title: "On-site services", text: "Every treatment is carried out right here in our clinic." },
  { icon: "card", title: "Cards accepted", text: "Credit and debit cards accepted for your convenience." },
  { icon: "car", title: "Free parking", text: "Free on-site parking — pull in and walk straight in." },
  { icon: "door", title: "Gender-neutral toilets", text: "Inclusive, clean facilities for every patient." },
  { icon: "heart", title: "Women-owned", text: "A women-owned clinic with a warm, patient-first culture." },
];

export const why = [
  { icon: "heart", title: "Patient-centred care", text: "Your goals, your pace. We listen first, then build a plan around you — never a one-size-fits-all script." },
  { icon: "shield", title: "We save natural teeth", text: "Our philosophy is preservation. We exhaust every option to keep your own teeth healthy before recommending anything else." },
  { icon: "moon", title: "Comfort-first, with sedation", text: "Nervous about the dentist? Sedation dentistry and a gentle, unhurried approach keep you relaxed throughout." },
  { icon: "layers", title: "11 treatments, one roof", text: "From check-ups and whitening to root canals and braces — complete care without being referred around town." },
  { icon: "siren", title: "Emergency services", text: "Severe toothache, broken or knocked-out tooth? Call us — we make room for dental emergencies." },
  { icon: "star", title: "4.8★ patient-rated", text: "Rated 4.8 out of 5 by our patients, who call our service top-notch and our clinic the best in Osogbo." },
];

export const steps = [
  { n: "01", title: "Message us on WhatsApp", text: "Tap any Book Appointment button. Your message is pre-written — just hit send and we'll reply with available times." },
  { n: "02", title: "Visit the clinic", text: "Come in for a gentle, thorough assessment. We explain what we see in plain language, with no pressure." },
  { n: "03", title: "Get your personal plan", text: "Receive a treatment plan built around your teeth, your budget and your goals — then relax, we've got you." },
];

export const packages = [
  {
    name: "Smile Check",
    badge: "Start here",
    items: ["General dental check-up", "Scaling & polishing", "Personal oral-health plan", "Home-care guidance"],
    message: "Hello Freshsmile Dental Hub, I'd like a quote for the Smile Check package (check-up + scaling & polishing).",
  },
  {
    name: "Bright Smile",
    badge: "Most popular",
    items: ["Professional teeth whitening", "Scaling & polishing", "Shade-match consultation", "Aftercare advice"],
    message: "Hello Freshsmile Dental Hub, I'd like a quote for the Bright Smile package (teeth whitening + scaling & polishing).",
    featured: true,
  },
  {
    name: "Smile Makeover",
    badge: "Complete",
    items: ["Cosmetic dentistry consultation", "Corrective braces assessment", "Tooth replacement options", "Step-by-step treatment roadmap"],
    message: "Hello Freshsmile Dental Hub, I'd like a quote for the Smile Makeover package (cosmetic dentistry / braces / tooth replacement consultation).",
  },
];

export const reviews = [
  { name: "Abidemi Kabirat", text: "Their treatment is top-notch Such a lovely clinic with great service" },
  { name: "Tomilayo Grace", text: "Actually she's best at what she does i must say!" },
  { name: "ADEFILA Ayobami", text: "I really enjoyed your services i will like to keep on patronizing you" },
  { name: "Akintayo abdulquadri Olakunle", text: "Best dental clinic in osogbo" },
  { name: "Christianah Agbeniyi", text: "Fresh smile is a good dental hub because service is a top-notch" },
];

export const faqs = [
  { q: "How do I book an appointment?", a: "Tap any Book Appointment button and your WhatsApp opens with a pre-filled message to us (0913 656 2143). Send it and we'll confirm a date and time. Appointments are required so that every patient gets our full attention." },
  { q: "Do you handle dental emergencies?", a: "Yes. Emergency services are part of what we do. For severe pain, swelling, a broken tooth or a knocked-out tooth, call us immediately on 0913 656 2143. If you have swelling that affects your breathing or swallowing, go to the nearest hospital emergency unit." },
  { q: "I'm scared of the dentist — can you help?", a: "Absolutely. Sedation dentistry is one of our services, and our whole approach is built around comfort. Tell us about your concerns when you book and we'll plan your visit around them." },
  { q: "Do you treat children?", a: "Yes — pediatric care is one of our core services. We keep visits short, friendly and positive so children build healthy habits from the very first appointment." },
  { q: "Which payment methods do you accept?", a: "We accept credit and debit cards. Ask us about payment options for larger treatments when you book." },
  { q: "Is there parking at the clinic?", a: "Yes, we have free on-site parking, right beside Ascension filling station in Osogbo." },
  { q: "Will you try to save my tooth before removing it?", a: "Preserving your natural teeth is our priority. Where a tooth can be saved — for example with root canal treatment — we'll explain that option first. Extraction is recommended only when it is truly the best choice, and we'll talk you through replacement options too." },
  { q: "How much will my treatment cost?", a: "Every mouth is different, so we quote after a short assessment. Message us on WhatsApp to get started and we'll guide you on what to expect." },
];

// ---------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------
export type Service = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  short: string;
  overview: string;
  goodFor: string[];
  steps: { title: string; text: string }[];
  benefits: string[];
  visits: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: "sparkles",
    tagline: "Brighter, whiter, camera-ready.",
    short: "Lift years of tea, coffee and everyday staining for a visibly brighter smile.",
    overview:
      "Professional teeth whitening lifts stains that brushing alone can't touch. Done under dental supervision, it brightens your natural teeth evenly and safely, after we've checked that your teeth and gums are healthy enough for it.",
    goodFor: [
      "Stains from tea, coffee, cola or red wine",
      "Teeth that have gradually darkened with age",
      "A confidence boost before a wedding, interview or big event",
      "Anyone with healthy teeth and gums who wants a brighter shade",
    ],
    steps: [
      { title: "Check & shade match", text: "We examine your teeth and gums, and record your starting shade." },
      { title: "Protect & whiten", text: "Your gums are protected while a professional whitening agent is applied to your teeth." },
      { title: "Aftercare plan", text: "We show you how to keep results looking fresh for as long as possible." },
    ],
    benefits: [
      "Noticeably brighter teeth",
      "Supervised by a dental professional",
      "Evenly applied for a natural look",
      "Pairs perfectly with scaling & polishing",
    ],
    visits: "Usually completed in a single visit",
    faqs: [
      { q: "Does whitening damage teeth?", a: "When done professionally on healthy teeth, whitening is considered safe. Some people notice temporary sensitivity, which we'll help you manage." },
      { q: "Will it whiten crowns or fillings?", a: "No — whitening works on natural tooth enamel only. We'll talk through how fillings or crowns might affect the final colour match." },
    ],
  },
  {
    slug: "scaling-and-polishing",
    title: "Scaling and Polishing",
    icon: "droplets",
    tagline: "A deep clean your toothbrush can't give you.",
    short: "Remove hardened tartar and surface stains, and leave your teeth smooth and fresh.",
    overview:
      "Even excellent brushing can't remove tartar (hardened plaque). Scaling removes it from above and just below the gumline, and polishing smooths the tooth surface so stains and plaque find it harder to stick.",
    goodFor: [
      "Bleeding or puffy gums",
      "Persistent bad breath",
      "Visible yellow or brown build-up near the gumline",
      "Regular six-monthly maintenance",
    ],
    steps: [
      { title: "Assessment", text: "We check your gums and teeth to see how much build-up there is." },
      { title: "Scaling", text: "Tartar and plaque are carefully removed from the tooth surfaces and gumline." },
      { title: "Polishing", text: "Teeth are polished smooth for a clean, fresh finish." },
    ],
    benefits: [
      "Helps prevent gum disease",
      "Fresher breath",
      "Smoother, cleaner-feeling teeth",
      "Removes surface stains",
    ],
    visits: "Usually one comfortable visit",
    faqs: [
      { q: "How often should I have it done?", a: "Many people benefit from a professional clean about every six months. We'll tailor the interval to your gums and habits." },
      { q: "Will it hurt?", a: "Most patients find it comfortable. Gums that are inflamed can feel tender, and we'll adjust to keep you at ease." },
    ],
  },
  {
    slug: "corrective-braces",
    title: "Corrective Braces",
    icon: "ruler",
    tagline: "Straighter teeth, better bite, lasting confidence.",
    short: "Gently guide crowded, gapped or misaligned teeth into a healthier, straighter position.",
    overview:
      "Corrective braces move teeth gradually into better alignment, improving how your smile looks and how your teeth bite together. Straighter teeth are also easier to keep clean. We begin with a careful assessment so your plan fits your mouth.",
    goodFor: [
      "Crowded or overlapping teeth",
      "Gaps between teeth",
      "Overbite, underbite or crossbite",
      "Teens and adults who want a straighter smile",
    ],
    steps: [
      { title: "Orthodontic assessment", text: "We examine your teeth and bite and explain which options suit you." },
      { title: "Fitting", text: "Your braces are fitted and you're shown how to brush and clean around them." },
      { title: "Regular adjustments", text: "Scheduled visits gradually move your teeth toward the planned position." },
    ],
    benefits: [
      "A straighter, more confident smile",
      "Improved bite function",
      "Easier cleaning once teeth are aligned",
      "A plan tailored to your goals",
    ],
    visits: "Treatment length varies by case — your dentist will advise after assessment",
    faqs: [
      { q: "Am I too old for braces?", a: "Not at all. As long as your teeth and gums are healthy, braces can work for teenagers and adults." },
      { q: "How do I care for my teeth with braces?", a: "Brush carefully after meals, clean between and around brackets, limit very sticky or hard foods, and attend every adjustment visit." },
    ],
  },
  {
    slug: "tooth-replacement",
    title: "Tooth Replacement",
    icon: "puzzle",
    tagline: "Fill the gap. Restore your smile and your bite.",
    short: "Replace missing teeth so you can eat, speak and smile with confidence again.",
    overview:
      "Missing teeth affect chewing, speech and appearance, and over time neighbouring teeth can drift into the gap. We discuss the replacement options that suit your mouth, your budget and your goals, then plan the treatment step by step.",
    goodFor: [
      "One or more missing teeth",
      "Difficulty chewing comfortably",
      "Gaps that make you self-conscious when smiling",
      "Teeth recently lost to decay, injury or extraction",
    ],
    steps: [
      { title: "Consultation", text: "We examine the area and talk through the replacement options available to you." },
      { title: "Planning", text: "We agree a clear plan, timeline and cost before any work begins." },
      { title: "Fitting & review", text: "Your replacement is fitted, checked for comfort and bite, and reviewed afterwards." },
    ],
    benefits: [
      "Improved chewing and speech",
      "A complete, natural-looking smile",
      "Helps protect neighbouring teeth from shifting",
      "Options discussed openly, with no pressure",
    ],
    visits: "Number of visits depends on the option chosen",
    faqs: [
      { q: "What options are there?", a: "Depending on your mouth and goals, options can include dentures, bridges and other solutions. We'll explain the pros and cons of each during your consultation." },
      { q: "Should I replace a missing tooth quickly?", a: "It's usually wise to talk to a dentist early, since neighbouring teeth can shift and bone can change over time." },
    ],
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    icon: "wrench",
    tagline: "Gentle removal, only when it's truly necessary.",
    short: "Careful, comfortable removal of teeth that can't be saved, with a clear plan afterwards.",
    overview:
      "We always try to preserve your natural teeth first. When a tooth is too damaged, infected or crowded to save, extraction is the right and healthy choice. We use local anaesthesia and a gentle technique, then guide your healing and talk about replacement.",
    goodFor: [
      "Severely decayed or broken teeth that can't be restored",
      "Infected teeth",
      "Problem wisdom teeth",
      "Teeth that need removing as part of orthodontic planning",
    ],
    steps: [
      { title: "Assessment", text: "We examine the tooth, and explain whether it can be saved or must be removed." },
      { title: "Numbing & removal", text: "The area is numbed so the tooth can be removed comfortably." },
      { title: "Healing guidance", text: "You receive clear aftercare instructions and a plan for replacement if you need one." },
    ],
    benefits: [
      "Relieves pain and infection",
      "Comfortable, gentle technique",
      "Clear aftercare instructions",
      "Replacement options explained",
    ],
    visits: "Usually completed in one visit",
    faqs: [
      { q: "Will it hurt?", a: "The area is numbed first, so you should feel pressure but not sharp pain. Mild soreness afterwards is normal and we'll advise how to manage it." },
      { q: "What should I avoid after an extraction?", a: "Avoid rinsing hard, smoking, and using a straw for the first day, so the blood clot can form and heal properly. We'll give you full instructions." },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment (RCT)",
    icon: "heartpulse",
    tagline: "Save your natural tooth. End the pain.",
    short: "Remove infection from inside a damaged tooth so you can keep it for years to come.",
    overview:
      "When the soft tissue inside a tooth becomes infected or inflamed, root canal treatment cleans it out and seals the tooth so it can stay in your mouth. It's the heart of our tooth-preserving philosophy — and with modern anaesthesia, it's usually no more uncomfortable than having a filling.",
    goodFor: [
      "Severe or throbbing toothache",
      "Lingering sensitivity to hot or cold",
      "Swelling or a pimple-like bump on the gum",
      "A deeply decayed or cracked tooth that can still be saved",
    ],
    steps: [
      { title: "Numb & access", text: "The tooth is numbed and a small opening is made to reach the inside." },
      { title: "Clean & disinfect", text: "Infected tissue is removed and the canals are cleaned thoroughly." },
      { title: "Seal & restore", text: "The tooth is sealed and then restored so it can function normally again." },
    ],
    benefits: [
      "Relieves tooth pain",
      "Keeps your natural tooth",
      "Avoids the gap and cost of replacement",
      "Restores normal chewing",
    ],
    visits: "Often 1–2 visits, depending on the tooth",
    faqs: [
      { q: "Is a root canal painful?", a: "The pain people associate with root canals comes from the infection, not the treatment. With local anaesthesia, the procedure is usually comparable to having a filling." },
      { q: "Why not just pull the tooth?", a: "Keeping your natural tooth is generally better for chewing and for the surrounding teeth. We'll explain both options so you can decide." },
    ],
  },
  {
    slug: "general-dental-check-ups",
    title: "General Dental Check-Ups",
    icon: "stethoscope",
    tagline: "Catch small problems before they become big ones.",
    short: "A thorough routine examination that protects your teeth, gums and overall health.",
    overview:
      "Regular check-ups are the foundation of lasting oral health. We examine your teeth, gums and mouth, spot early signs of decay or gum disease, and give practical advice tailored to you — so small issues are fixed simply and early.",
    goodFor: [
      "Routine six-monthly reviews",
      "New patients wanting a full baseline assessment",
      "Anyone who hasn't seen a dentist in a while",
      "Family members of all ages",
    ],
    steps: [
      { title: "Conversation", text: "We ask about your concerns, habits and medical history." },
      { title: "Examination", text: "We check your teeth, gums and mouth thoroughly." },
      { title: "Your plan", text: "We explain our findings clearly and agree what — if anything — needs attention." },
    ],
    benefits: [
      "Early detection of decay and gum disease",
      "Smaller, simpler and cheaper treatment",
      "Personalised home-care advice",
      "Peace of mind",
    ],
    visits: "A single, unhurried visit",
    faqs: [
      { q: "How often should I have a check-up?", a: "Most people benefit from about every six months, though we may suggest a different interval based on your needs." },
      { q: "I have no pain. Do I still need one?", a: "Yes — many dental problems, including early decay and gum disease, are painless until they're advanced." },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "gem",
    tagline: "Design the smile you've always wanted.",
    short: "Reshape, repair and refine the look of your smile with personalised cosmetic treatment.",
    overview:
      "Cosmetic dentistry focuses on the look of your smile — shape, colour, spacing and balance. We listen to what you'd like to change and recommend natural-looking options that are right for your teeth, always keeping tooth health first.",
    goodFor: [
      "Chipped, worn or uneven teeth",
      "Discoloured teeth",
      "Small gaps",
      "A complete smile refresh for a special occasion",
    ],
    steps: [
      { title: "Smile consultation", text: "Tell us what you'd like to change and we'll explain what's possible." },
      { title: "Tailored plan", text: "We recommend the treatments that give a natural result for your teeth." },
      { title: "Refine & finish", text: "Treatment is carried out and fine-tuned so you love the result." },
    ],
    benefits: [
      "Natural-looking results",
      "Plan built around your goals",
      "Combines well with whitening and braces",
      "Boosts everyday confidence",
    ],
    visits: "Varies depending on the treatments chosen",
    faqs: [
      { q: "Is cosmetic dentistry only about looks?", a: "Many cosmetic treatments also improve function and protect teeth — for example repairing chips or worn edges." },
      { q: "Can I combine treatments?", a: "Yes. A common route is scaling & polishing, then whitening, then any shaping or repair — we'll sequence it for you." },
    ],
  },
  {
    slug: "emergency-services",
    title: "Emergency Services",
    icon: "siren",
    tagline: "In pain? Call us now.",
    short: "Fast help for severe toothache, broken or knocked-out teeth, swelling and dental injuries.",
    overview:
      "Dental emergencies don't wait for a convenient time. If you have severe pain, a broken or knocked-out tooth, or a dental injury, call us straight away on 0913 656 2143 and we'll advise you and see you as quickly as we can.",
    goodFor: [
      "Severe or persistent toothache",
      "A broken, chipped or knocked-out tooth",
      "Swelling in the gum or face",
      "Lost fillings or crowns causing pain",
    ],
    steps: [
      { title: "Call us", text: "Phone 0913 656 2143 and describe what's happened — we'll give you immediate first-aid advice." },
      { title: "Come in", text: "We'll see you as quickly as possible and relieve your pain first." },
      { title: "Fix & follow-up", text: "We treat the cause and plan any follow-up care you need." },
    ],
    benefits: [
      "Pain relief as a priority",
      "Clear first-aid guidance over the phone",
      "Treatment of the cause, not just the symptom",
      "Follow-up care to protect your tooth",
    ],
    visits: "Same-day help wherever possible — call first",
    faqs: [
      { q: "What should I do if a tooth is knocked out?", a: "Handle it by the crown (never the root), rinse gently if dirty, and if possible keep it moist in milk, then call us immediately. Time matters." },
      { q: "When should I go to a hospital instead?", a: "If you have facial swelling that affects your breathing or swallowing, or a serious head or jaw injury, go to the nearest hospital emergency unit straight away." },
    ],
  },
  {
    slug: "pediatric-care",
    title: "Pediatric Care",
    icon: "baby",
    tagline: "Happy smiles start early.",
    short: "Gentle, friendly dental care for children that builds confidence and healthy habits.",
    overview:
      "Children deserve a positive first experience at the dentist. We keep visits calm and friendly, explain things in child-friendly language, and teach healthy brushing habits that protect little teeth as they grow.",
    goodFor: [
      "A child's very first dental visit",
      "Routine check-ups and cleanings",
      "Toothache or visible decay in a child",
      "Parents wanting guidance on brushing and diet",
    ],
    steps: [
      { title: "Meet & greet", text: "We let your child get comfortable with the chair and our team first." },
      { title: "Gentle check", text: "A quick, friendly look at their teeth and gums." },
      { title: "Tips for home", text: "We show you and your child how to brush and what foods protect teeth." },
    ],
    benefits: [
      "Positive early experiences",
      "Early detection of decay",
      "Healthy brushing habits for life",
      "Reassurance for parents",
    ],
    visits: "Short, child-friendly visits",
    faqs: [
      { q: "When should my child first see a dentist?", a: "A good rule of thumb is around the first birthday or when the first tooth appears. Early visits help prevent problems." },
      { q: "My child is scared. What can I do?", a: "Use positive words, avoid saying things like 'it won't hurt', and let us know — we'll go at your child's pace." },
    ],
  },
  {
    slug: "sedation-dentistry",
    title: "Sedation Dentistry",
    icon: "moon",
    tagline: "Relax. We'll take care of the rest.",
    short: "Calm, comfortable treatment for anxious patients and longer or more involved procedures.",
    overview:
      "Dental anxiety is incredibly common, and it stops many people from getting the care they need. Sedation dentistry helps you relax during treatment so you can get the care you deserve in comfort. We'll discuss what's suitable for you and keep your safety front of mind.",
    goodFor: [
      "Fear or anxiety about dental visits",
      "Longer or more involved procedures",
      "A strong gag reflex",
      "People who've avoided the dentist for years",
    ],
    steps: [
      { title: "Talk it through", text: "We discuss your worries, medical history and which approach is suitable." },
      { title: "Relax", text: "You're helped to relax so that treatment feels calm." },
      { title: "Recover", text: "We make sure you're comfortable afterwards and explain what to expect." },
    ],
    benefits: [
      "Eases dental anxiety",
      "Makes longer treatment more comfortable",
      "Helps anxious patients finally get care",
      "Personalised to your health and needs",
    ],
    visits: "Planned with your treatment — please book ahead",
    faqs: [
      { q: "Is sedation safe?", a: "When planned carefully around your medical history, sedation is used routinely in dentistry. We'll ask about your health and explain everything beforehand." },
      { q: "Do I need to arrange anything?", a: "We'll give you clear instructions when you book, including whether to bring someone with you." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// ---------------------------------------------------------------------
// BLOG
// ---------------------------------------------------------------------
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: string;
  from: string;
  to: string;
  related: string; // service slug
  body: { h?: string; p: string }[];
};

export const posts: Post[] = [
  {
    slug: "5-ways-to-keep-your-teeth-white",
    title: "5 Ways To Keep Your Teeth White",
    excerpt: "Simple daily habits — and one professional treatment — that keep your smile bright for longer.",
    category: "Whitening",
    date: "2026-09-28",
    readTime: "4 min read",
    icon: "sparkles",
    from: "#22d3ee",
    to: "#0369a1",
    related: "teeth-whitening",
    body: [
      { p: "A bright smile isn't about luck — it's mostly about habits. Here are five practical ways to keep your teeth looking their whitest." },
      { h: "1. Brush properly, twice a day", p: "Brush for two minutes, morning and night, with a soft brush and fluoride toothpaste. Plaque and surface stains build up daily, and consistent brushing is your first defence." },
      { h: "2. Rinse after stain-heavy drinks", p: "Tea, coffee, red wine and cola can all stain enamel. You don't have to give them up — rinse your mouth with water afterwards, and consider using a straw for cold drinks." },
      { h: "3. Don't skip professional cleaning", p: "Tartar and deep surface stains can't be brushed away. Scaling and polishing every six months or so removes them and leaves teeth looking noticeably brighter." },
      { h: "4. Avoid tobacco", p: "Smoking and chewing tobacco are among the fastest ways to stain teeth — and they harm your gums too. Cutting back or quitting helps both your smile and your health." },
      { h: "5. Consider professional whitening", p: "When you want a bigger change, dentist-supervised whitening is more controlled and even than DIY products. We'll first check your teeth and gums are healthy, and explain what to expect — for example, whitening won't change the colour of fillings or crowns." },
    ],
  },
  {
    slug: "root-canal-treatment-myths-vs-facts",
    title: "Root Canal Treatment: 5 Myths, Busted",
    excerpt: "Root canals have a scary reputation they don't deserve. Here's what's actually true.",
    category: "Treatment",
    date: "2026-09-14",
    readTime: "5 min read",
    icon: "heartpulse",
    from: "#38bdf8",
    to: "#075985",
    related: "root-canal-treatment",
    body: [
      { p: "Few dental words cause as much worry as 'root canal'. Let's separate the myths from the facts." },
      { h: "Myth 1: It's extremely painful", p: "The pain people remember comes from the infected tooth, not the treatment. With local anaesthesia, a root canal is usually comparable to having a filling." },
      { h: "Myth 2: It's better to just pull the tooth", p: "Where a tooth can be saved, keeping it is generally better for chewing, appearance and the surrounding teeth. Replacing a tooth also involves extra steps and costs." },
      { h: "Myth 3: It makes you ill", p: "There is no good scientific evidence that root canal treatment causes illness elsewhere in the body. Removing infection from a tooth is a health-protecting step." },
      { h: "Myth 4: You'll always know you need one", p: "Sometimes an infected tooth causes severe pain — but sometimes it causes none at all. Regular check-ups can spot problems before they hurt." },
      { h: "The bottom line", p: "If a dentist recommends root canal treatment, it's usually because your tooth can still be saved. Ask questions — we're happy to explain every step." },
    ],
  },
  {
    slug: "your-childs-first-dental-visit",
    title: "Your Child's First Dental Visit: What to Expect",
    excerpt: "How to prepare your little one — and yourself — for a calm, positive first appointment.",
    category: "Pediatric",
    date: "2026-08-30",
    readTime: "4 min read",
    icon: "baby",
    from: "#67e8f9",
    to: "#0e7490",
    related: "pediatric-care",
    body: [
      { p: "A good first dental experience sets the tone for a lifetime of healthy habits. Here's how to make it a happy one." },
      { h: "When to go", p: "A good rule of thumb is around your child's first birthday, or when their first tooth appears. Early visits are about prevention and building comfort." },
      { h: "How to prepare", p: "Keep your language positive and simple. Avoid phrases like 'it won't hurt' — they can plant the idea that something might. Choose a time when your child is well-rested, and bring a favourite comfort toy." },
      { h: "What happens at the visit", p: "Expect a gentle look at your child's teeth and gums, a chance to sit in the chair and meet the team, and practical tips on brushing, snacks and drinks that protect little teeth." },
      { h: "Making it a habit", p: "Regular, short visits help children see the dentist as a normal, friendly part of life. Brush together at home, and celebrate every good checkup." },
    ],
  },
  {
    slug: "dental-emergency-what-to-do-first",
    title: "Dental Emergency? Do This First",
    excerpt: "Toothache, broken tooth, knocked-out tooth — the first steps that can save your smile.",
    category: "Emergency",
    date: "2026-08-12",
    readTime: "5 min read",
    icon: "siren",
    from: "#7dd3fc",
    to: "#0c4a6e",
    related: "emergency-services",
    body: [
      { p: "Dental emergencies are stressful, but knowing what to do in the first few minutes can make a big difference. Always call us right away on 0913 656 2143." },
      { h: "Severe toothache", p: "Rinse your mouth with warm water and gently floss to remove any trapped food. A cold compress on the outside of your cheek can ease discomfort. Avoid placing painkillers directly on the gum, and call us for an urgent appointment." },
      { h: "Knocked-out tooth", p: "Pick the tooth up by the crown, never the root. If it's dirty, rinse it gently — don't scrub. Keep it moist, ideally in milk, and get to a dentist as quickly as possible. Time is critical." },
      { h: "Broken or chipped tooth", p: "Rinse your mouth, keep any broken pieces, and use a cold compress if there's swelling. Avoid chewing on that side until you've been seen." },
      { h: "When to go to the hospital", p: "If you have facial swelling that affects your breathing or swallowing, a fever with swelling, or a serious head or jaw injury, go to the nearest hospital emergency unit immediately." },
    ],
  },
  {
    slug: "braces-101-is-orthodontic-treatment-right-for-you",
    title: "Braces 101: Is Orthodontic Treatment Right for You?",
    excerpt: "Who benefits from corrective braces, what to expect, and how to look after them.",
    category: "Orthodontics",
    date: "2026-07-26",
    readTime: "5 min read",
    icon: "ruler",
    from: "#22d3ee",
    to: "#164e63",
    related: "corrective-braces",
    body: [
      { p: "Braces aren't just for teenagers, and they're not only about looks. Here's what you need to know." },
      { h: "Who can benefit?", p: "Corrective braces can help with crowded or overlapping teeth, gaps, and bite problems like overbite, underbite and crossbite. Provided your teeth and gums are healthy, braces can work for children, teens and adults." },
      { h: "Why straighter teeth matter", p: "Beyond appearance, well-aligned teeth are easier to clean and can bite together more comfortably, which supports long-term oral health." },
      { h: "What treatment looks like", p: "It begins with an assessment. Once braces are fitted, regular adjustment visits gradually move your teeth into position. How long this takes varies from person to person." },
      { h: "Looking after your braces", p: "Brush carefully after meals, clean around brackets and wires, limit hard or sticky foods, and never skip an adjustment appointment. Good home care protects your teeth throughout treatment." },
    ],
  },
  {
    slug: "why-scaling-and-polishing-matters",
    title: "Why Scaling & Polishing Twice a Year Matters",
    excerpt: "What a professional clean actually does — and why brushing alone isn't enough.",
    category: "Prevention",
    date: "2026-07-08",
    readTime: "4 min read",
    icon: "droplets",
    from: "#38bdf8",
    to: "#0284c7",
    related: "scaling-and-polishing",
    body: [
      { p: "You brush, you floss — so why do you still need a professional clean? Because some build-up simply can't be brushed away." },
      { h: "The problem with tartar", p: "When plaque isn't fully removed it hardens into tartar. Once it has formed, brushing can't remove it. It irritates gums and can contribute to gum disease and bad breath." },
      { h: "What scaling does", p: "Scaling uses professional instruments to remove tartar and plaque from the surface of your teeth and just beneath the gumline, where your brush can't reach." },
      { h: "What polishing adds", p: "Polishing smooths your teeth, removing surface stains and making it harder for plaque to stick. Your teeth look brighter and feel wonderfully smooth." },
      { h: "How often?", p: "Many people benefit from a clean about every six months. If your gums bleed when you brush, or you notice persistent bad breath, don't wait — book a check-up." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

// ---------------------------------------------------------------------
// GALLERY — swap `src` for your own photos (drop files in /public/images).
// ---------------------------------------------------------------------
export type GalleryItem = { src: string; title: string; category: "Clinic Interior" | "Patient Smiles" | "Procedures" };

export const galleryCategories = ["All", "Clinic Interior", "Patient Smiles", "Procedures"] as const;

export const gallery: GalleryItem[] = [
  { src: "/images/clinic-chair.jpg", title: "Our treatment chair and delivery unit", category: "Clinic Interior" },
  { src: "/images/instruments.jpg", title: "Modern handpieces, ready for your visit", category: "Clinic Interior" },
  { src: "/images/tools.jpg", title: "Sterile, precision instruments", category: "Clinic Interior" },
  { src: "/images/clinic-patient.jpg", title: "Gentle care, chairside", category: "Procedures" },
  { src: "/images/procedure-1.jpg", title: "Careful, comfortable treatment", category: "Procedures" },
  { src: "/images/procedure-2.jpg", title: "A team approach to your care", category: "Procedures" },
  { src: "/images/tooth-3d.jpg", title: "Healthy smiles start here", category: "Patient Smiles" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// ---------------------------------------------------------------------
// MEET THE DOCTOR — replace name / role / bio / image with the real dentist's
// details when you have them (photo: drop a file in /public/images).
// ---------------------------------------------------------------------
export const doctor = {
  name: "The Freshsmile Dental Team",
  role: "Women-owned · Patient-centred dental care",
  image: "/images/clinic-patient.jpg",
  bio: [
    "Freshsmile is a women-owned clinic built around one idea: a healthy, beautiful smile is made through care that is centred on the patient. Every visit starts with listening — to your concerns, your goals and your comfort level.",
    "Our team prioritises preserving your natural teeth and builds a personalised treatment plan for lasting oral health — from routine check-ups and whitening to root canals and corrective braces.",
  ],
  points: ["Personalised treatment plans", "Natural-tooth preservation first", "Gentle, comfort-focused approach", "Sedation available for nervous patients"],
};
