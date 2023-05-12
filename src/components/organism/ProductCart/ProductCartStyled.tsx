import styled from "styled-components";
export const ProductCartContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const ImageSection = styled.div`
  display: flex;
  position: relative;
  aspect-ratio: 1 / 1;
  width: 18%;

  @media (max-width: 767px) {
    width: 100px;
  }
`;

export const TextSection = styled.div`
  width: 60%;
  padding: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const InputNumberSection = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Row = styled.tr`
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
`;

export const Money = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 22%;
  align-items: end;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  a {
    color: var(--gog-gray);
  }

  a:hover {
    cursor: pointer;
    color: var(--gog-pastel-teal-darker);
  }
`;

export const ProductSection = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  gap: 20px;
`;

export const ButtonSection = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  gap: 20px;
  justify-content: end;
`;

export const CheckoutContainer = styled.div`
  display: flex;
`;

export const Recommendation = styled.div`
  width: 70%;
`;

export const RecommendationCards = styled.div`
  display: flex;
  gap: 15px;
`;
export const RecommendationCard = styled.div`
  display: flex;
  width: calc(100% / 3);
  gap: 10px;
`;
export const ImageSectionMini = styled.div`
  position: relative;
  width: 100%;
  max-width: 60px;
  aspect-ratio: 1 / 1;
  display: flex;
`;
export const RecommendationSectionText = styled.div`
  width: 50%;
  p {
    font-size: 13px;
    color: var(--gog-primary);
    font-weight: 600;
  }
  small {
    font-size: 12px;
    color: var(--gog-gray);
    display: block;
    font-weight: 500;
  }
`;
export const AddToCart = styled.a`
  width: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100%;
  font-weight: 300;
  > svg {
    aspect-ratio: 1 / 1;
    width: 100%;
    height: auto;
  }
`;
