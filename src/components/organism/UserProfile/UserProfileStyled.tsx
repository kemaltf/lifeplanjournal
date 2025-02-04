import styled from "styled-components";

export const Container = styled.div`
  /* background-color: green; */
  display: flex;
  gap: 10px;
`;
export const ImageSection = styled.div`
  /* background-color: red; */
  width: 30%;
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
export const BioSection = styled.div`
  /* background-color: blue; */
  width: 70%;
  padding: 20px;
`;
export const ImageContainer = styled.div`
  /* background-color: gray; */
  position: relative;
  /* height: 100px; */
  width: 100%;
  padding-bottom: 100%;
  display: flex;
`;
export const Label = styled.span`
  display: inline-block;
  width: 120px;
  /* font-size: 14px; */
  margin: 10px 0;
`;
export const LabelValue = styled.span`
  margin: 10px 0;
  /* font-size: 14px; */
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 30px;
`;
