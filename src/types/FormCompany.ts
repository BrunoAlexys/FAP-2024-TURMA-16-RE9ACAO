import { z } from "zod";
import { CompanyScheme } from "../utils/CompanyScheme";

export type FormCompany = z.infer<typeof CompanyScheme>;