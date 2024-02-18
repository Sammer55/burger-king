import styled from "styled-components/native";

export const Wrapper = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  width: 100%;
  border: 1px dashed ${({ theme }) => theme.colors.background};
`;

export const Circle = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
`;
