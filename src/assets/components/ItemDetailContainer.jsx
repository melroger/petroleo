
import {userState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [productos, setProductos] = userState([]);
    const getDatos = () => {
        return new Promise((resolve, reject) => {
        if(productos.length === 0){
            reject(new Error("No hay datos"));
        }
        setTimeout(() => {
            const productosFilter = productos((prod) => prod.id == id);
            resolve(productos);
        }, 300);
        })
    }

    async function fetchingData(){
        try {
        const datosFetched = await getDatos();
        setProductos(datosFetched)
        } catch (err) {
        console.log(err)
        }
    }
    fetchingData();
        return (
            <div className="detail-container">

                <ItemDetail productos={productos} />
            </div>
        );
    };
  
  export default ItemDetailContainer;