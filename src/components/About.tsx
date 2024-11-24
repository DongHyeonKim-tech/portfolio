import Profile from '@/../public/images/profile.jpg';
import { CodeEffect } from '@/utils/commonUtils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LeftContainer = styled.div``;

const RightContainer = styled.div``;

const AboutContainer = styled(motion.section)`
  position: relative;
  display: flex;
  height: 100vh;
  background-color: #111;
  color: #fff;
  padding: 20px;
  overflow: hidden;

  @media (min-width: 350px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff8c00;
  margin-bottom: 16px;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  color: #ddd;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #aaa;
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
  line-height: 1.6;
  white-space: pre-line;

  @media (min-width: 1200px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;

  @media (min-width: 1200px) {
    gap: 15px;
  }
`;

const SocialButton = styled.a`
  padding: 10px 15px;
  background-color: #ff8c00;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e07b00;
  }

  @media (min-width: 1200px) {
    padding: 12px 20px;
    font-size: 1rem;
  }
`;

const DisabledSocialButton = styled.a`
  padding: 10px 15px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  cursor: not-allowed;

  &:hover {
    background-color: #333;
  }

  @media (min-width: 1200px) {
    padding: 12px 20px;
    font-size: 1rem;
  }
`;

const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 20px;

  @media (min-width: 1200px) {
    width: 450px;
    height: 550px;
    margin-top: 30px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer
      id={'about'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CodeEffect id="code-effect">Dev</CodeEffect>
      <LeftContainer>
        <Title>{'Hello World!'}</Title>
        <SubTitle>풀스택 웹 개발자 김동현입니다.</SubTitle>
        <Description>
          {`사용자 친화적인 접근 방식을 통해 문제를 해결하고
          비즈니스 가치를 창출하는 데 주력하는 4년 차 풀스택 개발자입니다.
          
          1. 디자인과 개발의 경계를 연결하며,
          직관적인 인터페이스 및 강력한 백엔드 아키텍쳐 구현을 통해
          사용자가 만족하는 경험을 제공합니다.

          2. 원활한 협업과 소통을 바탕으로
          완성도 높은 프로젝트의 성공을 위해
          데이터 기반의 분석으로 비즈니스 니즈를 충족시킵니다`}
        </Description>
        <SocialLinks>
          <SocialButton
            href={'https://github.com/DongHyeonKim-tech'}
            target={'_blank'}
          >
            GitHub
          </SocialButton>
          <DisabledSocialButton href={'https://'} target={'_blank'}>
            Notion
          </DisabledSocialButton>
        </SocialLinks>
      </LeftContainer>

      <RightContainer>
        <ProfileImageContainer>
          <Image
            src={Profile}
            alt={'profile'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ProfileImageContainer>
      </RightContainer>
    </AboutContainer>
  );
};

export default About;
