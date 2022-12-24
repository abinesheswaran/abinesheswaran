import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import PageWrapper from "../../components/page-wrapper";
import SkillLevel from "../../components/skill-level";
import { SKILL_LIST } from "../../constants";
import { ReactComponent as SkillsSvg } from "../../svg/skills.svg";

const Skills = () => {
  return (
    <PageWrapper title={"SKILLS"} svg={<SkillsSvg />} pageId={"skills"}>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table aria-label="simple table">
          <TableBody>
            {SKILL_LIST.map((skill, key) => (
              <TableRow key={key}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ border: "none", width: "30%" }}
                >
                  <Chip label={skill.title} />
                </TableCell>
                <TableCell component="th" scope="row" sx={{ border: "none" }}>
                  <SkillLevel variant="determinate" value={skill.rating} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  );
};

export default Skills;
