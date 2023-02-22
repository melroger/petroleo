import React from 'react'
import ItemList from '../components/ItemList';

const ItemListContainer = () => {
  
  let productos = [
    { id: 1, nombre: "GOD SAVE THE QUEEN", stock: 8, precio: 250 },
    { id: 2, nombre: "EL PRIMO RARO DE MICKEY", stock: 20, precio: 185 },
    { id: 3, nombre: "LA MENUS DE VILO", stock: 5, precio: 650 },
    { id: 4, nombre: "Butaca globo", stock: 8, precio: 250 }
  ];
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

  return (
    <>
      <p>hola</p>
      <ItemList productos={productos}/>
    </>
      
  )
}

export default ItemListContainer;
