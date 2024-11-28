import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      raiting: 1,
      commentCreate: ""
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
  };
  //
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="raiting">
          <Form.Label>Quanto consigli {this.props.book.title}</Form.Label>
          <Form.Select aria-label="Quanto lo consigli?">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="commentCreate">
          <Form.Label>Inserisci il commento</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>
        <Button type="submit">Aggiungi Commento</Button>
      </Form>
    );
  }
}
export default AddComment;
