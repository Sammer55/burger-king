import styled from "styled-components/native";

export const FlatList = styled.FlatList.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    gap: 8,
  },
}))`
  padding: 8px;
`;
