import { useState } from "react";
import { View } from "react-native";
import { couponsTabs } from "../../db/coupons";
import * as C from "./styles";
import Tab from "./tab";

const TabBar = ({ onSelect, selectedTab }) => {
  const renderItem = ({ item }) => (
    <Tab item={item} onSelect={onSelect} selectedTab={selectedTab} />
  );

  const keyExtractor = (item) => item.id;

  return (
    <View>
      <C.FlatList
        data={couponsTabs}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TabBar;
