import { z } from "zod";
import { StudentScheme } from "../utils/StudentScheme";

export type FormStudent = z.infer<typeof StudentScheme>;