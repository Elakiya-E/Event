// Source of Truth: Iragu Events Website Revamp Document
// Complete branding, positioning, and section content

export const siteContent = {
  brand: {
    name: "Iragu Events",
    tagline: "Complete Event Planning & Management",
    positioning: "We're Not Just Event Decorators. We're Your Complete Event Partner.",
    signature: "Your Vision. Our Creativity. Complete Event Responsibility.",
    coreMessages: [
      "We're not just event decorators. We're your complete event partner.",
      "Every event is customised around your vision.",
      "One team. One point of contact. Complete responsibility.",
      "You enjoy the moment. We take care of everything behind it.",
      "Your Vision. Our Creativity. Complete Event Responsibility."
    ],
    contact: {
      phoneDisplay: "90424 29868",
      phoneRaw: "+919042429868",
      email: "bezlon@iraguevents.com",
      website: "www.iraguevents.com",
      instagramHandle: "@iraguevents",
      instagramUrl: "https://instagram.com/iraguevents",
      whatsappUrl: "https://wa.me/919042429868",
      location: "Nagercoil, Tamil Nadu"
    }
  },

  hero: {
    badge: "Complete Event Planning & Management",
    headline: "Helping People & Brands Create Stress-Free Events",
    supportingStatement: "From customised décor to complete event execution, we take care of every detail — so you can focus on the people, moments and memories that matter.",
    brandPromise: {
      usp: "We're not just event decorators. We're your complete event partner.",
      signature: "Your Vision. Our Creativity. Complete Event Responsibility."
    },
    ctaPrimary: "PLAN YOUR EVENT",
    ctaSecondary: "VIEW OUR WORK",
    pillars: "Customised Décor • Complete Planning • Seamless Execution",
    locationsLine: "Nagercoil • Kanniyakumari • South Tamil Nadu & Beyond"
  },

  trust: {
    heading: "Trusted by People. Chosen by Brands.",
    description: "From personal celebrations to corporate and institutional events, we've had the opportunity to work with clients across different industries and event categories.",
    statement: "From personal celebrations to corporate and institutional events, we've had the opportunity to work with clients across different industries and event categories.",
    brands: [] as Array<{
      id: string;
      name: string;
      category: string;
      logoUrl?: string;
      permissionVerified: boolean;
    }>,
    industriesServed: [
      { name: "Life Events & Families", desc: "Weddings, milestone birthdays, baptisms & anniversaries" },
      { name: "Corporate & Enterprise", desc: "Brand launches, conferences, annual gatherings & activations" },
      { name: "Institutional & Medical", desc: "College festivals, graduation ceremonies & public events" },
      { name: "Retail & Brand Experiences", desc: "Exhibitions, expo stalls & experiential marketing" }
    ]
  },

  whatWeDo: {
    eyebrow: "OUR PROPOSITION",
    heading: "We're Not Just Event Decorators.",
    subheading: "We're Your Complete Event Partner.",
    intro: "An unforgettable event doesn't happen by chance.",
    body: "It takes thoughtful planning, creative ideas, the right people, precise coordination and flawless execution.\n\nAt Iragu Events, we bring all of this together under one roof.\n\nFrom your first idea to the final moment of your event, our team takes complete responsibility for planning, coordinating and executing every detail.",
    highlight: "You enjoy the moment. We take care of everything behind it."
  },

  customisedDecor: {
    heading: "Your Idea.\nYour Story.\nYour Celebration.",
    subheading: "Customised Décor Designed Around You",
    body: "We specialise in creating décor concepts that are uniquely yours.\n\nFrom elegant and minimal setups to grand, immersive experiences, every element is thoughtfully designed to match your celebration.\n\nTheme. Colours. Florals. Stage. Entrance. Photo zones. Details.\n\nYou tell us what you imagine. We'll create it.",
    cta: "DISCUSS YOUR DÉCOR IDEA"
  },

  eventCategories: {
    heading: "Everything Your Event Needs. Under One Roof.",
    categories: [
      {
        id: "life-events",
        title: "Life Events",
        subtitle: "Personal Milestones & Family Celebrations",
        description: "From intimate ceremonies to milestone moments, we manage the details that make life celebrations memorable.",
        itemsWithDesc: [
          {
            title: "Weddings",
            desc: "From intimate ceremonies to grand celebrations, we manage the details that make your wedding memorable."
          },
          {
            title: "Birthdays",
            desc: "Creative, personalised celebrations designed around the person you're celebrating."
          },
          {
            title: "Baptism & Baby Celebrations",
            desc: "Elegant and meaningful setups designed to celebrate life's precious milestones."
          },
          {
            title: "Engagements & Anniversaries",
            desc: "Beautiful experiences created around your story and relationship."
          },
          {
            title: "Family Celebrations",
            desc: "Because every family moment deserves to be celebrated."
          }
        ],
        items: [
          "Weddings",
          "Birthdays",
          "Baptism & Baby Celebrations",
          "Engagements & Anniversaries",
          "Family Celebrations"
        ]
      },
      {
        id: "corporate-events",
        title: "Corporate Events",
        subtitle: "Professional Brand & Team Gatherings",
        description: "Professional, engaging experiences designed for teams, leadership, and brands.",
        itemsWithDesc: [
          {
            title: "Brand Launches",
            desc: "Create a powerful first impression for your brand."
          },
          {
            title: "Corporate Gatherings",
            desc: "Professional, engaging experiences for your teams and stakeholders."
          },
          {
            title: "Conferences & Seminars",
            desc: "Complete planning and production support."
          },
          {
            title: "Annual Celebrations",
            desc: "Bring your team together with memorable experiences."
          },
          {
            title: "Product Launches",
            desc: "Turn your launch into an experience people remember."
          }
        ],
        items: [
          "Brand Launches",
          "Corporate Gatherings",
          "Conferences & Seminars",
          "Annual Celebrations",
          "Product Launches"
        ]
      },
      {
        id: "institutional-public",
        title: "Institutional & Public Events",
        subtitle: "Large Scale Coordination & Production",
        description: "From planning and production to on-ground execution, we are equipped to manage events of different scales.",
        itemsWithDesc: [],
        items: [
          "College & Institutional Events",
          "Medical & Graduation Events",
          "Government Events",
          "Public Events",
          "Political Events",
          "Large-Scale Celebrations"
        ]
      },
      {
        id: "brand-experiences",
        title: "Brand Experiences",
        subtitle: "High-Impact Marketing & Activations",
        description: "We help brands create experiences that attract attention, engage people and leave an impression.",
        itemsWithDesc: [],
        items: [
          "Exhibitions",
          "Expo Stalls",
          "Brand Activations",
          "Promotional Events",
          "Experiential Marketing"
        ]
      }
    ]
  },

  completeServices: {
    heading: "One Team. Every Detail.",
    subheading: "Why coordinate with multiple vendors when one team can take care of everything?",
    intro: "Iragu Events provides end-to-end event planning and management — giving you a single point of contact and complete event ownership.",
    services: [
      { name: "Planning & Coordination", desc: "Understanding your requirements and creating the complete execution plan." },
      { name: "Décor & Styling", desc: "Customised concepts designed specifically for your event." },
      { name: "Catering & Food", desc: "Menu planning, catering coordination and food arrangements." },
      { name: "Photography & Videography", desc: "Capturing the moments that matter." },
      { name: "Sound & Lighting", desc: "Professional production, sound, lighting and technical requirements." },
      { name: "Entertainment", desc: "DJ, artists, performances and entertainment arrangements." },
      { name: "Cake & Desserts", desc: "Curated cake and dessert arrangements." },
      { name: "Guest Management", desc: "Entries, seating, hospitality and guest experience." },
      { name: "Special Effects", desc: "Creating memorable moments through carefully planned effects." },
      { name: "Event-Day Execution", desc: "Our team manages the details on the ground so everything comes together seamlessly." }
    ],
    closing: "You don't need to coordinate multiple vendors.\nWe take complete responsibility for your entire event."
  },

  howWeWork: {
    heading: "From Your First Idea to the Final Celebration",
    subheading: "A clear, structured journey from your vision to flawless execution.",
    closing: "Simple for you. Detailed behind the scenes.",
    steps: [
      {
        step: "01",
        title: "TELL US YOUR VISION",
        description: "Share your idea, expectations, event details and what you have in mind."
      },
      {
        step: "02",
        title: "WE UNDERSTAND",
        description: "We understand your audience, venue, requirements, priorities and budget."
      },
      {
        step: "03",
        title: "WE CREATE",
        description: "Our team develops the concept, décor and complete event experience."
      },
      {
        step: "04",
        title: "WE PLAN",
        description: "We create the execution plan, coordinate vendors and prepare every detail."
      },
      {
        step: "05",
        title: "WE EXECUTE",
        description: "Our team takes complete responsibility on the event day."
      },
      {
        step: "06",
        title: "YOU CELEBRATE",
        description: "You enjoy your event with your family, friends, guests or customers."
      }
    ]
  },

  approach: {
    heading: "We Believe Events Should Feel Effortless.",
    subheading: "Behind every stress-free event is a team that has thought through the details.",
    intro: "We plan for:",
    questions: [
      {
        num: "01",
        question: "What needs to happen?",
        focus: "Scope, Requirements & Deliverables",
        icon: "ClipboardList"
      },
      {
        num: "02",
        question: "When should it happen?",
        focus: "Timeline, Schedules & Run of Show",
        icon: "Clock"
      },
      {
        num: "03",
        question: "Who needs to handle it?",
        focus: "Ownership, Roles & Coordination",
        icon: "UserCheck"
      },
      {
        num: "04",
        question: "What could go wrong?",
        focus: "Risk Mitigation, Backup & Contingency",
        icon: "ShieldAlert"
      },
      {
        num: "05",
        question: "How do we make it better?",
        focus: "Creative Elevation & Memory Making",
        icon: "Sparkles"
      }
    ],
    closingHead: "That's how we approach every event.",
    closingBody: "Because great events don't just happen. They're carefully planned, creatively designed and precisely executed."
  },

  whyIragu: {
    heading: "Why Choose Iragu Events?",
    subheading: "Built on trust, creativity, and end-to-end accountability.",
    differentiators: [
      {
        num: "01",
        title: "CUSTOMISED APPROACH",
        description: "Your event is designed around your vision — not a standard template.",
        tag: "Tailored For You"
      },
      {
        num: "02",
        title: "COMPLETE OWNERSHIP",
        description: "From planning to execution, we take responsibility for the entire experience.",
        tag: "End-to-End Responsibility"
      },
      {
        num: "03",
        title: "SINGLE POINT OF CONTACT",
        description: "One trusted team coordinating the different elements of your event.",
        tag: "One Trusted Team"
      },
      {
        num: "04",
        title: "CREATIVE THINKING",
        description: "We don't just execute ideas. We help turn them into experiences.",
        tag: "Experience Driven"
      },
      {
        num: "05",
        title: "ATTENTION TO DETAIL",
        description: "Because the smallest details often create the biggest impressions.",
        tag: "Micro-Precision"
      },
      {
        num: "06",
        title: "STRESS-FREE EXPERIENCE",
        description: "You enjoy the celebration. We handle the work behind it.",
        tag: "Peace of Mind"
      }
    ]
  },

  portfolio: {
    heading: "We Don't Just Talk About Events.\nWe Build Them.",
    description: "Every event teaches us something new. Every project has a story.\n\nExplore some of the celebrations, experiences and events we've planned, designed and executed.",
    filters: [
      "ALL",
      "WEDDINGS",
      "BIRTHDAYS",
      "BAPTISM",
      "CORPORATE",
      "INSTITUTIONAL",
      "PUBLIC",
      "BRAND ACTIVATIONS",
      "EXHIBITIONS"
    ],
    categories: [
      "Weddings",
      "Birthdays",
      "Baptism",
      "Corporate Events",
      "Institutional Events",
      "Public Events",
      "Brand Activations",
      "Exhibitions"
    ],
    projects: [
      {
        id: "magudam",
        name: "MAGUDAM '26",
        category: "INSTITUTIONAL",
        categoryDisplay: "Institutional Events",
        location: "Kanniyakumari Government Medical College",
        type: "Medical Graduation Event",
        description: "Complete event planning, grand stage & production, sound, lighting, and crowd management for 1300+ attendees.",
        guestCount: "1300+ Guests",
        servicesProvided: ["Complete Event Planning", "Décor", "Stage & Production", "Sound & Lighting"],
        image: "/images/img1.1.png",
        caseStudyLink: "#case-studies"
      },
      {
        id: "sp-grand-days",
        name: "2 Hours. One Massive Setup.",
        category: "BIRTHDAYS",
        categoryDisplay: "Birthdays",
        location: "SP Grand Days • Trivandrum",
        type: "Birthday Celebration",
        description: "A fast-turnaround celebration featuring pathway décor, grand baby entry, special effects, DJ setup, and complete event coordination in a strict 2-hour window.",
        guestCount: "Private Gathering",
        servicesProvided: ["Customised Décor", "Special Effects", "DJ Setup", "Cake Arrangement", "Complete Coordination"],
        image: "/images/img1.2.png",
        caseStudyLink: "#case-studies"
      }
    ]
  },



  caseStudies: {
    heading: "Behind Every Event Is a Story.",
    supportingLine: "The Challenge. The Plan. The Execution. The Result.",
    description: "At Iragu, we believe our work should speak for itself. That's why we don't just show you photographs. We show you how we think, plan and execute.",
    items: [
      {
        id: "sp-grand-days",
        title: "2 Hours. One Massive Birthday Setup.",
        location: "SP Grand Days, Trivandrum",
        event: "Birthday Celebration",
        timeframe: "Strict 2-Hour Setup Window",
        challenge: "A challenging event with limited setup time.",
        requirements: [
          "Birthday décor along the pathway",
          "Baby entry",
          "Special effects",
          "DJ setup",
          "Homemade cake arrangement",
          "Complete event coordination"
        ],
        plan: "Detailed pre-planning, component pre-fabrication, team coordination, and dedicated individual responsibilities planned in advance.",
        execution: "Our team executed seamlessly on the ground, mobilizing all production elements simultaneously within the strict 2-hour window.",
        result: "With detailed pre-planning, team coordination and precise execution, we successfully delivered the experience within the available timeframe.",
        closing: "Planning makes the difference. Execution makes the memory.",
        image: "/images/hero-bg.png"
      }
    ],
    cta: "VIEW CASE STUDY",
    secondaryCta: "DISCUSS YOUR EVENT"
  },

  about: {
    heading: "We Started With a Simple Belief.",
    subheading: "Events Should Be Enjoyed — Not Stressfully Managed.",
    body: "Planning an event can be overwhelming.\n\nMultiple vendors. Multiple phone calls. Multiple decisions. Tight timelines. Unexpected challenges.\n\nIragu Events was built to simplify that experience.\n\nWe bring planning, creativity, coordination and execution together under one roof — giving people and brands a trusted partner they can rely on.\n\nToday, we continue to build Iragu with one goal: To help people and brands create meaningful, memorable and stress-free events."
  },

  founder: {
    heading: "Meet the Founder",
    name: "Bezlon G",
    role: "Founder, Iragu Events",
    message: "For me, event management is not just about creating something beautiful. It's about taking responsibility.\n\nWhen a client trusts us with their event, they should feel confident that someone is taking care of everything.\n\nThat's the kind of event company I want Iragu to become.",
    paragraphs: [
      "For me, event management is not just about creating something beautiful. It's about taking responsibility.",
      "When a client trusts us with their event, they should feel confident that someone is taking care of everything.",
      "That's the kind of event company I want Iragu to become."
    ],
    closing: "Building Iragu, One Event at a Time.",
    cta: "CONNECT WITH BEZLON"
  },

  testimonials: {
    heading: "Don't Take Our Word For It.\nHear From Our Clients.",
    subheading: "Every event is different. But the trust our clients place in us is something we value across every project.",
    placeholder: "Awaiting genuine client reviews and verified event feedback.",
    cta: "SEE MORE CLIENT REVIEWS",
    reviews: [] as Array<{
      id: string;
      clientName: string;
      eventType: string;
      location: string;
      testimonial: string;
      clientPhoto?: string;
      permissionStatus: "verified" | "pending" | "published";
    }>
  },

  pricing: {
    heading: "Every Event Is Different. Your Quote Should Be Too.",
    content: "We specialise in customised event experiences, so our pricing depends on your requirements.",
    highlight: "Customised Décor Starts From ₹20,000",
    startingFromPrice: "₹20,000",
    startingFromLabel: "Customised Décor Starts From",
    factorsTitle: "Final quotation depends on:",
    factors: [
      "Venue",
      "Theme",
      "Setup size",
      "Décor elements",
      "Floral requirements",
      "Customisation",
      "Production requirements",
      "Additional event services"
    ],
    additionalContent: [
      "For complete event planning, packages are customised based on the scale and requirements of your event.",
      "Tell us what you're planning. We'll help you build the right experience for your budget."
    ],
    cta: "GET A CUSTOM QUOTE"
  },

  locations: {
    heading: "Creating Events Across South Tamil Nadu",
    /**
     * The component `Locations.tsx` expects a `subheading` field for a short
     * supporting line displayed beneath the main heading. Adding this field
     * resolves the TypeScript error `Property 'subheading' does not exist`.
     */
    subheading: "Based in Nagercoil, serving South Tamil Nadu and beyond",
    content: "Based in Nagercoil, Iragu Events works with clients across:",
    base: "Based in Nagercoil, Iragu Events works with clients across:",
    cities: [
      "Kanniyakumari",
      "Nagercoil",
      "Tirunelveli",
      "Tenkasi",
      "Madurai",
      "Trichy",
      "Pondicherry"
    ],
    primary: [
      "Kanniyakumari",
      "Nagercoil",
      "Tirunelveli",
      "Tenkasi",
      "Madurai",
      "Trichy",
      "Pondicherry"
    ],
    closing: "And wherever your event takes us.",
    additionalLine: "Your location isn't a limitation. Your idea is what matters.",
    secondary: "And wherever your event takes us. Your location isn't a limitation. Your idea is what matters."
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What types of events does Iragu Events manage?",
        answer: "We manage weddings, birthdays, baptisms, anniversaries, corporate events, institutional functions, exhibitions, brand activations, public events and large-scale celebrations."
      },
      {
        question: "Do you provide customised décor?",
        answer: "Yes. Customisation is one of our key strengths. We design décor based on your expectations, theme, venue, preferences and budget."
      },
      {
        question: "Do you provide complete event planning?",
        answer: "Yes. We can manage your event from planning and vendor coordination through to event-day execution."
      },
      {
        question: "Can Iragu coordinate multiple vendors?",
        answer: "Absolutely. We can coordinate décor, catering, photography, videography, sound, lighting, entertainment and other event requirements."
      },
      {
        question: "What is the starting price for decoration?",
        answer: "Our customised décor starts from ₹20,000. The final price depends on the venue, theme, décor elements, setup size and customisation."
      },
      {
        question: "Do you provide catering and photography?",
        answer: "Yes. These can be included as part of your complete event requirements."
      },
      {
        question: "How early should I book my event?",
        answer: "We recommend contacting us as early as possible, especially for weddings and large-scale events. However, we also handle short-lead-time events depending on availability."
      },
      {
        question: "Do you travel outside Nagercoil?",
        answer: "Yes. We take up events across South Tamil Nadu and beyond, depending on the project requirements."
      }
    ]
  },

  finalCta: {
    heading: "Planning Something Special?",
    mainHeading: "Tell Us Your Idea. We'll Take Care of the Rest.",
    description:
      "From a small family celebration to a large-scale event, our team is ready to plan, create and execute it with you.",
    cta: "START PLANNING"
  },

  cta: {
    heading: "Let's Create Something Special.",
    paragraphs: [
      "Planning an event? Have an idea you've been imagining? Or simply don't know where to start?",
      "Tell us about it.",
      "Our team will understand your requirements and help you plan the next step."
    ],
    ctas: {
      plan: "PLAN MY EVENT",
      call: "CALL US",
      whatsapp: "WHATSAPP US",
      email: "EMAIL US"
    },
    contactDetails: {
      brand: "Iragu Events",
      location: "Nagercoil, Tamil Nadu",
      phone: "90424 29868",
      phoneRaw: "+919042429868",
      email: "bezlon@iraguevents.com",
      website: "www.iraguevents.com",
      websiteUrl: "https://www.iraguevents.com",
      instagram: "@iraguevents",
      instagramUrl: "https://instagram.com/iraguevents",
      whatsappUrl: "https://wa.me/919042429868?text=Hello%20Iragu%20Events%2C%20I%20would%20like%20to%20plan%20an%20event."
    }
  },

  footer: {
    brandName: "IRAGU EVENTS",
    helpingText: "Helping People & Brands Create Stress-Free Events",
    tagline: "Complete Event Planning & Management",
    servicesLinks: [
      { label: "Weddings", href: "/events/weddings" },
      { label: "Birthdays", href: "/events/birthdays" },
      { label: "Corporate", href: "/events/corporate" },
      { label: "Public Events", href: "/events/public-events" },
      { label: "Customised Décor", href: "/events/customised-decor" },
    ],
    exploreLinks: [
      { label: "About", href: "/#about" },
      { label: "Our Work", href: "/#portfolio" },
      { label: "Case Studies", href: "/#case-studies" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/#contact" },
    ],
    contactInfo: {
      phone: "90424 29868",
      phoneRaw: "+919042429868",
      email: "bezlon@iraguevents.com",
      location: "Nagercoil, Tamil Nadu",
    },
    socialLinks: {
      instagram: {
        label: "Instagram",
        url: "https://instagram.com/iraguevents",
      },
      whatsapp: {
        label: "WhatsApp",
        url: "https://wa.me/919042429868?text=Hello%20Iragu%20Events%2C%20I%20would%20like%20to%20plan%20an%20event.",
      },
      linkedin: {
        label: "LinkedIn",
        url: null, // Note: Client document does not provide LinkedIn URL. Do not invent one.
      },
    },
    brandStatement: "Your Vision. Our Creativity. Complete Event Responsibility.",
    copyright: "© 2026 Iragu Events. All Rights Reserved.",
    signature: "Your Vision. Our Creativity. Complete Event Responsibility.",
    contactForm: {
      title: "Let's Plan Your Event",
      subtitle: "Tell us about your event and our team will understand your requirements to help you plan the next step.",
      eventTypes: [
        "Wedding",
        "Birthday",
        "Baptism",
        "Anniversary",
        "Corporate Event",
        "Institutional Event",
        "Exhibition",
        "Brand Activation",
        "Public Event",
        "Other"
      ],
      services: [
        "Customised Décor",
        "Complete Event Planning",
        "Catering",
        "Photography",
        "Videography",
        "Sound & Lighting",
        "Entertainment",
        "Other"
      ],
      budgets: [
        "₹20K–₹50K",
        "₹50K–₹1 Lakh",
        "₹1–3 Lakhs",
        "₹3 Lakhs+",
        "Not Decided"
      ]
    }
  }
};
