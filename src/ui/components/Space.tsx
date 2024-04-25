import styled from "styled-components";

const DEFAULT_SCALE_FACTOR = 8; // FIXME: Should probably pull from MUI / theme confing

const Container = styled.div<{
  verticaloffset: number;
  horizontaloffset: number;
}>`
  margin-bottom: ${(p) => p.verticaloffset * DEFAULT_SCALE_FACTOR}px;
  margin-right: ${(p) => p.horizontaloffset * DEFAULT_SCALE_FACTOR}px;
  pointer-events: none;
`;

interface Props {
  verticaloffset?: number;
  horizontaloffset?: number;
}

const Space: React.FC<Props> = (props) => {
  return (
    <Container
      verticaloffset={props.verticaloffset ?? 0}
      horizontaloffset={props.horizontaloffset ?? 0}
    />
  );
};

export default Space;
