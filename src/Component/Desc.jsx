import { Button } from "bootstrap";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url("https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10%;
`;

const H1 = styled.h1`
  font-size: 50px;
  color: white;
`;

const P = styled.p`
  font-size: 24px;
  color: white;
`;

const ButtonDiv = styled.div`
  display: flex;
`;

const Btn = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: white;
  color: #080808;
  border: none;
  margin-right: 15px;
  border-radius: 20px;
`;

const Desc = () => {
  return (
    <Container>
      <H1>Noice Cafe</H1>
      <P>好的咖啡帶給你非凡的一天</P>
      <ButtonDiv>
        <Btn>淺嚐流光</Btn>
        <Btn>暢飲醇芳</Btn>
      </ButtonDiv>
    </Container>
  );
};

export default Desc;
