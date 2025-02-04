import styled from "styled-components";
export const ProductCartContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid lightgray;
  flex-direction: column;
`;

export const ImageSection = styled.div`
  display: flex;
  position: relative;
  aspect-ratio: 1 / 1;
  width: 18%;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100px;
  }
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
  margin-top: 30px;
  display: flex;
  width: 100%;
  gap: 30px;
  @media (min-width: 768px) and (max-width: 1023px) {
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Recommendation = styled.div`
  width: 70%;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RecommendationCards = styled.div`
  display: flex;
  gap: 15px;
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const RecommendationCard = styled.div`
  display: flex;
  width: calc(100% / 3);
  border: 1px solid var(--gog-gray);
  padding: 3px;
  border-radius: 8px;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(100% / 2);
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ImageSectionMini = styled.div`
  position: relative;
  width: 60%;
  min-width: 60px;
  max-width: 60px;
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
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 12px;
    color: var(--gog-primary);
    font-weight: 600;
  }
  small {
    font-size: 12px;
    color: var(--gog-primary);

    display: block;
    font-weight: 500;
  }
  del {
    font-size: 10px;
    color: var(--gog-gray);
    margin-right: 4px;
  }
`;
export const AddToCart = styled.a`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 100%;
  font-weight: 300;
  padding-right: 5px;

  &:hover {
    color: var(--gog-pastel-teal-darker);
  }
  > svg {
    aspect-ratio: 1 / 1;
    max-width: 30px;
    min-width: 20px;
    height: auto;
    color: var(--gog-primary);
  }
  > svg:hover {
    color: var(--gog-pastel-teal-darker);
  }
`;
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 40%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--gog-gray);
`;

export const TotalDisc = styled(Total)`
  border-bottom: 1px solid var(--gog-gray);
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

export const Promo = styled.div`
  padding: 20px 0;
  border-bottom: 5px solid #f3f4f5;
  margin-bottom: 10px;
`;

export const YouMayAlsoLike = styled.h4`
  margin-bottom: 10px;
  width: 100%;
  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;
