import City from '@/../public/images/city.jpg';
import { ArrowLeft, ArrowRight } from '@/utils/commonUtils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const ProjectsContainer = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const TopContainer = styled.div``;

const BottomContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 75vh;

  @media (min-width: 350px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  div.slick-slider {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff8c00;
  margin-bottom: 30px;

  @media (min-width: 350px) {
    font-size: 2rem;
    margin-bottom: 24px;
  }
`;

const ProjectGrid = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 350px) {
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
  }

  div.slick-slider {
    padding: 20px;
  }
`;

const ProjectCard = styled.div`
  backgroun-color: #444;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3x;
  width: auto !important;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  gap: 10px;
  text-align: justify;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #ff8c00;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const TechBadge = styled.span`
  background-color: #555;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const Button = styled.a`
    padding: 8px 15px;
    background-color: #ff8c00;
    color: #fff;
    border-radius: 5px;
    font-weight: 500;
    text-decoration: none;
    transition: background-color: 0.3s;

    &:hover {
        background-color: #e07b00;
    }
`;

const Projects = ({ isDesktop }: { isDesktop: boolean }) => {
  const slideRef = useRef<any>();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 3 : 1,
    slidesToScroll: 1,
    centerPadding: '120px',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    prevArrow: <ArrowLeft onClick={() => slideRef.current?.slickPrev()} />,
    nextArrow: <ArrowRight onClick={() => slideRef.current?.slickNext()} />,
  };

  const cards = Array.from({ length: 6 }, (_, index) => index);

  return (
    <ProjectsContainer
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <TopContainer>
        <Title>Featured Projects</Title>
      </TopContainer>

      <BottomContainer>
        <ProjectGrid>
          <Slider {...settings}>
            {cards.map((item) => (
              <ProjectCard key={item}>
                <Image
                  src={City}
                  alt="city"
                  style={{
                    width: '100%',
                    height: '180px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <ProjectContent>
                  <ProjectTitle>{`Platform ${item}`}</ProjectTitle>
                  <ProjectDescription>A full-stack bulalal</ProjectDescription>
                  <TechStack>
                    {['React', 'Next.js', 'TypeScript'].map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </TechStack>
                  <ButtonContainer>
                    <Button href="https://github.com/DongHyeonKim-tech/pf">
                      Live Demo
                    </Button>
                    <Button href="https://ggomi.vercel.app/">GitHub</Button>
                  </ButtonContainer>
                </ProjectContent>
              </ProjectCard>
            ))}
          </Slider>
        </ProjectGrid>
      </BottomContainer>
    </ProjectsContainer>
  );
};

export default Projects;
