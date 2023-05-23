import Item from "../Item/Item";
import ListaItem from './ListaItem.css'

const ItemList = ({surfboards}) => {
    return (
        <div className="ListaSurf">
            {surfboards.map(producto => <Item key={producto.id} {...producto}/>)}
        </div>
    )
}

export default ItemList