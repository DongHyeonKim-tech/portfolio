import GGOMI from '@/../public/images/ggomi.jpg';
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

  @media (min-width: 1200px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;

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

const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 20px;

  @media (min-width: 1200px) {
    width: 150px;
    height: 150px;
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
      <CodeEffect id="code-effect">동현</CodeEffect>
      <LeftContainer>
        <Title>{'Hi'}</Title>
        <SubTitle>blablablal</SubTitle>
        <Description>bulalalala</Description>
        <SocialLinks>
          <SocialButton href={'https://'} target={'_blank'}>
            GitHub
          </SocialButton>
          <SocialButton href={'https://'} target={'_blank'}>
            Notion
          </SocialButton>
        </SocialLinks>
      </LeftContainer>

      <RightContainer>
        <ProfileImageContainer>
          <Image
            src={GGOMI}
            alt={'ggomi'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ProfileImageContainer>
      </RightContainer>
    </AboutContainer>
  );
};

export default About;
