import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import { useState } from 'react';

function App() {
  const [apuestas, setApuestas] = useState([]);
  const [sorteos, setSorteo]= useState([]);
  const [colorFondo, setColorFondo] = useState([]);
  const [formulario, setFormulario] = useState(false);

  //Lista con datos de botones
  const listaBtn = [
    {nombre: "Inicio", link:"http://localhost:3000/", tipo:"submit"},
    {nombre: "Ver Quini", link:"http://localhost:3000/", tipo:"submit"},
    {nombre: "Apostar", link:"http://localhost:3000/", tipo:"submit"},
    {nombre: "Contacto", link:"http://localhost:3000/", tipo:"submit"}
  ];
  
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
    setColorFondo(["","","","","",""])
    generarSorteo();
    setApuestas(apuesta);
  }

  //Verifica si hay coincidencias entre apuestas y sorteos
  const verificar=(event)=>{
    let colores=[];
    event.preventDefault();
    let cont=0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if(sorteos[i] === apuestas[j])
        {
          colores[i]="#008000"
          cont=cont+1;
        }
      }
    }
    setColorFondo(colores);
  }

  //Controla cuando se muestra un formulario
  const controlarForm=()=>{
    setFormulario(!formulario)
  }

  return (
    <div className="App">
      <Header
        listaBotones={listaBtn}
      />
      <Main
        registrarApuesta={registrarApuesta}
        sorteos={sorteos}
        verificar={verificar}
        colorFondo={colorFondo}
        controlarForm={controlarForm}
        formulario={formulario}
      />
      <Footer

      />
    </div>
  );
}
export default App;