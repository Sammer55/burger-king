import { Image } from "expo-image";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  background-color: white;
  border-radius: 16px;
  flex: 0.5;
  margin: 4px;
`;

export const Content = styled.View`
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const Picture = styled(Image)`
  width: 100%;
  height: 120px;
`;

export const ProductDescription = styled.View`
  gap: 2px;
`;

export const ProductName = styled.Text`
  color: ${({ theme }) => theme.colors.burger};
  font-size: 14px;
  text-align: center;
  max-width: 80%;
  line-height: 13px;
`;

export const ProductAditional = styled.Text`
  color: ${({ theme }) => theme.colors.burger};
  font-size: 10px;
  text-align: center;
  max-width: 80%;
  line-height: 10px;
`;

export const WrapperPrice = styled.View`
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.ketchup};
  font-size: 18px;
`;
