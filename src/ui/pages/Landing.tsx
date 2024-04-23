import { Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import Space from "../components/Space";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const Landing: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Wrapper>
        <Typography variant="h2">Naughts &{`\n`}Crosses</Typography>
        <Typography variant="body1">Welcome lorem ipsum</Typography>
        <Space verticalOffset={8} />
        <Button variant="outlined">Continue game</Button>
        <Space verticalOffset={2} />
        <Button variant="contained">Start new game</Button>
      </Wrapper>
    </Container>
  );
};

export default Landing;
