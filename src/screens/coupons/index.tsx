import * as C from "./styles";
import Coupon from "../../components/coupon";
import { coupons, couponsTabs } from "../../db/coupons";
import TabBar from "../../components/tabBar";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CouponsScreen = () => {
  const [selectedTab, setSelectedTab] = useState(couponsTabs[0]);

  const { top } = useSafeAreaInsets();

  const renderItem = ({ item }) => <Coupon item={item} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <C.Wrapper paddingTop={top}>
      <C.Content>
        <TabBar onSelect={setSelectedTab} selectedTab={selectedTab} />
        <C.FlatList
          data={coupons}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={2}
        />
      </C.Content>
    </C.Wrapper>
  );
};

export default CouponsScreen;
