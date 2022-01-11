import { Cards } from "./styles";

interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <Cards>
      <h2>Nome : {name}</h2>
      <h3>Idade : {age}</h3>
      <h3>Hobby : {hobby}</h3>
    </Cards>
  );
};
export default Card;
