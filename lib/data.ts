
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
