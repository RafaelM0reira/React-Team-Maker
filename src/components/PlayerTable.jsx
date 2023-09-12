import { Accordion, Button } from "react-bootstrap";

export default function PlayerTable(props) {
  return (
    <>
      <Accordion.Item eventKey={props.id}>
        <Accordion.Header eventKey={props.id} key={props.id}>
          <h6>{props.name}</h6>
        </Accordion.Header>
        <Accordion.Body>
          <p>Idade: {props.age}</p>
          <p>Altura: {props.height}</p>
          <p>peso: {props.weight}</p>
          <Button onClick={props.handler} variant="success">
            adicionar
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}
