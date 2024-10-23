interface NotificacaoProps {
  titulo: string;
  dataHora: string;
  descricao: string;
  imagem: string;
}


export const NotificacaoItem: React.FC<NotificacaoProps> = ({ titulo, dataHora, descricao, imagem }) => {
  return (
    <div className="flex items-center p-4 bg-blue-100 rounded-lg w-full max-w-1g text-black font-bold shadow-cardShadow">
      <img src={imagem} alt="" className="w-10 h-10 rounded-full mr-4 bg-white" />
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-base">{titulo}</h4>
          <span className="text-sm ml-32">{dataHora}</span>
        </div>
        <p className="text-sm mt-1">{descricao}</p>

      </div>
    </div>
  );
};