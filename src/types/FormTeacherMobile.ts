import { z } from "zod";
import { TeacherSchemeMobile } from "../utils/TeacherSchemeMobile";

export type FormTeacherMobile = z.infer<typeof TeacherSchemeMobile>;