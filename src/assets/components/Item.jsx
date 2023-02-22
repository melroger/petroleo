import { Link } from "react-router-dom";

const Item = ({id, nombre, categoria, stock, precio, img}) => {
    return (
        <div className="product-card" key={id}>

           <ul>
             <li> <img src='../src/assets/img/' /></li>
             <li><h3>{nombre}</h3></li>
             <li><h3>{stock}</h3></li>
             <li><p>{precio}</p></li>
             <li><p>{categoria}</p></li>
             <li><p>MEDIDAS: 23 X 67 X 345 </p></li>
             <li><p>MATERIAL: MADERA</p></li>
             <li><p>AUTOR: FREDDIE MERCURY</p></li>
             <li><Link to={'/item/1'} ><p>Detalle</p></Link> </li>
           </ul>

        </div>
    );
  };
  
  export default Item;