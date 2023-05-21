import styled from "styled-components";

export const DetailCheckoutContainer = styled.div`
  width: 350px;
  border: 1px solid #d6dfeb;
  box-shadow: rgba(141, 150, 170, 0.4) 0px 1px 4px;
  border-radius: 8px;
  padding: 20px;
  height: auto;

  &.fixed {
    top: 60px;
    left: ${(props) => props.fixedPos};
    position: fixed;
  }
  &.normal {
    inset: 102px auto auto 0px;
    position: absolute;
  }
  &.normaldown {
    inset: ${(props) => props.containerHeight - props.containerHeightInner - 20}px auto auto 0px;
    position: absolute;
  }
`;
export const SummaryContainer = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 15px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalFinalPriceContainer = styled.div`
  padding-bottom: 15px;
`;

export const TotalFinalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Promo = styled.div`
  padding: 10px 0 15px 0;
  border-bottom: 5px solid #f3f4f5;
  margin-bottom: 10px;
`;
