import styled from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.checked ? "var(--gog-pastel-teal-darker)" : "white")};
  color: ${(props) => (props.checked ? "white" : "black")};
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid var(--gog-gray);
  flex: 1;
  font-size: 13px;
`;

export const RadioInput = styled.input`
  margin-right: 10px;
`;

export const RadioLabel = styled.label``;
