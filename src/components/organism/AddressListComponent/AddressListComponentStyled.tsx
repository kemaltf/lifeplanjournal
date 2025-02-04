import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 0;
`;

export const ContainerCard = styled.div`
  box-shadow: 0 1px 4px rgba(141, 150, 170, 0.4);
  padding: 16px;
  border-radius: 8px;
  border-color: var(#d6dfeb);
  display: flex;
  flex-direction: column;
`;

export const HeadCard = styled.div`
  display: flex;
  align-items: center;
`;

export const CartText = styled.div`
  font-weight: 600;
  margin-left: 10px;
`;

export const Date = styled.div`
  margin-left: 15px;
`;
export const StatusContainer = styled.div`
  margin-left: 15px;
  align-items: center;
  color: #03ac0e;
  background-color: rgb(214, 255, 222);
  display: inline-flex;
  padding: 0px 8px;
  font-weight: 600;
  border-radius: 3px;
`;

export const StatusText = styled.div``;

export const InvoiceText = styled.div`
  margin-left: 15px;
  color: var(--gog-gray);
`;

export const RecommendationCard = styled.div`
  display: flex;
  /* background-color: red; */
  width: 80%;
  margin-top: 20px;
  @media (min-width: 768px) and (max-width: 1023px) {
    /* width: calc(100% / 2); */
  }
  @media (max-width: 767px) {
    /* width: 100%; */
  }
`;
export const ImageSectionMini = styled.div`
  position: relative;
  width: 60%;
  min-width: 80px;
  max-width: 100px;
  aspect-ratio: 1 / 1;
  display: flex;
  height: auto;
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (max-width: 767px) {
    width: 50%;
    max-width: 150px;
  }
`;
export const RecommendationSectionText = styled.div`
  width: 100%;
  margin-left: 15px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  p {
    font-size: 16px;
    /* color: var(--gog-primary); */
    font-weight: 600;
  }
  small {
    font-size: 14px;
    color: var(--gog-primary);

    display: block;
    font-weight: 500;
  }
  del {
    font-size: 12px;
    color: var(--gog-gray);
    margin-right: 4px;
  }
`;

export const InnerContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  padding-left: 20px;
  border-left: 1px solid lightgray;
  align-items: start;
  justify-content: center;
  small {
    color: var(--gog-gray);
  }
  p {
    font-weight: 600;
  }
`;
