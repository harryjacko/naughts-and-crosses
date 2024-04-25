import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectors } from "../../domain/rootSelectors";
import styled from "styled-components";
import { useCallback } from "react";
import Space from "../components/Space";

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
  aspect-ratio: 1/1;
  min-width: 200px;
`;

const Square = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Game: React.FC = () => {
  const board = useSelector(selectors.game.getBoard);
  const currentPlayer = useSelector(selectors.game.getCurrentPlayer);
  const winner = useSelector(selectors.game.getWinner);
  const gameOver = useSelector(selectors.game.getGameOver);

  const renderSquares = useCallback(() => {
    return board.cells.map((cell, index) => {
      const handeOnSquareClick = () => {
        console.log("Clicked on: ", index);
      };
      return (
        <Square key={`square-${index}`} onClick={handeOnSquareClick}>
          {cell}
        </Square>
      );
    });
  }, [board]);

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
        <Typography variant="body1">Winner: {winner ?? "Not yet"}</Typography>
        <Typography variant="body1">
          Game over: {gameOver ?? "Not yet"}
        </Typography>
      </Wrapper>
    </Container>
  );
};

export default Game;
