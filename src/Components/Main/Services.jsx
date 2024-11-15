import './Services.scss'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';

export default function Services (){

    useEffect(() => {
        ScrollReveal().reveal('.Services__DivServices__Service', {
            delay: 200, // opcional, para adicionar um atraso
            distance: '500px', // opcional, para definir a distância do movimento
            origin: 'left', // Define de onde o movimento deve iniciar (top, bottom, left, right)
            reset: false // opcional, para permitir que o efeito se repita ao rolar para cima e para baixo
        });
    }, []);

    return(
        <section className='Services'>
            <h1 className='Services__title'>SERVIÇOS</h1>
            <p className='Services__text'>"Transforme seu estilo e bem-estar na Providencia. Oferecemos uma gama de serviços, desde cortes sofisticados até cuidados especiais para barba e cabelo. Com uma equipe altamente qualificada, garantimos que cada visita proporcione não apenas um novo visual, mas uma experiência única e renovadora."</p>
            <div className='Services__DivServices'>
                <div className='Services__DivServices__Service'>
                    <img src="Service1.jpg" />
                    <div className='Services__DivServices__Service__DivText'>
                        <p className='Services__DivServices__Service__DivText__title'>Corte de cabelo</p>
                        <p className='Services__DivServices__Service__DivText__valor'>R$ 25,00</p>
                    </div>
                </div>

                <div className='Services__DivServices__Service'>
                    <img src="Service2.jpg" />
                    <div className='Services__DivServices__Service__DivText'>
                        <p className='Services__DivServices__Service__DivText__title'>Barba completa</p>
                        <p className='Services__DivServices__Service__DivText__valor'>R$ 85,00</p>
                    </div>
                </div>

                <div className='Services__DivServices__Service'>
                    <img src="Service3.jpg"/>
                    <div className='Services__DivServices__Service__DivText'>
                        <p className='Services__DivServices__Service__DivText__title'>Barba e cabelo</p>
                        <p className='Services__DivServices__Service__DivText__valor'>R$ 40,00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
