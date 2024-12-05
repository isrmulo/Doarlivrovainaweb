import s from './inicio.module.scss';
import imagem1 from '../../assets/image1.png';
import imagem2 from '../../assets/image2.png';
import imagem3 from '../../assets/image3.png';
import imagem4 from '../../assets/image4.png';


export default function Inicio() {
    return(
        <>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.containerCards}>
                    <section className="">
                        <img src={imagem1} alt="Imagem ilustrando círculo social de 4 pessoas" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section className="">
                        <img src={imagem2} alt="Imagem ilustrando pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section className="">
                        <img src={imagem3} alt="Imagem ilustrando 6 pessoas transformando o mundo" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section className="">
                        <img src={imagem4} alt="Imagem ilustrando balança que representa igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </>
    ) 
}