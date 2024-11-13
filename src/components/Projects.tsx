import { motion } from 'framer-motion';
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
`;

const TopContainer = styled.div``;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff8c00;
  margin-bottom: 30px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1000px;
`;

const ProjectCard = styled.div`
  backgroun-color: #444;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3x;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #ff8c00;
  margin: 0;
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

const Projects = () => {
  return (
    <ProjectsContainer
      id={'projects'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <TopContainer>
        <Title>Featured Projects</Title>
      </TopContainer>

      <BottomContainer>
        <ProjectGrid>
          <ProjectCard>
            <ProjectImage
              style={{ backgroundImage: 'url(/public/images/ggomi.jpg)' }}
            />
            <ProjectContent>
              <ProjectTitle>E-commerce Platform</ProjectTitle>
              <ProjectDescription>A full-stack bulalal</ProjectDescription>
              <TechStack>
                <TechBadge>React</TechBadge>
                <TechBadge>Next.js</TechBadge>
                <TechBadge>TypeScript</TechBadge>
              </TechStack>
              <ButtonContainer>
                <Button href="https://github.com/kimjungkook1/ggomi">
                  Live Demo
                </Button>
                <Button href="https://ggomi.vercel.app/">GitHub</Button>
              </ButtonContainer>
            </ProjectContent>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              style={{ backgroundImage: 'url(/public/images/ggomi.jpg)' }}
            />
            <ProjectContent>
              <ProjectTitle>E-commerce Platform</ProjectTitle>
              <ProjectDescription>A full-stack bulalal</ProjectDescription>
              <TechStack>
                <TechBadge>React</TechBadge>
                <TechBadge>Next.js</TechBadge>
                <TechBadge>TypeScript</TechBadge>
              </TechStack>
              <ButtonContainer>
                <Button href="https://github.com/kimjungkook1/ggomi">
                  Live Demo
                </Button>
                <Button href="https://ggomi.vercel.app/">GitHub</Button>
              </ButtonContainer>
            </ProjectContent>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              style={{ backgroundImage: 'url(/public/images/ggomi.jpg)' }}
            />
            <ProjectContent>
              <ProjectTitle>E-commerce Platform</ProjectTitle>
              <ProjectDescription>A full-stack bulalal</ProjectDescription>
              <TechStack>
                <TechBadge>React</TechBadge>
                <TechBadge>Next.js</TechBadge>
                <TechBadge>TypeScript</TechBadge>
              </TechStack>
              <ButtonContainer>
                <Button href="https://github.com/kimjungkook1/ggomi">
                  Live Demo
                </Button>
                <Button href="https://ggomi.vercel.app/">GitHub</Button>
              </ButtonContainer>
            </ProjectContent>
          </ProjectCard>
        </ProjectGrid>
      </BottomContainer>
    </ProjectsContainer>
  );
};

export default Projects;
