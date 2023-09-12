import { Button, ListGroup } from "react-bootstrap";

export default function TeamTable(props) {
  return (
    <>
      <ListGroup.Item
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h6>{props.name}</h6>
        <Button onClick={props.handler} variant="danger">
          excluir
        </Button>
      </ListGroup.Item>
    </>
  );
}
