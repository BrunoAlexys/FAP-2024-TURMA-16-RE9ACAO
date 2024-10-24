import Add from './assets/mais.png';

export const CardParticipante = () => {
    return (
        <div className="w-[200px]">
            <div className="w-full h-12 rounded-t-2xl flex items-center justify-center text-white font-semibold bg-gradient-to-r from-colorMenuPrimary to-colorMenuSecondary">
                <h2>Professores</h2>
            </div>
            <div className='max-h-40 overflow-y-auto'>
                <div className='flex items-center gap-2 w-full p-1 bg-[#D9D9D9] border-b-[1px] border-[#B1AFAF]'>
                    <div className='w-12 h-12 ml-1 rounded-full bg-white'></div>
                    <h5>Nome</h5>
                </div>
                <div className='flex items-center gap-2 w-full p-1 bg-[#D9D9D9] border-b-[1px] border-[#B1AFAF]'>
                    <div className='w-12 h-12 ml-1 rounded-full bg-white'></div>
                    <h5>Nome</h5>
                </div>
                <div className='flex items-center gap-2 w-full p-1 bg-[#D9D9D9] border-b-[1px] border-[#B1AFAF]'>
                    <div className='w-12 h-12 ml-1 rounded-full bg-white'></div>
                    <h5>Nome</h5>
                </div>
                <div className='flex items-center gap-2 w-full p-1 bg-[#D9D9D9] border-b-[1px] border-[#B1AFAF]'>
                    <div className='w-12 h-12 ml-1 rounded-full bg-white'></div>
                    <h5>Nome</h5>
                </div>
                <div className='flex items-center gap-2 w-full p-1 bg-[#D9D9D9] border-b-[1px] border-[#B1AFAF]'>
                    <div className='w-12 h-12 ml-1 rounded-full bg-white'></div>
                    <h5>Nome</h5>
                </div>
                <div className='flex items-center gap-2 w-full p-1 bg-[#D9D9D9] border-b-[1px] border-[#B1AFAF]'>
                    <div className='w-12 h-12 ml-1 rounded-full bg-white'></div>
                    <h5>Nome</h5>
                </div>
            </div>
            <div className='flex items-center justify-center w-full h-[70px] rounded-b-2xl bg-[#ECE9E9]'>
                <button className="flex items-center justify-center w-14 h-14 rounded-full bg-colorMenuPrimary">
                    <img src={Add} alt="Icone de adicionar" />
                </button>
            </div>
        </div>
    );
}