export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    dropdown: [
      { name: "Who We Are", path: "/about#who-we-are" },
      { name: "Our Beliefs", path: "/about#our-beliefs" },
      { name: "Our Activities", path: "/about#our-activities" },
      { name: "Leadership", path: "/about#leadership" },
    ],
  },
  {
    name: "News",
    dropdown: [{ name: "News & Updates", path: "/news-updates" }],
  },
  {
    name: "More",
    dropdown: [
      { name: "Missions", path: "/more#missions" },
      { name: "Education", path: "/more#education" },
      { name: "Prayer Department", path: "/more#prayer-department" },
      { name: "Partner With Us", path: "/more#partner-with-us" },
      { name: "Support the Ministry", path: "/more#support-the-ministry" },
      { name: "Testimonies", path: "/more#testimonies" },
      { name: "Gallery", path: "/more#gallery" },
      { name: "Contact Us", path: "/more#contact-us" },
    ],
  },
] as const;
