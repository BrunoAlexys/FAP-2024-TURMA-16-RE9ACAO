import { z } from 'zod';

const validateCPF = (cpf: string) => {
    return /^\d{11}$/.test(cpf);
};

const validateCNPJ = (cnpj: string) => {
    return /^\d{14}$/.test(cnpj);
};

export const schemaForm = z.object({
    name: z.string().min(2, { message: "* Nome é obrigatório" }),

    registration: z.string().min(1, { message: "* Preencher o campo da matrícula é obrigatório" }),

    email: z.string()
        .min(1, { message: "* Email é obrigatório" })
        .email({ message: "Email inválido" }),

    confirmEmail: z.string()
        .min(1, { message: "* Confirmação de email é obrigatória" })
        .email({ message: "Confirmação de email inválida" }),

    cnpj: z.string()
        .min(1, { message: "* CNPJ é obrigatório" })
        .refine(value => validateCNPJ(value.replace(/[^\d]+/g, '')), { message: "CNPJ inválido" }),

    cpf: z.string()
        .min(1, { message: "* CPF é obrigatório" })
        .refine(value => validateCPF(value), { message: "CPF inválido" }),

    phone: z.string()
        .refine(value => {
            const cleanedPhone = value.replace(/[^\d]+/g, '');
            return cleanedPhone.length >= 10 && cleanedPhone.length <= 11;
        }, { message: "Telefone inválido" })
        .transform(value => value.replace(/[^\d]+/g, '')),

    uf: z.string()
        .min(2, { message: "* UF é obrigatória" })
        .max(2, { message: "UF deve conter exatamente 2 caracteres" }),

    cep: z.string()
        .min(8, { message: "* CEP é obriatório" })
        .max(8, { message: "CEP deve conter 8 dígitos" }),

    city: z.string().min(1, { message: "* Cidade é obrigatória" }),

    neighborhood: z.string().min(1, { message: "* Bairro é obrigatório" }),

    road: z.string().min(1, { message: "* Rua é obrigatória" }),

    password: z.string()
        .min(8, { message: "A senha deve conter pelo menos 8 caracteres" }),

    confirmPassword: z.string()
        .min(6, { message: "* A confirmação de senha é obrigatória" }),

    periodo: z.string().min(1, { message: "* Informar o período é obrigatório" }),

    curso: z.string().min(1, { message: "* Nome do Curso é obrigatório" })


})
    .superRefine((data, ctx) => {
        if (data.email !== data.confirmEmail) {
            ctx.addIssue({
                code: "custom",
                message: "Emails não correspondem",
                path: ["confirmEmail"], // Caminho onde o erro será adicionado
            });
        }

        if (data.password !== data.confirmPassword) {
            ctx.addIssue({
                code: "custom",
                message: "As senhas não correspondem",
                path: ["confirmPassword"], // Caminho onde o erro será adicionado
            });
        }
    });