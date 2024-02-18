import * as C from "./styles";
import Separator from "./separator";
import Club from "./club";
import formatCoin from "../../utils/formatCoin";

const Coupon = ({ item }) => {
  const handleOpenCoupon = () => {};

  return (
    <C.Wrapper onPress={handleOpenCoupon}>
      <C.Content>
        <Club skipTheLine={item?.skipTheLine} points={item?.points} />
        <C.Picture source={item?.image} />
        <C.ProductDescription>
          <C.ProductName>{item?.name}</C.ProductName>
          {!!item?.description && (
            <C.ProductAditional>{item?.description}</C.ProductAditional>
          )}
        </C.ProductDescription>
      </C.Content>

      <Separator />

      <C.WrapperPrice>
        <C.Price>{formatCoin(item?.price)}</C.Price>
      </C.WrapperPrice>
    </C.Wrapper>
  );
};

export default Coupon;
