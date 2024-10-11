export type AlertState = {
    type: "alerta" | "error" | "info" | "sucesso";
    message: string;
};