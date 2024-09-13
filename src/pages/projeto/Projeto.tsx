import { Card } from "../../components/card-component/Card";
import { Filter } from "../../components/filter-component/Filter";
import { Search } from "../../components/search-component/Search";
import imagem from './assets/perfil.png'

export const Projeto = () => {
    return (
        <section id="dashboard" className="flex flex-col gap-6">
            <div className="w-full flex justify-between items-center" id="filters">
                <Search />
                <Filter />
            </div>
            <Card tipo={1} projectName="Conluído" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
            <Card tipo={2} projectName="50% concluido" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
            <Card tipo={3} projectName="Começo do Projeto" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
            <Card tipo={4} projectName="Cor padrão" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
            <Card tipo={4} projectName="Cor padrão" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
            <Card tipo={4} projectName="Cor padrão" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
            <Card tipo={4} projectName="Cor padrão" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
            <Card tipo={4} projectName="Cor padrão" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
            <Card tipo={4} projectName="Cor padrão" img={imagem}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, nam illum, voluptatem a ipsam minus debitis repellendus excepturi natus eveniet quia cumque optio mollitia nemo magnam libero et possimus vero.
            </Card>
        </section>
    );
};