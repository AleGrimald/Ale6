import "./Inicio.css"

const Inicio =()=>{

    const textoReglas={
        texto1:"Toca el boton 'Jugar' en la parte superior de la pagina.",
        texto2:"En el carton deberas colocar 6 numeros del 0 al 45, incluyendo estos dos numeros.",
        texto3:"Una vez ingresado los 6 numeros, presiona el boton Jugar.",
        texto4:"Ahora aparece otro carton con 6 numeros aleatorios. Presiona el boton 'Verificar'",
        texto5:"Si consegusite 6 aciertos !Felicidades Ganaste¡ caso contrario puedes presionar el boton 'Volver a Jugar'"
    }
    return <section className="contenedor_inicio">
        <h2 className="titulo_inicio">¿Como se juega a AleG-6?</h2>
        
        <div className="contenedor_texto">
            <ul className="contenedor_reglas">
                <li className="reglas_elementos">{textoReglas.texto1}</li>
                <img className="img_inicio0" src="carton0.png" alt="una imagen del carton como ejemplo"/>
                <li className="reglas_elementos">{textoReglas.texto2}</li>
                <img className="img_inicio" src="carton1.png" alt="una imagen del carton como ejemplo"/>
                <li className="reglas_elementos">{textoReglas.texto3}</li>
                <img className="img_inicio" src="carton.png" alt="una imagen del carton como ejemplo"/>
                <li className="reglas_elementos">{textoReglas.texto4}</li>
                <img className="img_inicio3" src="carton3.png" alt="una imagen del carton como ejemplo"/>
                <li className="reglas_elementos">{textoReglas.texto5}</li>
                <img className="img_inicio3" src="carton4.png" alt="una imagen del carton como ejemplo"/>
            </ul>
        </div>
        
    </section>
}

export default Inicio;