import { Bot, CircuitBoard, Component, PackageOpen } from "lucide-react";

export const siteConfig = {
    company: "SLV Fab Tech",
    tagline: "Expertise and Innovation in Fabrication Technology",
    email: "suresh@slvfabtech.com",
    phone: "+91 8618586276",
    foundedYear: 2019,
    employeeCount: 25,
    factoryArea: "4,700 sq ft",
    certification: "ISO 9001:2015",
    units: [
        {
            label: "Unit 1",
            address: "#14, 3rd Cross, Doddanna Industrial Estate, Hegganahalli, Bengaluru – 560091",
        },
        {
            label: "Unit 2",
            address: "#6/887, Thigalarapalya Main Road, 3rd Stage, Peenya, Bengaluru – 560058",
        },
    ],
    socialLinks: {
        linkedin: "",
        instagram: "",
        whatsapp: "https://wa.me/918618586276",
    },
};

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export const heroData = {
    headline: "Precision Sheet Metal\nFabrication",
    subheadline: "ISO 9001:2015 certified — laser cutting, bending, welding, and assembly for industrial applications.",
    ctaPrimary: { label: "View Our Work", href: "/projects" },
    ctaSecondary: { label: "Get a Quote", href: "/contact" },
    backgroundImage: "/assets/hero-bg.jpg",
    stats: [
        { value: "2019", label: "Established" },
        { value: "4,700", label: "Sq Ft Factory Area" },
        { value: "25+", label: "Skilled Personnel" },
        { value: "ISO", label: "9001:2015 Certified" },
    ],
};

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;           // Lucide icon name
    specs: string[];        // Machine specs / capability bullets
    imageUrl?: string;
}

export const services: Service[] = [
    {
        id: "laser-cutting",
        title: "Laser Cutting",
        description: "High-precision profiling with consistent edge quality for complex geometries and tight tolerances. Bed size: 1500 × 3000 mm.",
        icon: "Zap",
        specs: [
            "Mild Steel — up to 16 mm",
            "Stainless Steel — up to 8 mm",
            "Aluminium — up to 5 mm",
            "Bed size: 1500 × 3000 mm",
        ],
    },
    {
        id: "bending",
        title: "Sheet Metal Bending",
        description: "CNC press brake bending for accurate angles and repeatable results across complex profiles.",
        icon: "GitBranch",
        specs: [
            "160 Ton capacity",
            "Bending length: 3000 mm",
            "MS — up to 6 mm",
            "SS — up to 4 mm",
            "Aluminium — up to 6 mm",
            "Brass — up to 4 mm",
        ],
    },
    {
        id: "welding",
        title: "Welding Services",
        description: "TIG, MIG, and Laser welding for strong, precise joints across a range of materials and thicknesses.",
        icon: "Flame",
        specs: [
            "TIG Welding",
            "MIG Welding",
            "Laser Welding",
        ],
    },
    {
        id: "riveting",
        title: "Riveting",
        description: "Hydraulic riveting for strong, reliable joints with consistent quality across various materials.",
        icon: "Layers",
        specs: [
            "6 Ton capacity",
            "Clinch Nut: M3 to M8",
            "Clinch Standoff: M3 to M6",
            "Clinch Stud: M3 to M8",
            "Sheet thickness (upper): 0.8 mm",
            "MS: 0.8 mm – 3 mm",
            "SS: 0.8 mm – 2 mm",
            "Aluminium: 1 mm – 4 mm",
        ],
    },
    {
        id: "assembly",
        title: "Assembly",
        description: "Complete assembly services combining fabricated components into finished sub-assemblies or end products.",
        icon: "Settings2",
        specs: [
            "Sub-assembly & full assembly",
            "Integrated with fabrication workflow",
            "Reduces vendor touchpoints",
            "Consistent quality end-to-end",
        ],
    },
    {
        id: "sheet-metal-fabrication",
        title: "Sheet Metal Fabrication",
        description: "End-to-end sheet metal fabrication — from raw material to finished component — for diverse industrial applications.",
        icon: "Box",
        specs: [
            "Custom profiles and enclosures",
            "Electrical panels & cabinets",
            "Automation component housings",
            "Packaging machine parts",
        ],
    },
];

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

