import AboutHero from "../components/about_hero"
import AboutUs from "../components/about_us"
import AccreditationCards from "../components/accreditation"
import Download from "../components/downlaod"
import LeadershipTeam from "../components/leadership_team/leadership_team"
import WhatDrivesUs from "../components/what_drives_us"

const AboutView = () => {
  return (
    <section>
        <AboutHero />
        <AboutUs />
        <WhatDrivesUs />
        <AccreditationCards />
        <LeadershipTeam />
        <Download />
    </section>
  )
}

export default AboutView
