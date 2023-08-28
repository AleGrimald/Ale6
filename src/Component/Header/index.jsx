import "./Header.css"
import { useState } from "react";
import Button from "../Button";
function Header(props){
    const {listaBotones}=props;
    const [btnMenu, setBtnMenu]=useState(false);
    const mostrarMenu=()=>{
        setBtnMenu(!btnMenu);        
    }
    return <header className="header">
        <div className="contenedor_logo">
            <img className="logo" src="logoquini6.png" alt="Logo del Quini 6"/>
            <h1 className="titulo_h1">AleG 6</h1>
        </div>
        
        <nav className="menu">
            <ul className="menu_lista">
                <Button nombre={"Menu"} click={mostrarMenu} claseCss={"elemento_link"} clase={"boton"}/>

                { btnMenu ? listaBotones.map((boton, index)=>
                    <Button 
                        link={boton.link} 
                        nombre={boton.nombre}
                        claseCss={"elemento_link"}
                        tipo={boton.tipo}
                        key={index}
                        clase={"boton"}
                    />):<></>
                }
            </ul>
        </nav>
    </header>
}

export default Header;