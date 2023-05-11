import Item from "../Item/Item";

const ItemList = ({surfboards}) => {
    return (
        <div className="ListaSurf">
            {surfboards.map(producto => <Item key={producto.id} {...producto}/>)}
        </div>
    )
}

export default ItemList