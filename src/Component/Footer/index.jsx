import "./Footer.css"

const Footer=()=>{
    return <footer className="footer">
        <span></span>
        <div className="contenedor_logo_footer">
            <img className="footer_logo" src="logoquini6.png" alt="Logo del Quini 6"/>
        </div>
        <div className="contenedor_redes">
            <a href="https://github.com/AleGrimald"><img src="github.png" alt="Imagen de github link de AleGale"/></a>
            <a href="https://www.linkedin.com/in/alejandro-grimaldi-828868262/"><img src="linkedin.png" alt="Imagen de linkedin de AleGale"/></a>
        </div>
    </footer>
}

export default Footer;