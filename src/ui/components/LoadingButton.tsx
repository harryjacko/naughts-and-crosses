import { Button, ButtonProps, CircularProgress } from "@mui/material";

interface Props extends ButtonProps {
  isLoading?: boolean;
}

const LoadingButton = (props: Props) => {
  const { isLoading, ...otherProps } = props;
  if (isLoading) {
    return (
      <Button {...otherProps}>
        <CircularProgress size={25} />
      </Button>
    );
  }

  return <Button {...otherProps} />;
};

export default LoadingButton;
