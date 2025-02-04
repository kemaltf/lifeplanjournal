import styled from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
`;
export const Section1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  margin-bottom: 15px;
`;
export const InputContainer = styled.div`
  padding: 50px 70px 50px 120px;
  width: 55%;
  /* background-color: #edf6f4; */
`;
export const GroupInput = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
`;

export const Gender = styled.div`
  /* background-color: white; */
  /* padding: 20px 10px 10px 10px; */
  /* border-radius: 5px; */
  /* border: 1px solid var(--gog-gray); */
  display: flex;
  flex-direction: column;
  position: relative;
  /* width: 50%; */
  /* gap: 5px; */
  width: 100%;

  &.focus {
    border: 1px solid var(--gog-pastel-teal-darker);
    outline: 1px solid var(--gog-pastel-teal-darker);
  }
`;

export const LabelStyled = styled.label`
  font-size: ${(props) => (props.hasValue ? "10px" : "13px")};
  position: absolute;
  top: -7%;
  left: 10px;
  transform: ${(props) => (props.hasValue ? "translateY(55%)" : "none")};
  color: ${(props) => (props.hasValue ? "var(--gog-pastel-teal-darker)" : "#333")};
  transition: all 0.3s ease-out;
`;
export const PopUpMenu = styled.div`
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Section2 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  position: relative;
  background: white;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.14);
  border-radius: 0 0 3px 3px;
  max-height: 500px;
  padding: 30px 30px;
  overflow-y: auto;
`;

export const Section3 = styled(Section2)`
  border-radius: 3px 3px 0 0;
  overflow-y: none;
  overflow: hidden;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--NN900, #2e3137);
  opacity: 0.7;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  z-index: 9998;
  will-change: opacity;
  transition: opacity 300ms cubic-bezier(0, 0, 0.3, 1) 0s;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 30px;
  top: calc(50%-25px);
  cursor: pointer;
`;

export const Courier = styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
  position: relative;
`;

export const CourierOption = styled.div`
  position: absolute;
  width: 100%;
`;
export const CheckoutContainerDetail = styled.div`
  display: flex;
  position: relative;
  width: 45%;
  padding-left: 74px;
  height: 100%;
`;
export const ImageSectionMini = styled.div`
  position: relative;
  min-width: 80px;
  max-width: 80px;
  aspect-ratio: 1 / 1;
  display: flex;
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (max-width: 767px) {
    width: 50%;
    max-width: 150px;
  }
`;
