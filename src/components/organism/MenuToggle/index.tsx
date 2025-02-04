import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { NavLinkContainer, NavLinkButtonContainer, BorderBottom } from "./MenuToggleStyled";
import LinkButton from "@/components/atoms/LinkButton";
type Props = {};
const hrefs = { "Personal Profile": "/user/profile", "Order History": "/user/orderlist", "Address List": "/user/addresslist" };
const index = (props: Props) => {
  // router check
  const router = useRouter();
  const currentRoute = router.pathname;

  // set up border bottom animation
  const containerRefs = useRef([]); // container collection
  const [containerWidth, setContainerWidth] = useState([]); // container width collection
  const [activeLink, setActiveLink] = useState(0); // current active link
  const [leftPosition, setLeftPosition] = useState(null); // left position

  // function for colecting the ref html elements
  const addComponentRef = (ref) => {
    if (ref) {
      containerRefs.current.push(ref);
    }
  };

  // function for measure container width
  const getContainerWidth = () => {
    let widthRes = [];
    for (let i = 0; i < containerRefs.current.length; i++) {
      const ref = containerRefs.current[i];
      if (ref) {
        widthRes.push(ref.offsetWidth);
      }
    }
    setContainerWidth(widthRes);
  };

  // function for get position
  const getPosition = () => {
    let sum = 0;
    for (let i = 0; i < activeLink; i++) {
      if (activeLink != 0) {
        sum += containerWidth[i];
      }
    }
    return sum;
    // setLeftPosition(sum);
  };

  /**
   * Calculate screen width when mounting for the first time
   */
  useEffect((): (() => void) => {
    const profileIndex = Object.keys(hrefs).findIndex((key) => hrefs[key] === currentRoute);
    setActiveLink(profileIndex);
    getContainerWidth();
    // getPosition();
    const handleResize = (): void => {
      // getPosition();
      getContainerWidth();
    };
    window.addEventListener("resize", handleResize); // call handleResize when window has changed
    return () => {
      window.removeEventListener("resize", handleResize); // remove event listener when the component has unmounted
    };
  }, [activeLink]);
  useEffect(() => {
    if (containerWidth.length > 0) {
      setLeftPosition(getPosition());
    }
  }, [containerWidth]);
  return (
    <div>
      <NavLinkContainer>
        {Object.keys(hrefs).map((key) => (
          <NavLinkButtonContainer key={key} ref={(ref) => addComponentRef(ref)}>
            <LinkButton href={hrefs[key]} currentRoute={currentRoute}>
              {key}
            </LinkButton>
          </NavLinkButtonContainer>
        ))}
        <BorderBottom position={leftPosition} width={containerWidth[activeLink]}></BorderBottom>
      </NavLinkContainer>
    </div>
  );
};

export default index;
