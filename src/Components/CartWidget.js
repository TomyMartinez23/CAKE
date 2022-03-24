import carrito from "../Components/imgProyecto/carrito.png"
const CartWidget = () =>{
    return(
        <div>
           <img src={carrito} className="cart"></img>
           <p></p>
        </div>
    )
}

export default CartWidget;