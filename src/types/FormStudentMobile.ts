import { z } from "zod";
import { StudentSchemaMobile } from "../utils/StudentSchemeMobile";

export type FormStudentMobile = z.infer<typeof StudentSchemaMobile>;