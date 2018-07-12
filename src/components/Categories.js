import React from "react";
import Food from "./Food.js";
import Basket from "./Basket.js";
import "../App.css";

class Categories extends React.Component {
  render = props => {
    let section = [];
    let key = Object.keys(this.props.menu);
    for (let i = 0; i < Object.keys(this.props.menu).length; i++) {
      if (this.props.menu[key[i]].length > 0) {
        section.push(
          <div>
            <div className="menuCat" key={i}>
              <h3>{key[i]}</h3>
              <Food food={this.props.menu[key[i]]} />
            </div>
          </div>
        );
      }
    }

    return (
      <div className="main">
        <ul className="categories">
          <li>{section}</li>
          <li>
            <Basket />
          </li>
        </ul>
      </div>
    );
  };
}

export default Categories;
