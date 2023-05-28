import React from "react";
import { FooterContent } from "./FooterStyled";
import Link from "next/link";

type Props = {};

const ImportantLinks = (props: Props) => {
  return (
    <FooterContent>
      <ul>
        <li>
          <strong>Important Links</strong>
        </li>
        <li>
          <Link href="/">About us</Link>
        </li>
        <li>
          <Link href="/">Contact us</Link>
        </li>
        <li>
          <Link href="/">Collaboration</Link>
        </li>
        <li>
          <Link href="/">Joining as a partner</Link>
        </li>
        <li>
          <Link href="/">For Business</Link>
        </li>
        <li>
          <Link href="/">FAQ</Link>
        </li>
        <li>
          <Link href="/">Report bug or error</Link>
        </li>
      </ul>
    </FooterContent>
  );
};

export default ImportantLinks;
