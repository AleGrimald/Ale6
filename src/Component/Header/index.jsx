import "./Header.css"
import Button from "../Button";
function Header(props){
    const {listaBotones}=props;
    
    return <header className="header">
        <img className="logo" src="logoquini6.png" alt="Logo del Quini 6"/>
        <nav className="menu">
            <ul className="menu_lista">
                {listaBotones.map((boton, index)=>
                <Button 
                    link={boton.link} 
                    nombre={boton.nombre}
                    claseCss={"elemento_link"}
                    tipo={boton.tipo}
                    key={index}
                    clase={"boton"}
                />)}
            </ul>
        </nav>
    </header>
}

export default Header;