import Missions from "../components/missions";
import Education from "../components/education";
import PrayerDepartment from "../components/prayer_department";
import PartnerWithUs from "../components/partner_with_us";
import SupportMinistry from "../components/support_ministry";
import CommunityTestimonies from "../components/community_testimonies";
import MediaGallery from "../components/media_gallary";
import GetInTouch from "../components/get_in_touch";

const MoreView = () => {
  return (
    <section>
      <div id="missions">
        <Missions />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="prayer-department">
        <PrayerDepartment />
      </div>

      <div id="partner-with-us">
        <PartnerWithUs />
      </div>

      <div id="support-the-ministry">
        <SupportMinistry />
      </div>

      <div id="testimonies">
        <CommunityTestimonies />
      </div>

      <div id="gallery">
        <MediaGallery />
      </div>

      <div id="contact-us">
        <GetInTouch />
      </div>
    </section>
  );
};

export default MoreView;
