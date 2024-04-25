import { Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import Space from "../components/Space";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../domain/rootActions";
import { selectors } from "../../domain/rootSelectors";
import LoadingButton from "../components/LoadingButton";
import { RequestStatus } from "../../libs/apiClient";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const gameRequestStatus = useSelector(
    selectors.game.getGameStatusRequestStatus
  );

  const handleContinueGameClick = useCallback(() => {
    dispatch(actions.game.fetchGameStatus.base());
  }, [dispatch]);

  const handleNewGameClick = useCallback(() => {
    console.log("NEW GAME");
  }, []);

  return (
    <Container maxWidth="xs">
      <Wrapper>
        <Typography variant="h2">Naughts &{`\n`}Crosses</Typography>
        <Typography variant="body1">Welcome lorem ipsum</Typography>
        <Space verticaloffset={8} />
        <LoadingButton
          variant="outlined"
          onClick={handleContinueGameClick}
          isLoading={gameRequestStatus === RequestStatus.Pending}
        >
          Continue game
        </LoadingButton>
        <Space verticaloffset={2} />
        <Button variant="contained" onClick={handleNewGameClick}>
          Start new game
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Landing;
