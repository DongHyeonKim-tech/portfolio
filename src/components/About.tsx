import GGOMI from '@/../public/images/ggomi.jpg';
import Image from 'next/image';
import styled from 'styled-components';

const LeftContainer = styled.div``;

const RightContainer = styled.div``;

const AboutContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #111;
  color: #fff;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff8c00;
  margin-bottom: 16px;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin-top: 30px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const About = () => {
  return (
    <AboutContainer id={'about'}>
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
      {/* 
      <RightContainer>
        <ProfileImage>
          <Image src={GGOMI} alt={'ggomi'} />
        </ProfileImage>
      </RightContainer> */}

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