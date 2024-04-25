import { useCallback, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { selectors } from "../../domain/rootSelectors";
import styled from "styled-components";
import Space from "../components/Space";
import { actions } from "../../domain/rootActions";
import LoadingButton from "../components/LoadingButton";
import { RequestStatus } from "../../shared/libs/apiClient";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  width: 95%;
  aspect-ratio: 1;
  min-width: 200px;
`;

const Square = styled.div`
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Game: React.FC = () => {
  const dispatch = useDispatch();

  const board = useSelector(selectors.game.getBoard);
  const currentPlayer = useSelector(selectors.game.getCurrentPlayer);
  const winner = useSelector(selectors.game.getWinner);
  const gameOver = useSelector(selectors.game.getGameOver);
  const gameRequestStatus = useSelector(
    selectors.game.getGameStatusRequestStatus
  );

  useEffect(() => {
    if (board.cells.length < 1) {
      dispatch(actions.game.fetchGameStatus.base());
    }
  });

  const handleNewGameClick = useCallback(() => {
    dispatch(actions.game.startNewGame.base());
  }, [dispatch]);

  const renderSquares = useCallback(() => {
    return board.cells.map((cell, index) => {
      const handeOnSquareClick = () => {
        if (gameOver) {
          console.log("Game Over, can't make move");
          return;
        }
        dispatch(actions.game.makeMove.base(index));
      };
      return (
        <Square key={`square-${index}`} onClick={handeOnSquareClick}>
          <Typography
            variant="h5"
            color={winner === cell ? "#00b809" : "primary"}
          >
            {cell}
          </Typography>
        </Square>
      );
    });
  }, [board, dispatch, gameOver, winner]);

  const checkWinner = useCallback(() => {
    if (winner) {
      return winner;
    }

    if (gameOver) {
      return "Draw";
    }

    return "Not yet";
  }, [winner, gameOver]);
  return (
    <Container maxWidth="xs">
      <Wrapper>
        <Typography variant="h2">Naughts &{`\n`}Crosses</Typography>
        <Space verticaloffset={4} />
        <BoardContainer>
          <StyledBoard>{renderSquares()}</StyledBoard>
        </BoardContainer>
        <Space verticaloffset={4} />
        <Typography variant="body1">Current player: {currentPlayer}</Typography>
        <Typography variant="body1">Winner: {checkWinner()}</Typography>
        <Space verticaloffset={2} />
        <LoadingButton
          variant="outlined"
          onClick={handleNewGameClick}
          isLoading={gameRequestStatus === RequestStatus.Pending}
        >
          Start new game
        </LoadingButton>
      </Wrapper>
    </Container>
  );
};

export default Game;
