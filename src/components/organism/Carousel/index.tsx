import React from "react";
import styled from "styled-components";

type Props = {};

const index = (props: Props) => {
  return (
    <SlideContainer>
      <SlideContent>
        <CardWrapper>
          <Card>
            <ImageContent>
              <ImageTitle>
                <h3>Lorem ipsum dolor.</h3>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ipsa distinctio aliquam.</p>
                <Button>view more</Button>
              </ImageTitle>
            </ImageContent>
          </Card>
        </CardWrapper>
      </SlideContent>
    </SlideContainer>
  );
};

export default index;
export const SlideContainer = styled.div`
  background-color: red;
  height: 80vh;
  width: 100%;
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
`;
export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const ImageContent = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const ImageTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 50px;
  justify-content: center;
  align-items: left;
`;
export const Button = styled.button`
  border: none;
  font-size: 16px;
  color: #fff;
  padding: 8px 16px;
  background-color: blueviolet;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c097e5;
  }
`;
