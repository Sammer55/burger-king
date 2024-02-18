import styled from "styled-components/native";

export const Wrapper = styled.View<{ paddingTop: number }>`
  padding-top: ${({ paddingTop }) => paddingTop}px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.burger};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.burger};
`;

export const FlatList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 40,
  },
  bounces: false,
  showsVerticalScrollIndicator: false,
}))`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;
