import AdmissionApplication from "../components/admission_application/admission_application"
import AdmissionHero from "../components/admission_hero"
import AdmissionProcess from "../components/admission_process"
import AdmissionRequirement from "../components/admission_requirement"
import ProgramsSection from "../components/program"

const AdmissionView = () => {
  return (
    <section>
        <AdmissionHero />
        <AdmissionProcess />
        <AdmissionRequirement />
        <ProgramsSection />
        <AdmissionApplication />
    </section>
  )
}

export default AdmissionView
