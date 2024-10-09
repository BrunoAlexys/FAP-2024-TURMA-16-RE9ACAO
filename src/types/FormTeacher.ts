import { z } from "zod";
import { TeacherScheme } from "../utils/TeacherScheme";

export type FormTeacher = z.infer<typeof TeacherScheme>;