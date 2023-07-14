import './rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <div className='footer-icones'>
                <img src='/img/tw.png' alt='logo twitter'/>
                <img src='/img/ig.png' alt='logo instagram'/>
                <img src='/img/fb.png' alt='logo facebook'/>
            </div>
            <div className='footer-imagem'>
                <img src='/img/logo.png' alt='logo organo'/>
            </div>
            <div className='footer-copy'>
                &copy;2023 Desenvolvido por Matheus
            </div>
        </footer>
    )
}

export default Rodape