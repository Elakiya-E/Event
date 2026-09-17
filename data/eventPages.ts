import type React from "react";
import {
  Heart,
  Cake,
  Baby,
  Sparkles,
  Users,
  Building2,
  Megaphone,
  Compass,
} from "lucide-react";

export type HeroLayout =
  | "split-image-right"
  | "split-image-left"
  | "centered-slim"
  | "offset-stack"
  | "left-aligned"
  | "asymmetric-grid"
  | "statement-right"
  | "timeline-left";

export type BannerOrnament =
  | "wedding-arch"
  | "birthday-confetti"
  | "baby-moon"
  | "anniversary-bands"
  | "family-tree"
  | "corporate-grid"
  | "stadium-arches"
  | "blueprint-grid";

export interface EventPageConfig {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryId: string;
  heroGradient: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  heroBg: string;
  heroImage?: string;
  description: string;
  highlights: string[];
  services: string[];
  idealFor: string[];
  galleryHint: string;
  icon: React.ElementType;
  heroLayout: HeroLayout;
  bannerOrnament: BannerOrnament;
  heroHeight: string;
}

export const pageConfigs: Record<string, EventPageConfig> = {
  weddings: {
    slug: "weddings",
    title: "Weddings",
    tagline: "From intimate ceremonies to grand celebrations",
    category: "Life Events",
    categoryId: "life-events",
    heroGradient: "from-[#C7A978] via-[#E8D5B5] to-[#F7F3EA]",
    accentColor: "text-[#C7A978]",
    accentBg: "bg-[#C7A978]/10",
    accentBorder: "border-[#C7A978]/30",
    heroBg: "bg-[#2A1F14]",
    heroImage: "/images/b1.png",
    description:
      "Your wedding is one of the most important days of your life. We take complete responsibility for planning, designing and executing every detail — from ceremony décor and stage design to catering coordination, photography management, guest experience and seamless on-ground execution. So you and your family can simply enjoy the moment.",
    highlights: [
      "Complete ceremony & reception planning",
      "Customised stage, mandap & entrance décor",
      "Floral design & thematic styling",
      "Catering, photography & vendor coordination",
      "Guest management & seating arrangements",
      "On-ground execution team",
    ],
    services: [
      "Bridal & groom entry concepts",
      "Sangeet & mehndi décor",
      "Reception & ceremony styling",
      "Thematic lighting & sound",
      "Photo zone & backdrops",
      "Full event-day coordination",
    ],
    idealFor: [
      "Intimate family ceremonies",
      "Temple & auditorium weddings",
      "Destination weddings",
      "Grand reception celebrations",
    ],
    galleryHint: "Timeless memories crafted with care",
    icon: Heart,
    heroLayout: "split-image-right",
    bannerOrnament: "wedding-arch",
    heroHeight: "min-h-[72vh]",
  },
  birthdays: {
    slug: "birthdays",
    title: "Birthdays",
    tagline: "Creative, personalised celebrations",
    category: "Life Events",
    categoryId: "life-events",
    heroGradient: "from-[#E98B7B] via-[#F2C3B5] to-[#F7F3EA]",
    accentColor: "text-[#C77A6B]",
    accentBg: "bg-[#C77A6B]/10",
    accentBorder: "border-[#C77A6B]/30",
    heroBg: "bg-[#2A1B18]",
    heroImage: "/images/b2.png",
    description:
      "Every birthday is a milestone worth celebrating in style. We design creative, personalised celebrations around the person you're celebrating — from themed décor and fun entrance concepts to custom cake arrangements, entertainment coordination and complete event management for children, teens and adults.",
    highlights: [
      "Themed décor & styling concepts",
      "Custom cake & dessert tables",
      "Entertainment, DJ & games",
      "Balloon, floral & prop styling",
      "Photo zones & backdrop design",
      "Full on-ground coordination",
    ],
    services: [
      "Kids' themed parties",
      "Teen & young adult birthdays",
      "Milestone adult celebrations",
      "Surprise party planning",
      "Customised entries & reveals",
      "Return gift arrangements",
    ],
    idealFor: [
      "1st birthdays & kids' parties",
      "Sweet sixteen & debuts",
      "25th, 40th, 50th milestones",
      "Surprise family celebrations",
    ],
    galleryHint: "Joyful moments, perfectly crafted",
    icon: Cake,
    heroLayout: "offset-stack",
    bannerOrnament: "birthday-confetti",
    heroHeight: "min-h-[70vh]",
  },
  baptism: {
    slug: "baptism",
    title: "Baptism & Baby Celebrations",
    tagline: "Elegant and meaningful setups",
    category: "Life Events",
    categoryId: "life-events",
    heroGradient: "from-[#9DB8C7] via-[#CDE0E8] to-[#F7F3EA]",
    accentColor: "text-[#6B92A6]",
    accentBg: "bg-[#6B92A6]/10",
    accentBorder: "border-[#6B92A6]/30",
    heroBg: "bg-[#18222A]",
    heroImage: "/images/b3.png",
    description:
      "Baptisms, naming ceremonies and baby milestones deserve elegance and meaning. We create soft, beautiful setups that celebrate the newest member of your family — with delicate styling, pastel florals, personalised touches and complete coordination so you can focus on the ceremony, family and guests.",
    highlights: [
      "Soft pastel & elegant styling",
      "Ceremony stage & baptistery décor",
      "Personalised theming & signage",
      "Cake & dessert arrangement",
      "Guest welcome & seating",
      "Photography coordination",
    ],
    services: [
      "Baptism ceremony styling",
      "Naming & cradle ceremonies",
      "Baby shower celebrations",
      "1st birthday baptism combos",
      "Faith-based tradition décor",
      "Family gathering coordination",
    ],
    idealFor: [
      "Infant baptism ceremonies",
      "Naming & cradle rituals",
      "Baby showers & gender reveals",
      "Multi-generational family celebrations",
    ],
    galleryHint: "Celebrating life's precious beginnings",
    icon: Baby,
    heroLayout: "centered-slim",
    bannerOrnament: "baby-moon",
    heroHeight: "min-h-[68vh]",
  },
  "engagements-anniversaries": {
    slug: "engagements-anniversaries",
    title: "Engagements & Anniversaries",
    tagline: "Beautiful experiences around your story",
    category: "Life Events",
    categoryId: "life-events",
    heroGradient: "from-[#A897C7] via-[#D5CAE8] to-[#F7F3EA]",
    accentColor: "text-[#8B75B0]",
    accentBg: "bg-[#8B75B0]/10",
    accentBorder: "border-[#8B75B0]/30",
    heroBg: "bg-[#201A2A]",
    heroImage: "/images/b4.png",
    description:
      "From the excitement of an engagement to the warmth of an anniversary, every relationship milestone is worth celebrating beautifully. We help you craft experiences around your story — romantic decor, meaningful rituals, ring ceremonies, surprise celebrations and complete event coordination.",
    highlights: [
      "Ring ceremony & engagement décor",
      "Surprise anniversary planning",
      "Romantic theming & styling",
      "Couple entries & special moments",
      "Guest experience & hospitality",
      "Complete event-day management",
    ],
    services: [
      "Engagement ring ceremonies",
      "1st, 10th, 25th, 50th anniversaries",
      "Surprise party execution",
      "Renewal of vows ceremonies",
      "Couple photo & video coordination",
      "Private dinner styling",
    ],
    idealFor: [
      "Engagement & ring ceremonies",
      "Milestone wedding anniversaries",
      "Surprise partner celebrations",
      "Vow renewal ceremonies",
    ],
    galleryHint: "Your story, beautifully celebrated",
    icon: Sparkles,
    heroLayout: "asymmetric-grid",
    bannerOrnament: "anniversary-bands",
    heroHeight: "min-h-[70vh]",
  },
  "family-celebrations": {
    slug: "family-celebrations",
    title: "Family Celebrations",
    tagline: "Because every family moment matters",
    category: "Life Events",
    categoryId: "life-events",
    heroGradient: "from-[#C7B89D] via-[#E4D9C5] to-[#F7F3EA]",
    accentColor: "text-[#A69278]",
    accentBg: "bg-[#A69278]/10",
    accentBorder: "border-[#A69278]/30",
    heroBg: "bg-[#24201A]",
    heroImage: "/images/b5.png",
    description:
      "Family reunions, housewarming, upanayanam, puberty ceremonies, grahapravesham and every tradition that brings families together — we help you host them with warmth and organisation. From décor and catering to guest hospitality and cultural ritual support, we handle every detail.",
    highlights: [
      "Traditional ceremony décor",
      "Ritual & pooja arrangements",
      "Multi-generational seating",
      "Catering & meal planning",
      "Guest welcome & hospitality",
      "Cultural element coordination",
    ],
    services: [
      "Housewarming ceremonies",
      "Puberty / coming-of-age rituals",
      "Thread ceremonies & upanayanam",
      "Family reunions & get-togethers",
      "Festival & pooja events",
      "Retirement celebrations",
    ],
    idealFor: [
      "Traditional family ceremonies",
      "Cultural & religious rituals",
      "Large extended-family gatherings",
      "Housewarming & new beginnings",
    ],
    galleryHint: "Family traditions, beautifully hosted",
    icon: Users,
    heroLayout: "split-image-left",
    bannerOrnament: "family-tree",
    heroHeight: "min-h-[70vh]",
  },
  corporate: {
    slug: "corporate",
    title: "Corporate Events",
    tagline: "Professional, engaging brand experiences",
    category: "Corporate Events",
    categoryId: "corporate-events",
    heroGradient: "from-[#4F918B] via-[#9FC5BE] to-[#F7F3EA]",
    accentColor: "text-[#4F918B]",
    accentBg: "bg-[#4F918B]/10",
    accentBorder: "border-[#4F918B]/30",
    heroBg: "bg-[#122321]",
    description:
      "Corporate events are a reflection of your brand. We plan and execute professional, impactful experiences — from product launches and brand activations to conferences, annual days and leadership offsites — with precise coordination, branded theming and seamless production.",
    highlights: [
      "Branded stage & production design",
      "Conference & AGM management",
      "Award nights & annual days",
      "Launch event concepts & reveals",
      "Team engagement & entertainment",
      "Complete production coordination",
    ],
    services: [
      "Brand launches & reveals",
      "Conferences & seminars",
      "Annual days & award nights",
      "Leadership offsites & retreats",
      "Product launches & showcases",
      "Corporate team celebrations",
    ],
    idealFor: [
      "Brand & product launches",
      "Company annual gatherings",
      "B2B conferences & seminars",
      "Employee engagement events",
    ],
    galleryHint: "Brand moments, impactfully delivered",
    icon: Building2,
    heroLayout: "statement-right",
    bannerOrnament: "corporate-grid",
    heroHeight: "min-h-[68vh]",
  },
  "public-events": {
    slug: "public-events",
    title: "Public & Institutional Events",
    tagline: "Large scale coordination & production",
    category: "Institutional & Public",
    categoryId: "institutional-public",
    heroGradient: "from-[#8FA09C] via-[#C2CCC8] to-[#F7F3EA]",
    accentColor: "text-[#6B807C]",
    accentBg: "bg-[#6B807C]/10",
    accentBorder: "border-[#6B807C]/30",
    heroBg: "bg-[#1C2322]",
    description:
      "Public and institutional events demand scale, security-conscious coordination and flawless production. From college festivals and medical graduation ceremonies to government events, public celebrations and large-scale gatherings, we have the team and systems to deliver at every size.",
    highlights: [
      "Large-scale production & stage",
      "Crowd & entry management",
      "Sound, lighting & AV setup",
      "Ceremony protocol & flow",
      "Government & institutional liaison",
      "Complete on-ground team",
    ],
    services: [
      "College festivals & culturals",
      "Medical graduation ceremonies",
      "Government & public events",
      "Political gatherings & campaigns",
      "Community cultural events",
      "Expo & public fair coordination",
    ],
    idealFor: [
      "College graduation events",
      "Government functions",
      "Community & public celebrations",
      "Large-scale cultural events",
    ],
    galleryHint: "Scaled events, flawlessly executed",
    icon: Megaphone,
    heroLayout: "timeline-left",
    bannerOrnament: "stadium-arches",
    heroHeight: "min-h-[70vh]",
  },
  "customised-decor": {
    slug: "customised-decor",
    title: "Customised Décor",
    tagline: "Your idea. Your story. Your celebration.",
    category: "Design Studio",
    categoryId: "life-events",
    heroGradient: "from-[#B5A27D] via-[#DCCAA8] to-[#F7F3EA]",
    accentColor: "text-[#8C7B5A]",
    accentBg: "bg-[#8C7B5A]/10",
    accentBorder: "border-[#8C7B5A]/30",
    heroBg: "bg-[#231E16]",
    description:
      "Customised décor is where creative vision meets the floor. We don't work with standard templates — every setup is designed around your theme, colours, venue and celebration style. Florals, stage, entrance, photo zones, lighting, props, tablescapes and the smallest details — all designed together with you.",
    highlights: [
      "Concept & mood board design",
      "Thematic styling & colour palette",
      "Stage & entrance décor concepts",
      "Floral & props sourcing",
      "Tablescapes & table styling",
      "Lighting & ambience design",
    ],
    services: [
      "Wedding mandap & stage décor",
      "Birthday theme décor",
      "Ceremony styling & ritual setups",
      "Corporate branding & stage design",
      "Exhibition & expo stall décor",
      "Photo zone & backdrop design",
    ],
    idealFor: [
      "Clients with specific décor vision",
      "Theme-based weddings & events",
      "Premium & luxury celebrations",
      "Brand-inspired corporate design",
    ],
    galleryHint: "Concepts crafted uniquely for you",
    icon: Compass,
    heroLayout: "left-aligned",
    bannerOrnament: "blueprint-grid",
    heroHeight: "min-h-[72vh]",
  },
};

export function getAllEventPageSlugs(): string[] {
  return Object.keys(pageConfigs);
}

export function getEventPageConfig(slug: string): EventPageConfig | undefined {
  return pageConfigs[slug];
}
