import { useParams } from "react-router-dom";

const ItemDetail = ({productos}) => {
    const {id} = useParams();

    const productosFilter = productos.filter((prod) => prod.id == id)
    return (
        <div className="detail">
            {productosFilter.map((prod) => (
                <h1>{prod.nombre}</h1>
            ))}


        </div>
    );
  };
  
  export default ItemDetail;