import styled from "styled-components";

export const ButtonStandard = styled.button`
  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  height: 34px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const ButtonInputNoSpace = styled(ButtonStandard)`
  border-radius: 0 4px 4px 0;
  border: 1px solid transparent;
  padding: 5px 12px;
  color: white;
  background-color: var(--gog-primary);
  border-color: var(--gog-primary);

  &:hover {
    background-color: var(--gog-primary-dark-2);
    border-color: var(--gog-primary-dark-1);
    transition: all 0.2s ease-in-out;
  }
`;

export const ButtonNormal = styled(ButtonInputNoSpace)`
  border-radius: 4px;
  margin-left: 15px;
  width: 100%;
`;

export const ButtonNoBox = styled.button`
  border: none;
  background: none;
  color: var(--gog-pastel-teal-darker);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  &:hover {
    color: var(--gog-primary);
  }
`;
