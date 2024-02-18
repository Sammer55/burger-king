import { FlatList } from "react-native";
import Coupon from "../../components/coupon";
import * as C from "./styles";

const coupons = [
  {
    id: 1,
    skipTheLine: false,
    points: 10,
    image: require("../../../assets/example.png"),
    name: "2 Rodeo + 2 Cheeseburger",
    description: "+ 2 batatas pequenas + 2 free refil",
    price: 150,
  },
  {
    id: 2,
    skipTheLine: true,
    points: 25,
    image: require("../../../assets/example2.png"),
    name: "1 BK Mix Nutella",
    description: null,
    price: 12.9,
  },
  {
    id: 3,
    skipTheLine: true,
    points: 10,
    image: require("../../../assets/example3.png"),
    name: "4 BK Chicken + 1 sachet de maionese temperada",
    description: null,
    price: 9.9,
  },
];

const CouponsScreen = () => {
  const renderItem = ({ item }) => <Coupon item={item} />;

  const keyExtractor = (item) => item.toString();

  return (
    <C.Wrapper>
      <C.Content>
        <FlatList
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
