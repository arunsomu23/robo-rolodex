import { Component } from "react";
import "./card.styles.css";

class card extends Component {

  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set&size=180x180`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
    );
  }
}

export default card;