export const projects: Project[] = [
    // Add real project photos from slides 11–13 of the company profile
    // Image files go in: public/assets/projects/
    {
        id: "project-1",
        title: "Sheet Metal Enclosure",
        category: "Sheet Metal Fabrication",
        description: "Precision fabricated enclosures for industrial use.",
        imageUrl: "/assets/projects/project-1.jpg",
        tags: ["Sheet Metal", "Enclosure"],
    },
];

export const whyUsPoints = [
    {
        icon: "ShieldCheck",
        title: "ISO 9001:2015 Certified",
        description: "Structured Quality Management System ensuring consistent quality, traceability, and continual improvement.",
    },
    {
        icon: "Layers",
        title: "All Services Under One Roof",
        description: "Laser cutting, bending, welding, riveting, and assembly — no multi-vendor coordination, faster lead times.",
    },
    {
        icon: "Users",
        title: "25+ Skilled Personnel",
        description: "Trained operators, certified welders, and supervisors delivering precision at every production stage.",
    },
    {
        icon: "Building2",
        title: "Two Factory Units",
        description: "4,700 sq ft of combined workspace in key Bengaluru industrial areas — Hegganahalli and Peenya.",
    },
    {
        icon: "CheckCircle",
        title: "Proactive Quality Control",
        description: "Customer requirements reviewed pre-production. In-process and final inspections prevent defects.",
    },
    {
        icon: "Handshake",
        title: "Customer-Focused Service",
        description: "Responsive communication and relationship-based service for quick clarifications and long-term partnerships.",
    },
];

export const sectorsServed = [
    { label: "Electrical", icon: "Zap" },
    { label: "Automation", icon: "Settings2" },
    { label: "Packaging", icon: "Package" },
    { label: "Industrial", icon: "Factory" },
];

export const certifications = [
    { name: "ISO 9001:2015", imageUrl: "/assets/certs/iso.png" },
    { name: "GST Registered", imageUrl: "/assets/certs/gst.png" },
];

// Newwwwwwwww

export const homeData = {
    headline: "Precision Sheet Metal Fabrication, Built to Last",
    subHeading: "ISO 9001:2015 Certified | Bengaluru's Trusted Fabrication Partner Since 2019",
    desc: "From laser cutting to complete assembly, SLV Fab Tech delivers high-precision sheet metal solutions for electrical, automation, and packaging industries. Accuracy you can measure. Quality you can trust.",
    stats: [
        { value: "2019", label: "Established" },
        { value: "4,700", label: "Sq Ft Factory Area" },
        { value: "25+", label: "Skilled Personnel" },
        { value: "ISO", label: "9001:2015 Certified" },
    ],
    whatWeDo: [
        {
            title: "Precision Laser Cutting",
            desc: "High-precision fiber laser cutting across Mild Steel, Stainless Steel, and Aluminium — up to a 1500×3000 mm bed size with tight tolerances.",
            img: "/assets/laser.png"
        },
        {
            title: "Bending & Welding",
            desc: "CNC press brake bending up to 3000 mm length with 160-ton capacity, paired with TIG, MIG, and laser welding services.",
            img: "/assets/welding.png"
        },
        {
            title: "Assembly & Riveting",
            desc: "End-to-end fabrication including hydraulic riveting and full product assembly — delivered as a complete, ready-to-use solution.",
            img: "/assets/assemble.png"
        }
    ],
    industriesWeServe: [
        {
            title: "Electrical & Control Panels",
            icon: CircuitBoard,
        },
        {
            title: "Industrial Automation",
            icon: Bot
        },
        {
            title: "Packaging Machinery",
            icon: PackageOpen
        },
        {
            title: "Precision Engineering Components",
            icon: Component
        }
    ]
}

