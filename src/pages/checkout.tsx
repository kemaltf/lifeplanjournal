import { ContainerPadCol } from "@/styles/SharedStyles";
import Image from "next/image";
import React from "react";
import InputNumber from "../components/atoms/InputNumber";
type Props = {};

const checkout = (props: Props) => {
  return (
    <ContainerPadCol style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Your Shopping Bag</h1>
      <div style={{ textAlign: "start", paddingTop: "60px" }}>
        <h4>Your items</h4>
        <form>
          <Table>
            <tbody>
              <Row>
                <td style={{ width: "20%" }}>
                  <ImageSection>
                    <Image
                      src={"/images/example_product_front.webp"}
                      fill
                      style={{ objectFit: "cover" }}
                      alt="tes"
                    ></Image>
                  </ImageSection>
                </td>
                <td style={{ width: "50%" }}>
                  <TextSection>
                    <h4>Planner 2024</h4>
                    <small>
                      Monthly Planner + Weekly Horizontal / 1st January 202331st
                      December 2023
                    </small>
                    <p>Cover: Personalised Name on Cover</p>
                    <p>Name Personalisation: Joni bauman</p>
                    <p>Select Font: Brush Script</p>
                  </TextSection>
                </td>
                <td style={{ width: "6%" }}>
                  <InputNumberSection>
                    <InputNumber
                      initialValue={1}
                      min={1}
                      max={10}
                      step={1}
                    ></InputNumber>
                  </InputNumberSection>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Money>Rp 100.000</Money>
                </td>
              </Row>
            </tbody>
          </Table>
        </form>
      </div>
    </ContainerPadCol>
  );
};

export default checkout;

import styled from "styled-components";
import test from "node:test";

const Table = styled.table`
  width: 100%;
  background-color: yellow;
  max-width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const ImageSection = styled.div`
  display: flex;
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
`;

export const TextSection = styled.div`
  width: 100%;
  padding: 10px;
`;

export const InputNumberSection = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Row = styled.tr``;

export const Money = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
