import { z } from "zod";

export const CreateProjectScheme = z.object({
    name: z.string()
        .min(1, { message: '* Título é obrigatório' }),
    description: z.string()
        .min(1, { message: '* A descrição é obrigatória' })
        .max(300, { message: 'Máximo 300 caracteres' }),
    tipo: z.number()
})