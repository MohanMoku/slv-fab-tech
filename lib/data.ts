import { Bot, CircuitBoard, Component, Spline } from "lucide-react";

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
            title: "Laser Cutting",
            desc: "High-precision fiber laser cutting across Mild Steel, Stainless Steel, and Aluminium — up to a 1500×3000 mm bed size with tight tolerances.",
            img: "/assets/laser.png"
        },
        {
            title: "Bending & Welding",
            desc: "CNC press brake bending up to 3000 mm length with 160-ton capacity, paired with TIG, MIG, and laser welding services.",
            img: "/assets/bending.png"
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
            title: "Pipeline Services",
            icon: Spline
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
            "SLV Fab Tech is an ISO 9001:2015 certified sheet metal fabrication company founded in 2019 and headquartered in Bengaluru, Karnataka. We specialize in laser cutting, bending, welding, riveting, and complete assembly — serving the electrical, automation, and packaging industries across the region.",
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

export const servicesPage = {
    pageTitle: "Our Services & Capabilities",

    intro:
        "We offer a complete range of sheet metal fabrication services — from raw material to finished assembly — all under one roof. Every service follows ISO 9001:2015 process controls.",

    services: [
        {
            id: "laser-cutting",
            title: "Laser Cutting",
            description:
                "SLV FAB TECH delivers precision fiber laser cutting with controlled manufacturing processes, ensuring high dimensional accuracy, consistent cut quality, and reliable performance across a wide range of materials.",

            specifications: {
                MildSteel: "up to 16 mm",
                StainlessSteel: "up to 8 mm",
                Aluminium: "up to 5 mm",
                ProcessControl: "ISO 9001:2015 compliant",
                QualityChecks: "Inspection checkpoints and material identification",
                OperatorMonitoring: "Continuous monitoring of cut quality, dimensional accuracy, and surface condition",
                OperatorTraining: "Trained operators ensure precision and process consistency"
            },
            imgUri: "/assets/my-laser.png"
        },

        {
            id: "sheet-metal-bending",
            title: "CNC Press Brake Bending",
            description:
                "Accurate angle bending and complex profile forming using a CNC press brake with 160-ton capacity and a 3000 mm bending length. Delivers repeatable, high-precision bends across Mild Steel, Stainless Steel, Aluminum, and Brass for a wide range of fabrication requirements.",

            specifications: {
                Capacity: "160 Ton",
                BendingLength: "3000 mm",
                MildSteel: "up to 6 mm",
                StainlessSteel: "up to 4 mm",
                Aluminium: "up to 6 mm",
                Brass: "up to 4 mm"
            },
            imgUri: "/assets/my-bending.png",
        },

        {
            id: "riveting",
            title: "Hydraulic Riveting",
            description:
                "Strong, reliable clinch joints with consistent quality. Suitable for a range of material types and thicknesses with fast cycle times for production efficiency.",

            specifications: {
                capacity: "6 Ton",

                rivetingRange: {
                    ClinchNut: "M3 to M8",
                    ClinchStandoff: "M3 to M6",
                    ClinchStud: "M3 to M8"
                },

                RivetingSheetThickness: "Upper 0.8 mm",

                Material: {
                    MildSteel: "0.8 mm to 3 mm",
                    StainlessSteel: "0.8 mm to 2 mm",
                    Aluminium: "1 mm to 4 mm"
                }
            },
            imgUri: "/assets/my-riveting.png",
        },

        {
            id: "welding",
            title: "TIG, MIG & Laser Welding",
            description:
                "Expert welding across all common industrial processes. TIG for precision and aesthetics, MIG for speed and strength, laser welding for heat-sensitive or fine-tolerance joints.",

            processes: [
                "Tungsten Inert Gas (TIG) Welding",
                "Metal Inert Gas (MIG) Welding",
                "Laser Welding"
            ],
            imgUri: "/assets/my-welding.png",
        },

        {
            id: "assembly",
            title: "Complete Product Assembly",
            description:
                "End-to-end assembly combining fabricated components into finished sub-assemblies or full products. Reduces your vendor count and ensures consistent fit and function.",
            imgUri: "/assets/assemble.png",
        }
    ],

    callout: {
        title: "Why One-Stop Fabrication Matters",
        description:
            "When cutting, bending, welding, and assembly happen in the same facility under the same quality system, lead times shrink, coordination errors disappear, and you always know who's accountable."
    }
};

export const projectPage = {
    title: "Our Work",
    intro: "A selection of fabricated components, assemblies, and precision parts produced at our Bengaluru facilities. Every project reflects our commitment to tight tolerances and clean finishes.",
    projects: [
        {
            id: 1,
            title: "Laser Cutting",
            description:
                "High-accuracy fiber laser cutting for complex profiles with smooth edge quality and minimal material waste.",
            images: [
                "/assets/db/image1.png",
                "/assets/db/image11.png",
                "/assets/db/image21.png",
            ],
        },
        {
            id: 2,
            title: "CNC Press Brake Bending",
            description:
                "Accurate angle bending with repeatable results for mild steel, stainless steel, aluminum, and brass.",
            images: [
                "/assets/db/image3.png",
                "/assets/db/image2.png",
                "/assets/db/image12.png",
                "/assets/db/image13.png",
            ],
        },
        {
            id: 3,
            title: "Welding & Fabrication",
            description:
                "Strong and precise welding solutions for structural and industrial fabrication requirements.",
            images: [
                "/assets/db/image5.png",
                "/assets/db/image6.png",
                "/assets/db/image7.png",
                "/assets/db/image8.png",
                "/assets/db/image10.png",
            ],
        },
        {
            id: 4,
            title: "Sheet Metal Forming",
            description:
                "Advanced sheet metal forming with high dimensional accuracy and smooth finishing.",
            images: [
                "/assets/db/image9.png",
                "/assets/db/image19.png",
                "/assets/db/image14.png",
                "/assets/db/image17.png",
            ],
        },
        {
            id: 5,
            title: "Industrial Fabrication",
            description:
                "End-to-end fabrication solutions for industrial components with strict quality control standards.",
            images: [
                "/assets/db/image20.png",
                "/assets/db/image16.png",
                "/assets/db/image15.png",
                "/assets/db/image19.png",
            ],
        }
    ],
    cta: {
        heading: "Have a project in mind?",
        subtext: "Send us your drawings or specifications and we'll get back to you with a quote within 24 hours",
    }

}

export const gallery = [
    {
        id: "1",
        img: "/assets/db/image1.png",
        height: 400,
    },
    {
        id: "2",
        img: "/assets/db/image2.png",
        height: 500,
    },
    {
        id: "3",
        img: "/assets/db/image3.png",
        height: 300,
    },
    {
        id: "4",
        img: "/assets/db/image4.png",
        height: 450,
    },
    {
        id: "5",
        img: "/assets/db/image5.png",
        height: 350,
    },
    {
        id: "6",
        img: "/assets/db/image6.png",
        height: 520,
    },
    {
        id: "7",
        img: "/assets/db/image7.png",
        height: 380,
    },
    {
        id: "8",
        img: "/assets/db/image8.png",
        height: 610,
    },
    {
        id: "9",
        img: "/assets/db/image9.png",
        height: 420,
    },
    {
        id: "10",
        img: "/assets/db/image10.png",
        height: 480,
    },
    {
        id: "11",
        img: "/assets/db/image11.png",
        height: 330,
    },
    {
        id: "12",
        img: "/assets/db/image12.png",
        height: 560,
    },
    {
        id: "13",
        img: "/assets/db/image13.png",
        height: 410,
    },
    {
        id: "14",
        img: "/assets/db/image14.png",
        height: 470,
    },
    {
        id: "15",
        img: "/assets/db/image15.png",
        height: 390,
    },
    {
        id: "16",
        img: "/assets/db/image16.png",
        height: 530,
    },
    {
        id: "17",
        img: "/assets/db/image17.png",
        height: 360,
    },
    {
        id: "18",
        img: "/assets/db/image18.png",
        height: 600,
    },
    {
        id: "19",
        img: "/assets/db/image19.png",
        height: 440,
    },
    {
        id: "20",
        img: "/assets/db/image20.png",
        height: 510,
    },
    {
        id: "21",
        img: "/assets/db/image21.png",
        height: 510,
    },
    {
        id: "22",
        img: "/assets/db/image22.png",
        height: 510,
    },
    {
        id: "23",
        img: "/assets/db/image23.png",
        height: 510,
    },
    
];

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
                    "#14, 3rd Cross, Doddanna Industrial Estate, Hegganahalli, Bengaluru – 560091",
                uri: "google.com/maps"
            },
            {
                name: "Unit 2",
                location: "Peenya",
                address:
                    "#6/887, Thigalarapalya Main Road, 3rd Stage, Peenya, Bengaluru – 560058",
                uri: "google.com/maps"
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
    }
};