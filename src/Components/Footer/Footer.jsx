import '../Footer/Footer.scss'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer__icons'>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
            </div>
            <img className='footer__img' src="Icon.png" alt="Ícone da barbearia" />
            <p className='footer__text'>&copy; Feito por Ruan Torres</p>
        </footer>
    )
}