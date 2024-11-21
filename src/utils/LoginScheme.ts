import { z } from "zod";

export const LoginScheme = z.object({
    email: z.string()
        .email({ message: "Insira um endereço de email válido." })
        .min(1, { message: "* Email é obrigatório." }),

    password: z.string()
        .min(1, { message: "* Senha é obrigatória." })
        .min(8, { message: "A senha deve ter pelo menos 8 caracteres." })
        .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula." })
        .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula." })
        .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número." })
        .regex(/[\W_]/, { message: "A senha deve conter pelo menos um caractere especial." })
});