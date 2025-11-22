export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    dropdown: [
        { name: "About Us", path: "/about-us" },
      { name: "Our Story", path: "/our-story" },
      { name: "Partnerships", path: "/partnerships" },
      { name: "Leadership", path: "/leadership" },
      { name: "Faculty", path: "/faculty" },
      { name: "Accreditation", path: "/accreditation" },
    ],
  },
  {
    name: "Academics",
    dropdown: [
      { name: "Department & Courses", path: "/department-courses" },
      { name: "Policies", path: "/policies" },
      { name: "Downloadable Brochure", path: "/downloadable-brochure" },
      { name: "Academic Calendar", path: "/academic-calendar" },
    ],
  },
  {
    name: "Admissions",
    dropdown: [
      { name: "Admission Process", path: "/admission-process" },
      { name: "Online Application Form", path: "/online-application" },
      { name: "Requirements", path: "/requirements" },
      { name: "Deadlines", path: "/deadlines" },
      { name: "Admission Guide (PDF)", path: "/admission-guide" },
    ],
  },
  {
    name: "News",
    dropdown: [
      { name: "News & Updates", path: "/news-updates" },
      { name: "Announcements", path: "/announcements" },
      { name: "Blog", path: "/blog" },
      { name: "Press Releases", path: "/press-releases" },
    ],
  },
  {
    name: "Student Portal",
    dropdown: [
      { name: "Student Portal Login", path: "/student/portal/login" },
      { name: "Pay School Fees", path: "/student/portal/pay-school-fees" },
      { name: "Student Life", path: "/student/portal/student-life" },
    ],
  },
  {
    name: "More",
    dropdown: [
      { name: "Online Giving (Tithe & Offering)", path: "/online-giving" },
      { name: "Testimonies", path: "/testimonies" },
      { name: "Gallery", path: "/gallery" },
      { name: "Download Center", path: "/download-center" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
] as const;
