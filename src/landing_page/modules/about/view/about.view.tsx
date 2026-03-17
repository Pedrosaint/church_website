import AboutHero from "../components/about_hero"
import OurBeliefs from "../components/about_us"
import OurActivities from "../components/what_drives_us"
import LeadershipTeam from "../components/leadership_team/leadership_team"

const AboutView = () => {
  return (
    <section>
      <div id="who-we-are">
        <AboutHero />
      </div>

      <div id="our-beliefs">
        <OurBeliefs />
      </div>

      <div id="our-activities">
        <OurActivities />
      </div>

      <div id="leadership">
        <LeadershipTeam />
      </div>
    </section>
  );
}

export default AboutView
