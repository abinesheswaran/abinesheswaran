import ExperienceCard from "../../components/experience-card";
import PageWrapper from "../../components/page-wrapper";
import { EXPERIENCE_LIST } from "../../constants";
import { ReactComponent as ExperienceSvg } from "../../svg/experience.svg";

const Experience = () => {
  return (
    <PageWrapper
      title={"EXPERIENCE"}
      svg={<ExperienceSvg />}
      svgRight={true}
      pageId={"experience"}
    >
      <>
        {EXPERIENCE_LIST.map((exp, key) => (
          <ExperienceCard experience={exp} key={key} />
        ))}
      </>
    </PageWrapper>
  );
};
export default Experience;
