import { useEffect, useState } from "react";

export default function App() {
  
  const [lista, setLista]= useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resposta.json();
        setFotos(dados);
    }
    buscarUsuario();
   }, []);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {}
      </ul>
    </>
  );
}
