import * as C from "./styles";

const Separator = () => {
  return (
    <C.Wrapper>
      <C.Circle style={{ left: -12 }} />
      <C.Line />
      <C.Circle style={{ right: -12 }} />
    </C.Wrapper>
  );
};

export default Separator;
