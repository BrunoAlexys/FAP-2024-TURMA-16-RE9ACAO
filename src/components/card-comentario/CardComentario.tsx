import Comentario from './assets/comentarios.png';

export const CardComentario = () => {
    return (
        <div className="flex flex-col justify-between bg-[#D9D9D9] w-[640px] h-[240px] p-2 rounded-2xl">
            <div className='p-3'>
                <h3>Titulo teste</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi obcaecati ducimus deleniti. Maiores explicabo, cumque fugit temporibus dolor laborum quas dolore saepe dolorum nam? Doloremque maxime libero nesciunt nam?</p>
            </div>
            <div className='flex justify-end mb-4 mr-4'>
                <button className="rounded-full w-14 h-14 bg-colorMenuPrimary flex items-center justify-center">
                    <img className='w-7' src={Comentario} alt="Icone de comentario" />
                </button>
            </div>
        </div>
    );
}