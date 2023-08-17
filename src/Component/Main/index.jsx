import "./Main.css";
import Seccion from "../Section"
import Seccion2 from "../Section2";

const Main=(props)=>{
    const {registrarApuesta, sorteos, verificar,colorFondo, controlarForm, formulario}= props;
    return <main className="main">
        <Seccion
            registrarApuesta={registrarApuesta}
            controlarForm={controlarForm}
        />

        { formulario === true ? <Seccion2
            numSorteo={sorteos} 
            verificar={verificar}
            fondo={colorFondo}
        /> : <></>}

        
    </main>
}
export default Main;