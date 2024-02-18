import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity<{ isSelected?: boolean }>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.background : theme.colors.burger};
  padding: 8px;
  border-radius: 4px;
`;

export const Text = styled.Text<{ isSelected?: boolean }>`
  font-family: "FlameSans";
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.burger : `${theme.colors.background}90`};
`;
