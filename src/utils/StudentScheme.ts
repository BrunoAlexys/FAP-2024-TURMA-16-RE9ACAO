import { z } from "zod";

export const StudentScheme = z.object({
    name: z.string()
        .min(1, { message: "* Nome é obrigatório." })
        .min(3, { message: "O nome deve ter pelo menos 3 caracteres." })
        .max(50, { message: "O nome não pode ter mais de 50 caracteres." })
        .regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: "O nome deve conter apenas letras." }),

    cpf: z
        .string()
        .transform((val) => val.replace(/\D/g, "")) // Remove todos os caracteres que não são dígitos
        .refine((val) => /^\d{11}$/.test(val), { message: "* CPF é obrigatório" }),


    email: z.string()
        .email({ message: "Insira um endereço de email válido." })
        .min(1, { message: "* Email é obrigatório." }),

    confirmEmail: z.string()
        .min(1, { message: "* Confirmação de email é obrigatória." }),

    phone: z.string()
        .min(1, { message: "* Telefone é obrigatório." })
        .regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: "O telefone deve estar no formato (XX) XXXXX-XXXX." }),

    uf: z.string()
        .length(2, { message: "* UF é obrigatória." })
        .regex(/^[A-Z]{2}$/, { message: "A UF deve conter apenas letras maiúsculas." }),

    cep: z.string()
        .transform((val) => val.replace(/\D/g, "")) // Remove todos os caracteres que não são dígitos
        .refine((val) => /^\d{8}$/.test(val), { message: "O CEP deve conter exatamente 8 dígitos numéricos." }),

    city: z.string()
        .min(2, { message: "* Cidade é obrigatória." }),

    neighborhood: z.string()
        .min(2, { message: "* Bairro é obrigatório." }),

    street: z.string()
        .min(2, { message: "* Rua é obrigatória." }),

    course: z.string()
        .min(2, { message: "* Curso é obrigatório." }),

    period: z.string()
        .min(1, { message: "* Período é obrigatório." }),

    registration: z.string()
        .min(1, { message: "* Matrícula é obrigatória." }),

    password: z.string()
        .min(1, { message: "* Senha é obrigatória." })
        .min(8, { message: "A senha deve ter pelo menos 8 caracteres." })
        .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula." })
        .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula." })
        .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número." })
        .regex(/[\W_]/, { message: "A senha deve conter pelo menos um caractere especial." }),

    confirmPassword: z.string()
        .min(1, { message: "* Confirmação de senha é obrigatória." }),
}).superRefine((data, ctx) => {
    if (data.email !== data.confirmEmail) {
        ctx.addIssue({
            code: "custom",
            message: "Emails não correspondem.",
            path: ["confirmEmail"], // Caminho onde o erro será adicionado
        });
    }

    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "As senhas não correspondem.",
            path: ["confirmPassword"], // Caminho onde o erro será adicionado
        });
    }
});
