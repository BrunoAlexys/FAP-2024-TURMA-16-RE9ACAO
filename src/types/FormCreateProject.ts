import { z } from "zod";
import { CreateProjectScheme } from "../utils/CreateProjectScheme";

export type FormCreateProject = z.infer<typeof CreateProjectScheme>