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
  margin: 10px; // Add margin to separate cards

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
  max-width: 100%; // Ensure it doesn't exceed the parent width
  justify-content: start; // Center the tech badges within the available space
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
  const projectData = [
    {
      title: '학사정보 알림 챗봇',
      description: '기획, Front-end, Back-end, Deployment',
      link: null,
      team: 1,
      techStack: ['Python', 'Heroku', 'Telegram API', 'ClearDB'],
    },
    {
      title: '도서 정보 데이터 수집 기반 검색 웹 구현',
      description: '데이터 수집, Front-end, Back-end, Deployment',
      link: null,
      team: 1,
      techStack: ['MySQL', 'Django RestFramework', 'BS4', 'React'],
    },
    {
      title: '한국과학기술기획평가원 통합연구시스템 솔루션',
      description: 'Front-end, Back-end, Deployment',
      link: null,
      team: 12,
      techStack: [
        'React.js',
        'Redux',
        'Django RestFramework',
        'MariaDB',
        'Docker',
        'GitLab',
      ],
    },
    {
      title: '중소기업기술정보진흥원 예비평가 솔루션',
      description: 'Front-end, Back-end, Deployment',
      link: null,
      team: 15,
      techStack: [
        'React.js',
        'Redux',
        'Django RestFramework',
        'MariaDB',
        'Docker',
        'GitLab',
      ],
    },
    {
      title: '도서 분석 검색 시스템',
      description: 'Front-end, Back-end, Deployment',
      link: 'https://starnet.euso.kr/',
      team: 15,
      techStack: [
        'React.js',
        'Redux',
        'Django RestFramework',
        'MariaDB',
        'Docker',
        'GitLab',
      ],
    },
    {
      title: '중소기업기술정보진흥원 스마트추진단 업무시스템',
      description: 'Front-end, Back-end, Deployment, Web Publishing',
      link: null,
      team: 30,
      techStack: ['React.js', 'Spring Framework', 'MySQL', 'Jenkins', 'SVN'],
    },
    {
      title: '평가인증 시스템',
      description: 'Front-end, Back-end, Deployment',
      link: null,
      team: 7,
      techStack: [
        'React',
        'Next.js',
        'TypeScript',
        'Docker',
        'ASP.NET',
        'MSSQL',
        'Redux',
      ],
    },
    {
      title: '러닝 웹',
      description: 'Front-end, Back-end, Deployment',
      link: null,
      team: 4,
      techStack: [
        'React',
        'Next.js',
        'TypeScript',
        'Docker',
        'ASP.NET',
        'MSSQL',
      ],
    },
    {
      title: '팀즈 관리 시스템',
      description: 'Front-end, Deployment',
      link: null,
      team: 1,
      techStack: ['React', 'Next.js', 'TypeScript', 'PM2', 'GraphAPI'],
    },
    {
      title: '관리자 시스템',
      description: 'Front-end, Back-end, Deployment',
      link: null,
      team: 1,
      techStack: [
        'React',
        'Next.js',
        'TypeScript',
        'Docker',
        'Django',
        'ASP.NET',
        'MSSQL',
        'Recoil',
      ],
    },
    {
      title: '수준측정',
      description: 'Front-end, Deployment',
      link: null,
      team: 10,
      techStack: [
        'React',
        'Next.js',
        'TypeScript',
        'Docker',
        'ASP.NET',
        'MSSQL',
        'Zustand',
      ],
    },
    {
      title: 'EG AI 데이터 모델',
      description:
        'Front-end, Web Publishing. 데이터 모델 기반 화면 퍼블리싱 및 UI 개발.',
      link: 'https://egai.brdg.kr',
      team: 3,
      techStack: ['React', 'Next.js', 'TypeScript', 'Supabase'],
    },
    {
      title: 'Gros 그린 리모델링 개선',
      description: 'Front-end. 사용자 중심의 인터페이스 개선.',
      link: 'https://gros.brdg.kr',
      team: 5,
      techStack: ['React', 'Next.js', 'TypeScript', 'Supabase'],
    },
  ];
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
            {projectData.map((item) => (
              <ProjectCard key={item.title}>
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
                  <ProjectTitle>{item.title}</ProjectTitle>
                  <ProjectDescription>{`진행인원: ${
                    item.team === 1 ? '단독' : item.team
                  }${item.team === 1 ? '' : '명'}`}</ProjectDescription>
                  <ProjectDescription>{item.description}</ProjectDescription>
                  <TechStack>
                    {item.techStack.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </TechStack>
                  {item.link && (
                    <ButtonContainer>
                      <Button
                        onClick={() => {
                          window.open(item.link);
                        }}
                      >
                        링크
                      </Button>
                      {/* <Button href="https://ggomi.vercel.app/">GitHub</Button> */}
                    </ButtonContainer>
                  )}
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
