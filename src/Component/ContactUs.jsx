import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H3 = styled.h3`
  /* margin: 50px; */
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
`;
const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactUs = () => {
  return (
    <Container id="contactUs" className="container">
      <div className="row">
        <h3 className="col-12 text-center">聯絡我們</h3>
        <Info className="row">
          <iframe
            className="p-3 col-6"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10224.83598413843!2d120.6382787110568!3d24.165765776572254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dec4ca3a271%3A0xd8b5a337271e60e2!2z6Ie65Lit5ZyL5a625q2M5YqH6ZmiIE5hdGlvbmFsIFRhaWNodW5nIFRoZWF0ZXI!5e0!3m2!1szh-TW!2stw!4v1647277432766!5m2!1szh-TW!2stw"
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <EmailBox className="p-3 col-6">
            <form>
              <div className="form-group m-3">
                <label htmlFor="formGroupExampleInput">您的姓名</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="formGroupExampleInput2">您的信箱</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="comment">想對我們說什麼</label>
                <textarea
                  className="form-control"
                  rows={3}
                  id="comment"
                  defaultValue={""}
                />
              </div>
            </form>
            <button type="button" class="btn btn-primary m-3">
              寄送
            </button>
          </EmailBox>
        </Info>
      </div>
    </Container>
  );
};

export default ContactUs;
