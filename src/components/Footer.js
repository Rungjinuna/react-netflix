import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <FooterContent>
          <FooterLinkContainer>
            <FooterLinkTitles>넷플릭스 대한민국</FooterLinkTitles>
            <FooterLinkContent>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                넷플릭스 소개
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                고객센터
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                미디어센터
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                이용약관
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                개인정보
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                회사정보
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                문의하기
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                법적고지
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                투자정보
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                입사정보
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                속도테스트
              </FooterLink>
              <FooterLink href="http://help/netflix.com/ko/node/412">
                오직 넷플릭스에서
              </FooterLink>
            </FooterLinkContent>
            <FooterDescContainer>
              <FooterDescRights>Netflix Rights Reserved</FooterDescRights>
            </FooterDescContainer>
          </FooterLinkContainer>
        </FooterContent>
      </FooterContainer>
    </div>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgba(25, 25, 25)
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitles = styled.div`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;
  &: hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
`;
