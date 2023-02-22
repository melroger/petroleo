const Item = ({id, nombre, stock, precio}) => {
    return (
        <div className="product-card" key={id}>

           <ul>
             <li> <img src='../src/assets/img/4d7625e2c0f5d9a3f10b20e804015fb6.jpg' /></li>
             <li><h3>{nombre}</h3></li>
             <li><h3>{stock}</h3></li>
             <li><p>{precio}</p></li>
             <li><p>MEDIDAS: 23 X 67 X 345 </p></li>
             <li><p>MATERIAL: MADERA</p></li>
             <li><p>AUTOR: FREDDIE MERCURY</p></li>
           </ul>

        </div>
    );
  };
  
  export default Item;