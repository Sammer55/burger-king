import * as C from "./styles";

const Club = ({ skipTheLine, points }) => {
  return (
    <C.Wrapper skipTheLine={!!skipTheLine}>
      <C.SkipTheLine>{skipTheLine && "Fuja da fila"}</C.SkipTheLine>
      <C.Points>
        <C.Crown source={require("../../../../assets/crown.png")} />
        <C.WinPoints>
          Ganhe <C.WinPoints bold>{points} pts</C.WinPoints>
        </C.WinPoints>
      </C.Points>
    </C.Wrapper>
  );
};

export default Club;
