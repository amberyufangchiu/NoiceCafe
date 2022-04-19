import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f8f8f8;
  height: 10vh;
  color: gray;
  padding-top: 2%;
  /* position: absolute;
  bottom: 0;
  left: 0; */
`;

const Footer = () => {
  return (
    <Container className="text-center align-bottom">
      <p>Copyright © Noice café 著作權所有. All rights reserved.</p>
    </Container>
  );
};

export default Footer;
