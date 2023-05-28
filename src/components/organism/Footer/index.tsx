import { Container, ContainerCol } from "@/styles/SharedStyles";
import React from "react";
import { FooterContainer, FooterContent, FooterInnerContainer, SocialMediaIcon, InputStyled, ContainerColStyled, Icon, FooterMark } from "./FooterStyled";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { ButtonStandard } from "@/components/atoms/Button/ButtonStyled";

type Props = {};

const index = (props: Props) => {
  return (
    <FooterContainer>
      <ContainerCol>
        <FooterInnerContainer>
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
                <ButtonStandard type="submit">Submit</ButtonStandard>
              </form>
              <div>
                <p>
                  <span>
                    <strong>Our social media</strong>{" "}
                  </span>
                </p>
                <SocialMediaIcon>
                  <li>
                    <FaInstagram size="30px" />
                  </li>
                  <li>
                    <FaTiktok size="30px" />
                  </li>
                  <li>
                    <FaYoutube size="30px" />
                  </li>
                  <li>
                    <SiShopee size="30px" />
                  </li>
                </SocialMediaIcon>
              </div>
            </ContainerColStyled>
          </FooterContent>
        </FooterInnerContainer>
        <FooterMark>
          <p>Terms and Privacy Policy</p>
          <p>©2023 All Rights Reserved Life Plan Journal</p>
          <p>Made with Love in Indonesia.</p>
        </FooterMark>
      </ContainerCol>
    </FooterContainer>
  );
};

export default index;
