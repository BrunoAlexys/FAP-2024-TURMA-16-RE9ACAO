import { z } from "zod";
import { LoginScheme } from "../utils/LoginScheme";

export type FormLogin = z.infer<typeof LoginScheme>;