import styled from "styled-components";

export const InnerContainer = styled.div`
  width: 60%;
  background-color: #edf6f4;
  padding: 50px 87px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const GroupInput = styled.div`
  display: flex;
  gap: 5px;
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
