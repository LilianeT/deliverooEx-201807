import React from "react";
import FaStar from "react-icons/lib/fa/star";
// installer react-icons, importer l'icone,regarder la doc sur https://www.npmjs.com/package/react-icons
import "../App.css";

class Popular extends React.Component {
  render = props => {
    let pop = [];
    if (this.props.popular === true) {
      pop.push(
        <div className="popular">
          <FaStar className="star" />
          <div>Populaire</div>
        </div>
      );
    }
    return <div>{pop}</div>;
  };
}

export default Popular;
