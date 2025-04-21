import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export const heroContent = {
  announcement: {
    text: "Announcing our next round of funding.",
    link: { label: "Read more", href: "#" },
  },
  headline: "Data to enrich your online business",
  subheadline:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  cta: { label: "Get Started", href: "#" },
  secondaryCta: { label: "Learn More", href: "#" },
  topRightLink: { label: "Get Started", href: "/contact" }, // new
};

export const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export const servicesSection = {
  title: "What We Offer",
  subtitle:
    "High-impact web design solutions built for service-based businesses.",
};

export const services = [
  {
    title: "Custom Web Design",
    description:
      "Mobile-first, responsive websites crafted for service-based businesses. Built to impress and convert.",
    icon: "LuLayoutDashboard",
  },
  {
    title: "SEO Optimization",
    description:
      "We implement best practices to help your site rank on Google and attract organic traffic.",
    icon: "LuSearch",
  },
  {
    title: "Lead Funnels & Booking Systems",
    description:
      "Integrated funnels, contact forms, and booking tools that streamline client communication.",
    icon: "LuMousePointerClick",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing updates, backups, and performance improvements so your site runs smoothly year-round.",
    icon: "LuSettings",
  },
];
