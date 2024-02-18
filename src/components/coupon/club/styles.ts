import { Image } from "expo-image";
import styled from "styled-components/native";

export const Wrapper = styled.View<{ skipTheLine: boolean }>`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme, skipTheLine }) =>
    skipTheLine ? theme.colors.mustard : "transparent"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Points = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  gap: 6px;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Crown = styled(Image)`
  width: 15px;
  height: 13px;
`;

export const WinPoints = styled.Text`
  color: ${({ theme }) => theme.colors.burger};
  font-size: 10px;
  line-height: 10px;
  max-width: 32px;
  text-align: left;
`;

export const SkipTheLine = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.burger};
  font-size: 11px;
  line-height: 11px;
  text-transform: uppercase;
  text-align: center;
`;
