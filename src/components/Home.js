import React from "react";
import axios from "axios";
import Header from "./Header.js";
import Restaurant from "./Restaurant.js";
import Categories from "./Categories.js";
import "../App.css";

class Home extends React.Component {
  state = {
    restaurant: "",
    menu: [],
    isLoading: false
  };

  render() {
    if (this.state.isLoading === true) {
      return <span>Loading...</span>;
    } else {
      return (
        <div>
          <Header />
          <Restaurant
            name={this.state.restaurant.name}
            description={this.state.restaurant.description}
            picture={this.state.restaurant.picture}
          />
          <Categories menu={this.state.menu} />
        </div>
      );
    }
  }

  componentDidMount() {
    axios
      .get(
        "https://s3-eu-west-1.amazonaws.com/lereacteurapp/react/deliveroo/deliveroo-cart.json"
      )
      .then(response => {
        this.setState({
          restaurant: response.data.restaurant,
          menu: response.data.menu,
          isloading: false
        });
      });
  }
}

export default Home;

// const menu = [];
//

//
// console.log(this.state.menu);

// for (let i = 0; i < this.state.menu.length; i++) {
//   sections.forEach(section => {
//     menu.push(
//       <li key={i}>
//         <h3>{section[i]}</h3>
//         <div>{this.state.menu[section][i].title}</div>
//       </li>
//     );
//   });
// }

// /* menu.push(<li key={i}>{this.state.menu[i]}</li>); */
// // menu.push(this.state.menu[section][i]);
// // return <h3>{section}</h3>;

// return <div>{sections}</div>;
