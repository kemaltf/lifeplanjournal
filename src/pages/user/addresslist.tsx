import React from "react";
import UserNav from "@/components/organism/UserNav";
import AddressListComponent from "@/components/organism/AddressListComponent";
type Props = {};

const AddressList = (props: Props) => {
  return (
    <UserNav>
      <AddressListComponent>AddressList</AddressListComponent>
    </UserNav>
  );
};

export default AddressList;
