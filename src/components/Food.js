import React from "react";
import Popular from "./Popular.js";
import "../App.css";
import LinesEllipsis from "react-lines-ellipsis";

class Food extends React.Component {
  /* pour l'affichage de l'image */
  renderPicture(i) {
    if (this.props.food[i].picture) {
      return (
        <img
          className="menuPic"
          src={this.props.food[i].picture}
          alt="menuPic"
        />
      );
    }
    return null;
  }

  render = props => {
    let card = [];
    for (let i = 0; i < this.props.food.length; i++) {
      card.push(
        <div className="foodBlock" key={this.props.food[i].id}>
          <div className="restoText">
            <p className="foodTitle">{this.props.food[i].title}</p>
            <LinesEllipsis
              className="foodText"
              text={this.props.food[i].description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
            <span className="footText">
              <p className="foodText">{this.props.food[i].price} €</p>
              <Popular popular={this.props.food[i].popular} />
            </span>
          </div>
          {this.renderPicture(i)}
        </div>
      );
    }
    return <ul className="card">{card}</ul>;
  };
}

export default Food;
