import { Container, Title, SubTitle, Description } from "./styles";

interface Props {
    title: string;
    subtitle: string;
    description: string;
}


const Card: React.FC<Props> = ({ title, subtitle, description }) => {
  
    return (
      <Container>
        <Title>
            {title}
        </Title>
        <SubTitle>
            {subtitle}
        </SubTitle>
        <Description title={description}>
            {description}
        </Description>
      </Container>
    );
  };
    
  export default Card;