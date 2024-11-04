import { z } from "zod";
import { CompanySchemeMobile } from "../utils/CompanySchemeMobile";

export type FormCompanyMobile = z.infer<typeof CompanySchemeMobile>;