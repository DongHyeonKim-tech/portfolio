import GGOMI from '@/../public/images/ggomi.jpg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

const AboutContainer = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #111;
  color: #fff;
  text-align: center;
  padding: 0 20px;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div``;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 15px;
  color: #ff8c00;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  color: #ddd;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialButton = styled.a`
  padding: 10px 20px;
  background-color: #ff8c00;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e07b00;
  }
`;

const ProfileImage = styled.div`
    margin-top: 20px;
    width: 150px
    height: 150px;
    border-radius: 70%;
    overflow: hidden;
    img {
        width: 360px;
        height: 360px;
    }
`;

const About = () => {
  return (
    <AboutContainer
      id={'about'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <LeftContainer>
        <Title>{"Hi, I'm  Kim"}</Title>
        <SubTitle>Full Stack Developer</SubTitle>
        <Description>I specialize bulalalala</Description>
        <SocialLinks>
          <SocialButton href={'https://'} target={'_blank'}>
            GitHub
          </SocialButton>
          <SocialButton href={'https://'} target={'_blank'}>
            LinkedIn
          </SocialButton>
          <SocialButton href={'https://'} target={'_blank'}>
            Notion
          </SocialButton>
        </SocialLinks>
      </LeftContainer>

      <RightContainer>
        <ProfileImage>
          <Image src={GGOMI} alt={'ggomi'} />
        </ProfileImage>
      </RightContainer>
    </AboutContainer>
  );
};

export default About;
