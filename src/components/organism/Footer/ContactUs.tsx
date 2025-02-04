import React from "react";
import { FooterContent } from "./FooterStyled";
import Link from "next/link";
type Props = {};

const ContactUs = (props: Props) => {
  return (
    <FooterContent>
      <ul>
        <li>
          <strong>Contact Us</strong>
        </li>
        <li>
          <Link href="/">hello@lifeplanjournal.com</Link>
        </li>
      </ul>
    </FooterContent>
  );
};

export default ContactUs;
