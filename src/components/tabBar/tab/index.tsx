import * as C from "./styles";

type TabItem = {
  name: string;
  id: string;
};

type Props = {
  item: TabItem;
  onSelect: (value: TabItem) => void;
  selectedTab: TabItem;
};

const Tab = ({ item, onSelect, selectedTab }: Props) => {
  const handleSelectItem = () => onSelect(item);

  const isSelected = selectedTab?.id === item?.id;

  return (
    <C.Wrapper isSelected={isSelected} onPress={handleSelectItem}>
      <C.Text isSelected={isSelected}>{item?.name}</C.Text>
    </C.Wrapper>
  );
};

export default Tab;
