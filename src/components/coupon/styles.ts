import { Image } from "expo-image";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  background-color: white;
  border-radius: 16px;
  flex: 0.5;
  margin: 8px;
`;

export const Content = styled.View`
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const Picture = styled(Image).attrs(() => ({
  contentFit: "contain",
}))`
  width: 100%;
  height: 140px;
`;

export const ProductDescription = styled.View`
  gap: 2px;
`;

export const ProductName = styled.Text`
  color: ${({ theme }) => theme.colors.burger};
  font-size: 12px;
  text-align: center;
  max-width: 80%;
  line-height: 12px;
  font-family: "FlameBold";
  letter-spacing: 0.4px;
`;

export const ProductAditional = styled.Text`
  color: ${({ theme }) => theme.colors.burger};
  font-size: 10px;
  text-align: center;
  max-width: 80%;
  line-height: 10px;
  font-family: "FlameSans";
`;

export const WrapperPrice = styled.View`
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.bread};
  font-size: 16px;
  letter-spacing: 0.6px;
  font-family: "FlameBold";
`;
