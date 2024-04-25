import { Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import Space from "../components/Space";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../domain/rootActions";
import { selectors } from "../../domain/rootSelectors";
import LoadingButton from "../components/LoadingButton";
import { RequestStatus } from "../../shared/libs/apiClient";
import { usePrevious } from "../../shared/hooks/usePrevious";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../App";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameRequestStatus = useSelector(
    selectors.game.getGameStatusRequestStatus
  );

  const prevGameRequestStatus = usePrevious(gameRequestStatus);

  useEffect(() => {
    if (
      prevGameRequestStatus === RequestStatus.Pending &&
      gameRequestStatus === RequestStatus.Fulfilled
    ) {
      navigate(ROUTES.Game);
    }
  });

  const handleContinueGameClick = useCallback(() => {
    dispatch(actions.game.fetchGameStatus.base());
  }, [dispatch]);

  const handleNewGameClick = useCallback(() => {
    dispatch(actions.game.startNewGame.base());
  }, [dispatch]);

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
        <LoadingButton
          variant="contained"
          onClick={handleNewGameClick}
          isLoading={gameRequestStatus === RequestStatus.Pending}
        >
          Start new game
        </LoadingButton>
      </Wrapper>
    </Container>
  );
};

export default Landing;
