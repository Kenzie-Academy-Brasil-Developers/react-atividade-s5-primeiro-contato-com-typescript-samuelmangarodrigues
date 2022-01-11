import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import { ContainerCard } from "./components/Card/styles";
function App() {
  interface Person {
    name: string;
    age: number;
    hobby: string;
  }
  const clickFunc = () => {
    const person: Person = {
      name,
      age,
      hobby,
    };
    setUsers([...users, person]);
  };
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [users, setUsers] = useState<Person[]>([]);
  return (
    <div className="App">
      <header className="App-header">
        <Input onChange={(e) => setName(e.target.value)} placeholder="Nome" />
        <Input
          onChange={(e) => setAge(parseInt(e.target.value))}
          placeholder="Idade"
        />
        <Input onChange={(e) => setHobby(e.target.value)} placeholder="Hobby" />
        <Button onClick={() => clickFunc()}>Enviar</Button>
        <ContainerCard>
          {users.map((user) => (
            <Card age={user.age} name={user.name} hobby={user.hobby} />
          ))}
        </ContainerCard>
      </header>
    </div>
  );
}

export default App;
