import { SkillType } from "./SkillType";

export class User {
  userId: string;
  name: string;
  phone: string;
  mail: string;
  introduction: string;
  skillTypeArr: SkillType[];
}
