import React from "react";
import UserNav from "@/components/organism/UserNav";
import OrderListComponent from "@/components/organism/OrderListComponent";
type Props = {};

const OrderList = (props: Props) => {
  return (
    <UserNav>
      <OrderListComponent></OrderListComponent>
    </UserNav>
  );
};

export default OrderList;
