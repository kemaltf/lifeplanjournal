import styled from "styled-components";
interface InputParagraphProps {
  height: number;
}
export const InputParagraph = styled.textarea<InputParagraphProps>`
  width: 100%;
  height: ${(props) => props.height}px;
  min-height: 100px;
  border: 1px solid var(--gog-gray);
  resize: none;
  border-radius: 6px;
  display: block;
  padding: 10px;
  &:focus {
    border: 1px solid var(--gog-pastel-teal-darker);
    outline: none;
  }
  &.focus {
    border: 1px solid var(--gog-pastel-teal-darker);
    outline: none;
  }
`;
export const TextLength = styled.p`
  margin-left: auto;
  font-size: 0.8rem;
  color: var(--gog-gray);
`;
