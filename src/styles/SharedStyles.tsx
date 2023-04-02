import styled from "styled-components";
interface ContainerColProps {
  gap?: string;
}
interface ContainerBgProps {
  image: string;
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
export const ContainerBg = styled(Container)<ContainerBgProps>`
  background-image: url(${(props) => props.image});
  overflow: hidden;
  background-size: cover;
  background-position: center;
`;
export const ContainerBgPad = styled(ContainerBg)<ContainerBgProps>`
  padding: 0 87px;
`;
