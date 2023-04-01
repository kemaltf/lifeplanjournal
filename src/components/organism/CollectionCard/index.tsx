import React, { useState } from "react";
import { ContainerCard, CollectionCard, ImageCollection, CollectionCardText, ContainerColumn, CollectionCardGap } from "./CollectionCardStyled";

const images: string[] = ["https://via.placeholder.com/210/00FF00?text=1", "https://via.placeholder.com/220/00FF00?text=2", "https://via.placeholder.com/230/00FF00?text=3"];
const images2: string[] = ["https://via.placeholder.com/210/00FF00?text=1", "https://via.placeholder.com/220/00FF00?text=2"];
const Index = () => {
  return (
    <ContainerColumn>
      <ContainerCard>
        {images.map((image: string, index) => (
          <CollectionCardGap>
            <CollectionCard itemsNumber={images.length} key={index}>
              <ImageCollection image={image} key={index}></ImageCollection>
              <CollectionCardText>
                <h2>Lorem ipsum dolor sit.</h2>
                <h4>Lorem, ipsum dolor.</h4>
              </CollectionCardText>
            </CollectionCard>
          </CollectionCardGap>
        ))}
      </ContainerCard>
      <ContainerCard>
        {images2.map((image2: string, index) => (
          <CollectionCardGap>
            <CollectionCard itemsNumber={images2.length} key={index}>
              <ImageCollection image={image2} key={index}></ImageCollection>
              <CollectionCardText>
                <h2>Lorem ipsum dolor sit.</h2>
                <h4>Lorem, ipsum dolor.</h4>
              </CollectionCardText>
            </CollectionCard>
          </CollectionCardGap>
        ))}
      </ContainerCard>
      <ContainerCard>
        {images.map((image: string, index) => (
          <CollectionCardGap>
            <CollectionCard itemsNumber={images.length} key={index}>
              <ImageCollection image={image} key={index}></ImageCollection>
              <CollectionCardText>
                <h2>Lorem ipsum dolor sit.</h2>
                <h4>Lorem, ipsum dolor.</h4>
              </CollectionCardText>
            </CollectionCard>
          </CollectionCardGap>
        ))}
      </ContainerCard>
    </ContainerColumn>
  );
};
export default Index;
