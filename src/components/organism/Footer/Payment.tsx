import React from "react";
import { FooterContent, Icon } from "./FooterStyled";

type Props = {};

function Payment({}: Props) {
  return (
    <FooterContent>
      <ul>
        <li>
          <strong>Payment</strong>
        </li>
        <li>
          <Icon src="/images/icons/qris.svg" alt="QRIS" width={80} height={20} />
        </li>
        <li>
          <Icon src="/images/icons/bca.svg" alt="QRIS" width={80} height={20} />
        </li>
      </ul>
    </FooterContent>
  );
}

export default Payment;
