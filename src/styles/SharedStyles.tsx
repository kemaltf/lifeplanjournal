import styled from "styled-components";
interface ContainerColProps {
  gap?: string;
}
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerPad = styled(Container)`
  /* background-color: red; */
  padding: 0 87px;
`;
export const ContainerCol = styled(Container)<ContainerColProps>`
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : 0)};
`;
