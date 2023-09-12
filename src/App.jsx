import { useState } from "react";

import {
  Accordion,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import PlayerTable from "./components/PlayerTable";
import TeamTable from "./components/TeamTable";
import Title from "./components/Title";

function App() {
  const [names, setName] = useState([]);
  const [players, setPlayers] = useState([
    { name: "Rafael", age: "18", height: "1,70cm", weight: "64kg", id: "1" },
    { name: "Ramon", age: "20", height: "1,90cm", weight: "75kg", id: "2" },
    { name: "Luís", age: "19", height: "1,50cm", weight: "170kg", id: "3" },
    { name: "Felipe", age: "27", height: "1,80cm", weight: "779kg", id: "4" },
    { name: "Adriel", age: "20", height: "1,77cm", weight: "70kg", id: "5" },
    { name: "Jeremias", age: "20", height: "1,65cm", weight: "20kg", id: "6" },
    { name: "Pedro", age: "19", height: "1,80cm", weight: "68kg", id: "7" },
  ]);

  function addPlayer(id) {
    for (let i = 0; i < names.length; i++) {
      if (names[i].id === id) {
        return alert("Jogador já escalado");
      } else if (names.length === 5) {
        return alert("Número máximo de jogadores alcançado");
      }
    }
    let person = players.find((index) => index.id === id);
    const newPerson = [...names, person];
    setName(newPerson);
    setPlayers(players.filter((i) => i.id != person.id));
    console.log(names);
  }

  function removePlayer(id) {
    let person = names.find((index) => index.id === id);
    let newNames = names.filter((i) => i.id != person.id);
    const returnPlayer = [...players, person];
    setName(newNames);
    setPlayers(returnPlayer);
    console.log(newNames);
  }

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-3rem",
        }}
      >
        <Image
          src="https://t3.ftcdn.net/jpg/04/75/01/42/360_F_475014249_yM9bJgvbwJFpdKJQO9pGrr0FWWCUoR8z.jpg"
          style={{ width: "250px" }}
        />
      </Row>
      <Row className=" pb-5 text-center">
        <Title />
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Jogadores</h2>
          <Accordion defaultActiveKey="0">
            {players.map((props) => (
              <PlayerTable
                id={props.id}
                name={props.name}
                age={props.age}
                height={props.height}
                weight={props.weight}
                handler={() => addPlayer(props.id)}
                key={props.id}
              />
            ))}
          </Accordion>
        </Col>

        <Col>
          <ListGroup>
            <h2 className="text-center">Time</h2>
            {names.map((props) => (
              <>
                <TeamTable
                  name={props.name}
                  handler={() => removePlayer(props.id)}
                  key={props.id}
                />
              </>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
