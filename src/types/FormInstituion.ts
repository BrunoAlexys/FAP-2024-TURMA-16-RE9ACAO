import { z } from "zod";
import { InstituionScheme } from "../utils/InstitutionScheme";

export type FormInstituion = z.infer<typeof InstituionScheme>;