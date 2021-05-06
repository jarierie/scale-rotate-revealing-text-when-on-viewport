import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #0f0f0f;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 80%;
  height: auto;
`;
const OneLineContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  p {
    font-size: 26px;
    color: white;
  }
`;
const HeaderContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 100px;
    color: white;
  }
`;
const Main = () => {
  const ref = useRef(null);

  // animation
  const animation = (target) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current.childNodes[target],
        scrub: 3,
        delay: 1,
        duration: 1,
        start: "top 90%",
      },
    });
    tl.fromTo(
      ref.current.childNodes[target],
      { opacity: 0, rotateX: 100 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 3,
        transformOrigin: "0% 0%",
      }
    );
  };

  useEffect(() => {
    let i;
    for (i = 0; i < ref.current.childNodes.length; i++) {
      animation(i);
    }
  }, []);
  return (
    <>
      <Container>
        <HeaderContainer>
          <p>ScrollDown</p>
        </HeaderContainer>
      </Container>
      <Container>
        <TextContainer ref={ref}>
          <OneLineContainer>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages,
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages,
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages,
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages,
            </p>
          </OneLineContainer>
          <OneLineContainer>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </OneLineContainer>
        </TextContainer>
      </Container>{" "}
      <Container></Container>
    </>
  );
};

export default Main;
