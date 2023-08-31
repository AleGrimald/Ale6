import "./Header.css"

import Button from "../Button";
function Header(props){
    const {listaBotones, control}=props;

    return <header className="header">
        <div className="contenedor_logo">
            <img className="logo" src="logoquini6.png" alt="Logo del Quini 6"/>
            <h1 className="titulo_h1">AleG 6</h1>
        </div>
        
        <nav className="menu">
            <ul className="menu_lista">
                {
                    control===true
                    ?<Button 
                        nombre={listaBotones[0].nombre} 
                        click={listaBotones[0].click} 
                        claseCss={"elemento_link"} 
                        clase={"boton"}
                    />
                    :<Button 
                        nombre={listaBotones[1].nombre}
                        click={listaBotones[1].click} 
                        claseCss={"elemento_link"}  
                        clase={"boton"}
                    />
                }

                <Button 
                    nombre={listaBotones[2].nombre}
                    link={listaBotones[2].link}
                    claseCss={"elemento_link"}  
                    clase={"boton"}
                />
            </ul>
        </nav>
    </header>
}

export default Header;