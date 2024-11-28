import { Component } from "react";

class CommentArea extends Component {
  state = {
    commenti: []
  };
  componentDidMount() {
    this.fetchCommenti();
  }
  fetchCommenti = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/${this.props.book.asin}`
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ commenti: data });
      } else {
        console.error("Errore!");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  render() {
    return (
      <div>
        <h4>Commenti:</h4>
        <ul>
          {this.state.commenti.map((commento) => (
            <li key={commento._id}>
              <strong>{commento.author}</strong>: {commento.commenti}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CommentArea;
