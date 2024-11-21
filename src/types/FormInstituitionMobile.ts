import { InstitutionSchemaMobile } from '../utils/InstitutionSchemeMobile';
import { z } from "zod";

export type FormInstitutionMobile = z.infer<typeof InstitutionSchemaMobile>;