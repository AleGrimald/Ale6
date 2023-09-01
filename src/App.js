import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Inicio from './Component/Inicio';
import { useState } from 'react';

function App() {
  const [apuestas, setApuestas] = useState([]);
  const [sorteos, setSorteo]= useState([]);
  const [colorFondo, setColorFondo] = useState([]);
  const [formulario, setFormulario] = useState(false);
  const [boton, setBoton] = useState(true);
  const [boton2, setBoton2] = useState(false);
  const [carton, setCarton] = useState(false);
  
  //Genera un array de 6 elementos aleatorios
  const generarSorteo = ()=>{
    let arrSorteo=[];
    let numRand;
    let bandera = true;
    for (let i = 0; i < 6; i++) {
      numRand = Math.floor(Math.random()*(45-0+1)+0);
      
      if (i>0) 
      {
        for (let j = 0; j < 6; j++)
        {
          if (arrSorteo[j] === numRand)
          {
            bandera = false;
            j = 6;
          }else{bandera = true;}
        }
        if (bandera) {
          arrSorteo[i] = numRand;
        }else{i--;}
      }else
      {
        arrSorteo[i] = numRand;
      }
    }
    setSorteo(arrSorteo);
  }

  //Setea el hook con los un array que trae a travez de apuesta
  const registrarApuesta = (apuesta) =>{
    for (let i = 0; i < 6; i++) {
      apuesta[i]= parseInt(apuesta[i]);
    }
    setColorFondo([]);
    generarSorteo();
    setApuestas(apuesta);
  }

  //Verifica si hay coincidencias entre apuestas y sorteos
  const verificar=(event)=>{
    let colores=['#808080','#808080','#808080','#808080','#808080','#808080'];
    event.preventDefault();
    for (let i = 0; i < 6; i++)
    {
      for (let j = 0; j < 6; j++) 
      {
        sorteos[i] === apuestas[j] ? colores[i]='#00F900': <></>;
      }
    }
    setColorFondo(colores);
    setBoton2(!boton2);
  }

  //Controla cuando se muestra un formulario
  const controlBoton=()=>{
    setFormulario(!formulario);
    setBoton(!boton);
    
  }

  //Controla cuando aparece y desaparece el carton y las reglas de jeugo, ademas cambia el nombre del boton Inicio y Jugar
  const controlCarton=()=>{
      setCarton(!carton);
  }

  //Lista con datos de botones
  const listaBtn = [
    {nombre: "Inicio",  link:"#", click: controlCarton},
    {nombre: "Jugar",   link:"#", click: controlCarton},
    {nombre: "Contacto",link:"#"}
  ];


  return (
    <div className="App">
      <Header
        listaBotones={listaBtn}
        control={carton}
      />
      {
        carton===false
        ?<Inicio/>
        :<Main
          registrarApuesta={registrarApuesta}
          sorteos={sorteos}
          verificar={verificar}
          colorFondo={colorFondo}
          controlBoton={controlBoton}
          controlBoton2={setBoton2}
          formulario={formulario}
          boton={boton}
          boton2={boton2}
        />
      }
      
      <Footer/>
    </div>
  );
}
export default App;