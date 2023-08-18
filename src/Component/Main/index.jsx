import "./Main.css";
import Seccion from "../Section"
import Seccion2 from "../Section2";

const Main=(props)=>{
    const {registrarApuesta, sorteos, verificar,colorFondo, controlBoton,controlBoton2, formulario, boton, boton2}= props;
    return <section className="main">
        <Seccion
            registrarApuesta={registrarApuesta}
            controlBoton={controlBoton}
            boton={boton}
            boton2={boton2}
            controlBoton2={controlBoton2}
        />

        { formulario === true ? <Seccion2
            numSorteo={sorteos} 
            verificar={verificar}
            fondo={colorFondo}
            boton2={boton2}
            
        /> : <></>}

        
    </section>
}
export default Main;