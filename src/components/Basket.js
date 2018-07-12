import React from "react";
import "../App.css";

function Basket() {
  return (
    <div className="cart">
      <button className="validate">Validez mon panier</button>
      <div className="basket">Votre panier est vide</div>
    </div>
  );
}

export default Basket;
