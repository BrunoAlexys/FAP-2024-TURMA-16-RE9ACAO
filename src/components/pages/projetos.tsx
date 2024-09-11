import { CardProject } from "../cardProject/cardProject"
import imagem from '../cardProject/img/perfil.png'

export const Projetos = () =>{
    return (
        <section className="px-2 py-10 flex flex-col gap-3" id="projetos">
            <CardProject imgProject={imagem} projetoNome="Teste" tipo={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure veritatis sapiente? Doloremque necessitatibus natus vel ea veniam corrupti, ab eaque quisquam magnam iusto et harum facere, officia distinctio repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus ipsa recusandae commodi blanditiis vero eos quia molestiae odit possimus quae ipsum sequi odio, voluptas, officiis ex! Aperiam, minima sapiente?
            </CardProject>
            <CardProject tipo={2} imgProject={imagem} projetoNome="Teste2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum adipisci, voluptatum accusamus voluptates quas aperiam nesciunt incidunt animi aliquid deserunt distinctio quibusdam eius, provident laboriosam natus harum accusantium dignissimos!
            </CardProject>
            <CardProject tipo={3} imgProject={imagem} projetoNome="Teste3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore porro neque molestias non voluptatum necessitatibus rerum obcaecati fugiat cupiditate voluptatem quis explicabo, voluptatibus ullam eligendi quidem omnis, ea doloribus aliquam.
            </CardProject>
        </section>
    )
}