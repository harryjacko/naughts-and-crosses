import styled from "styled-components";

const DEFAULT_SCALE_FACTOR = 8; // FIXME: Should probably pull from MUI / theme confing

const Container = styled.div<{
  $verticalOffset: number;
  $horizontalOffset: number;
}>`
  margin-bottom: ${(p) => p.$verticalOffset * DEFAULT_SCALE_FACTOR}px;
  margin-right: ${(p) => p.$horizontalOffset * DEFAULT_SCALE_FACTOR}px;
  pointer-events: none;
`;

interface Props {
  verticaloffset?: number;
  horizontaloffset?: number;
}

const Space: React.FC<Props> = (props) => {
  return (
    <Container
      $verticalOffset={props.verticaloffset ?? 0}
      $horizontalOffset={props.horizontaloffset ?? 0}
    />
  );
};

export default Space;
