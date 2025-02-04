import React from "react";
import { FooterContent, SocialMediaIcon, InputStyled, ContainerColStyled } from "./FooterStyled";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

import { ButtonStandard } from "@/components/atoms/Button/ButtonStyled";
import Link from "next/link";
type Props = {};

const Subscribe = (props: Props) => {
  return (
    <FooterContent>
      <ContainerColStyled>
        <div>
          <p>
            <span>
              <strong>Subscribe to Life Plan Journal newsletter</strong>{" "}
            </span>
          </p>
          <p>
            <span>Get 10% off your first purchase!</span>
          </p>
        </div>
        <form>
          <InputStyled type="text"></InputStyled>
          <ButtonStandard type="submit" padding="0" borderRad="0 5px 5px 0">
            Submit
          </ButtonStandard>
        </form>
        <div>
          <p>
            <span>
              <strong>Our social media</strong>{" "}
            </span>
          </p>
          <SocialMediaIcon>
            <li>
              <Link href={"https://instagram.com/lifeplanjournal"} target="_blank">
                <FaInstagram size="30px" />
              </Link>
            </li>
            <li>
              <Link href={"https://tiktok.com/lifeplanjournal"} target="_blank">
                <FaTiktok size="30px" />
              </Link>
            </li>
            <li>
              <Link href={"https://youtube.com/lifeplanjournal"} target="_blank">
                <FaYoutube size="30px" />
              </Link>
            </li>
            <li>
              <Link href={"https://shopee.com/lifeplanjournal"} target="_blank">
                <SiShopee size="30px" />
              </Link>
            </li>
          </SocialMediaIcon>
        </div>
      </ContainerColStyled>
    </FooterContent>
  );
};

export default Subscribe;
