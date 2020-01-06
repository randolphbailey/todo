import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const deleteTodo = i => {
    let newList = todos;
    newList.splice(i, 1);
    setTodos([...newList]);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <Container>
      <Row>
        <Col>
          <ul>
            {todos.map((val, i) => (
              <li key={i} onClick={e => deleteTodo(i)}>
                {val}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <form className="form" onSubmit={e => addTodo(e)}>
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
