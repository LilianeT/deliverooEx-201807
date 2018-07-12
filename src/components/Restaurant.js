import React from "react";
import "../App.css";

class Restaurant extends React.Component {
  render = props => {
    return (
      <div>
        <div id="resto">
          <img className="hidden" src={this.props.picture} alt="restoPicture" />
          <div className="restoText">
            <h3>{this.props.name}</h3>
            <p className="restoDesc">{this.props.description}</p>
          </div>
          <img
            className="restoPic"
            src={this.props.picture}
            alt="restoPicture"
          />
        </div>
      </div>
    );
  };
}

export default Restaurant;
