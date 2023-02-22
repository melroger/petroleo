import React from 'react'
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  let productos = [
    { id: 1, nombre: "GOD SAVE THE QUEEN", categoria: "asientos", stock: 8, precio: 250, img: "4d7625e2c0f5d9a3f10b20e804015fb6.jpg" },
    { id: 2, nombre: "EL PRIMO RARO DE MICKEY", categoria: "esculturas", stock: 20, precio: 185, img: "147c2ed4d30ae521d75d918355f69ab1.jpg" },
    { id: 3, nombre: "LA MENUS DE VILO", categoria: "esculturas", stock: 5, precio: 650, img: "2430241c2fa657f06a57915daf5e11cd.jpg" },
    { id: 4, nombre: "ESPEJO", categoria: "espejos", stock: 8, precio: 250, img: "188b169b6f400a1284ab1de4d831da78.jpg" }
  ];

  const {categoria} = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if(productos.length === 0){
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(productos);
      }, 300);
    })
  }

  async function fetchingData(){
    try {
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch (err) {
      console.log(err)
    }
  }
  fetchingData();

  const catFilter = productos.filter((prod) => prod.categoria === categoria);
  return (
    <>
      {categoria ? <ItemList productos={catFilter}/> : <ItemList productos={productos} />}
      
    </>
      
  )
}

export default ItemListContainer;
