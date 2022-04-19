import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0px 80px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  line-height: 28px;
  width: 30vw;
  height: auto;
  margin-top: 10px;
`;

const StoryOfNoice = () => {
  return (
    <Container id="coffee">
      <Image
        src="https://cdn.pixabay.com/photo/2021/06/28/10/15/coffee-6371149_960_720.jpg"
        alt=""
      />
      <Wrapper>
        <h3>關於Noice</h3>
        <P>
          從原產地的一株咖啡樹，最終成為您手中的一杯咖啡；我們堅持採購並且烘焙最高品質的咖啡，這是我們一直努力的基本原則；最初的十英呎到最後十英呎的珍貴體驗，為咖啡的故事做了最佳的註解，同時也塑造出咖啡家族的獨特風味及口感特性，閱讀咖啡的故事，可以讓您更瞭解咖啡，豐富您的咖啡體驗。
        </P>
      </Wrapper>
    </Container>
  );
};

export default StoryOfNoice;