export const aboutData = {
    pageTitle: "About SLV Fab Tech",

    whoWeAre: {
        description:
            "SLV Fab Tech is an ISO 9001:2015 certified sheet metal fabrication company founded in 2019 and headquartered in Bengaluru, Karnataka. We specialize in precision laser cutting, bending, welding, riveting, and complete assembly — serving the electrical, automation, and packaging industries across the region.",
        note:
            "We operate under direct proprietor supervision, ensuring every order gets personal attention, accountability, and a commitment to quality that larger facilities can't always offer."
    },

    facilities: [
        {
            unit: "Unit 1 — Hegganahalli",
            address:
                "#14, 3rd Cross, Doddanna Industrial Estate, Hegganahalli, Bengaluru – 560091",
            type: "Administrative and fabrication hub"
        },
        {
            unit: "Unit 2 — Peenya",
            address:
                "#6/887, Thigalarapalya Main Road, 3rd Stage, Peenya, Bengaluru – 560058",
            type: "Primary fabrication and production floor"
        }
    ],

    infrastructure: "Combined area of 4,700 sq. ft. — equipped for laser cutting, welding, bending, assembly, and material storage.",

    team: {
        strength: "25+",
        description:
            "A dedicated workforce of skilled personnel including CNC operators, certified welders, quality supervisors, and assembly technicians working in sync to meet project timelines without compromising precision."
    },

    qualityCommitment: {
        isoCertified: "ISO 9001:2015",
        systemDescription:
            "Our Quality Management System governs every step from order review to final delivery. Documented processes, material traceability, and in-process inspection checkpoints ensure that every part leaving our facility meets specification.",
        statutoryCompliance:
            "Valid GST registration and full statutory compliance support transparent, auditable commercial transactions.",
        image: ""
    },

    values: [
        {
            name: "Precision",
            description:
                "Every cut, bend, and weld is measured against spec — not approximated."
        },
        {
            name: "Accountability",
            description:
                "Proprietor-led operations mean decisions happen fast and responsibility is clear."
        },
        {
            name: "Reliability",
            description:
                "Consistent quality, on-time delivery, and honest communication on every order."
        },
        {
            name: "Improvement",
            description:
                "We follow ISO discipline and continuously refine our processes to serve clients better."
        }
    ]
};

export const contactPage = {
    pageTitle: "Get in Touch",

    intro:
        "Whether you have drawings ready or just an idea — we're happy to discuss your fabrication requirements. Reach out via the form, call us, or visit either of our Bengaluru facilities.",

    contactDetails: {
        email: "suresh@slvfabtech.com",
        phone: "+91 86185 86276",

        locations: [
            {
                name: "Unit 1",
                location: "Hegganahalli",
                address:
                    "#14, 3rd Cross, Doddanna Industrial Estate, Hegganahalli, Bengaluru – 560091"
            },
            {
                name: "Unit 2",
                location: "Peenya",
                address:
                    "#6/887, Thigalarapalya Main Road, 3rd Stage, Peenya, Bengaluru – 560058"
            }
        ]
    },

    contactForm: {
        title: "Send an Enquiry",
        submitButton: "Send Enquiry",

        fields: [
            {
                name: "fullName",
                label: "Full Name",
                type: "text",
                required: true
            },
            {
                name: "companyName",
                label: "Company Name",
                type: "text",
                required: false
            },
            {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
            },
            {
                name: "email",
                label: "Email Address",
                type: "email",
                required: true
            },
            {
                name: "serviceRequired",
                label: "Service Required",
                type: "select",
                required: false,
                options: [
                    "Laser Cutting",
                    "Bending",
                    "Welding",
                    "Riveting",
                    "Assembly",
                    "Other"
                ]
            },
            {
                name: "message",
                label: "Message / Project Details",
                type: "textarea",
                required: true
            }
        ],

        emailConfig: {
            provider: "Nodemailer",
            recipient: "suresh@slvfabtech.com"
        }
    },

    mapSection: {
        title: "Our Locations",
        locations: [
            {
                name: "Unit 1 — Hegganahalli",
                address:
                    "#14, 3rd Cross, Doddanna Industrial Estate, Hegganahalli, Bengaluru – 560091",
                mapEmbedUrl: ""
            },
            {
                name: "Unit 2 — Peenya",
                address:
                    "#6/887, Thigalarapalya Main Road, 3rd Stage, Peenya, Bengaluru – 560058",
                mapEmbedUrl: ""
            }
        ]
    }
};