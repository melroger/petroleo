import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <div className="item-list">
            {productos.map((prod) => (
                <Item
                key={prod.id}
                id={prod.id}
                nombre={prod.nombre}
                stock={prod.stock}
                precio={prod.stock}
                />
            ))}
        </div>
    );
  };
  
  export default ItemList;