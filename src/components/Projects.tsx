import adminImage from '@/../public/images/admin.png';
import AssessmentImage from '@/../public/images/assesment.png';
import bookCrawlingImage from '@/../public/images/book_crawling.png';
import egaiImage from '@/../public/images/egai.png';
import grosImage from '@/../public/images/gros.png';
import hongikChatbotImage from '@/../public/images/hongik_chatbot.png';
import kistepImage from '@/../public/images/kistep.png';
import learningImage from '@/../public/images/learning.png';
import meaPrjImage from '@/../public/images/mea_prj.png';
import starnetImage from '@/../public/images/starnet.png';
import teamsMngImage from '@/../public/images/teams_mng.png';
import tipaImage from '@/../public/images/tipa.png';
import tipaSejongImage from '@/../public/images/tipa_sejong.png';
import { Modal } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
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
  max-width: 1800px;

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const projectData = [
    {
      title: '학사정보 알림 챗봇',
      role: 'Front-end, Back-end, Deployment',
      link: null,
      team: 1,

      image: hongikChatbotImage,
      description:
        '대학교 재학 중 많은 학생들이 학교 홈페이지에 있는 정보를 잘 찾지 못해 헤매는 모습을 보고 학생들의 편의를 증진시키기 위해 텔레그램 챗봇 기반으로 직접 개발한 챗봇입니다. Python으로 개발했으며 Heroku에 배포하였습니다. 변동이 비교적 적은 데이터(eg. 과 사무실 위치 및 전화번호)는 반기에 한번, 그 외 정보(eg. 학식)는 일주일에 한번 Heroku Scheduler를 활용해 직접 수집하여 Clear DB에 저장하여 활용했습니다.',
      techStack: ['Python', 'Heroku', 'Telegram API', 'ClearDB'],
    },
    {
      title: '도서 정보 데이터 수집 기반 검색 웹 구현',
      role: 'Data Collection and Processing, Front-end, Back-end, Deployment',
      link: null,
      team: 1,

      image: bookCrawlingImage,
      description:
        'Python을 활용해 도서 데이터 수집 코드를 직접 개발하였으며 Ubuntu 서버 환경에서 cron을 사용해 데이터 수집을 자동화했습니다. 수집한 데이터는 서버, 로컬 양쪽의 Mysql DB에 저장했습니다. 향후 기업 자체 서비스 개발을 위해 데이터 가공 및 정제를 진행하였으며 Django restframework로 간단한 검색 샘플 웹 페이지도 구현하였습니다',
      techStack: ['MySQL', 'Django RestFramework', 'BS4', 'React'],
    },
    {
      title: '한국과학기술기획평가원 통합연구시스템 솔루션',
      role: 'Front-end, Back-end, Deployment',
      link: null,
      team: 12,
      image: kistepImage,
      description:
        '프론트엔드는 React.js(Redux로 상태관리), 백엔드는 Django restframework를 사용한 프로젝트입니다. DB는 MariaDB를 사용하였으며 Docker를 사용해 로컬 및 개발 환경에서, Podman으로 운영 환경에서 각각 배포하였습니다. 형상 관리에는 Git Lab을 사용했습니다.',
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
      role: 'Front-end, Back-end, Deployment',
      link: null,
      team: 15,
      image: tipaImage,
      description:
        '프론트엔드는 React.js(Redux로 상태관리), 백엔드는 Django restframework를 사용한 프로젝트입니다. DB는 MariaDB를 사용하였으며 Docker를 사용해 로컬, 개발, 운영 환경에서 각각 배포하였습니다. 형상 관리에는 Git Lab을 사용했습니다.',
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
      role: 'Front-end, Back-end, Deployment',
      link: 'https://starnet.euso.kr/',
      team: 15,
      image: starnetImage,
      description:
        '프론트엔드는 React.js(Redux로 상태관리), 백엔드는 Django restframework를 사용한 프로젝트입니다. DB는 MariaDB를 사용하였으며 Docker를 사용해 로컬, 개발, 운영 환경에서 각각 배포하였습니다. 형상 관리에는 Git Lab을 사용했습니다. 소셜로그인을 활용해 구글, 네이버, 카카오로 로그인이 가능하도록 구현했습니다.',
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
      role: 'Front-end, Back-end, Deployment, Web Publishing',
      link: null,
      team: 30,
      image: tipaSejongImage,
      description:
        '프론트엔드는 React.js, 백엔드는 Spring framework를 사용한 프로젝트입니다. DB는 Mysql을 사용하였으며 Jenkins를 사용해 로컬, 개발, 운영 환경에서 각각 배포하였습니다. 형상 관리에는 svn을 사용했습니다.',
      techStack: ['React.js', 'Spring Framework', 'MySQL', 'Jenkins', 'SVN'],
    },
    {
      title: '평가인증 시스템',
      role: 'Front-end, Back-end, Deployment',
      link: null,
      team: 7,

      image: AssessmentImage,
      description:
        '평가인증 시스템은 React, Next.js, TypeScript, Docker, ASP.NET, MSSQL을 사용해 개발된 플랫폼으로, DB ERD 재설계 및 프로시저 및 API 수정, 데이터 이관을 통해 시스템을 최적화했습니다. 평가 페이지와 전사 결과 차트 페이지 외에도 평가 신청, 실습형 평가, 관리자 기능 등 주요 모듈에서 여러 화면과 모달, 프로시저와 API를 신규 또는 수정 개발했으며, Nginx 기반 로드밸런싱과 무중단 배포(blue-green) 방식을 도입해 안정성을 강화했습니다. 또한, Apache JMeter를 활용한 성능 테스트와 API 명세서 작성을 통해 확장성과 유지보수성을 높였으며, Tour 기능 등 사용자 편의 기능을 추가하여 사용자 경험을 크게 향상시켰습니다.',
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
      role: 'Front-end, Back-end, Deployment',
      link: null,
      team: 4,

      image: learningImage,
      description:
        '러닝 웹 시스템은 React, Next.js, TypeScript, Docker, ASP.NET, MSSQL을 활용해 개발된 플랫폼으로, DB ERD 재설계, 프로시저와 API 전체 수정, 데이터 이관을 통해 안정성과 확장성을 확보했습니다. 사용자 경험 향상을 위해 사이드바 접힘(collapse) 기능에 따라 화면이 동적으로 변경되도록 UI를 개선했으며, 러닝 웹 링크와 각 세션별 최신 영상을 자동 재생할 수 있도록 개발을 완료했습니다. 프론트엔드와 백엔드의 통합적인 작업을 통해 효율성과 사용자 편의성을 극대화했습니다.',
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
      role: 'Front-end, Deployment',
      link: null,
      team: 1,

      image: teamsMngImage,
      description:
        '팀즈 관리 시스템은 React, Next.js, TypeScript를 기반으로 Microsoft Graph API와 PM2를 활용해 개발 및 배포된 프로젝트입니다. Azure App을 생성하고 관리하며, 팀즈의 팀과 채널 인원을 추가 및 제외할 수 있는 관리 기능을 구현했습니다. 또한, 평가인증 시스템과 연동하여 평가 참여 인원을 팀즈 채널에 자동으로 추가하는 기능을 개발해 작업의 편의성과 효율성을 크게 향상시켰습니다. 이를 통해 Microsoft 365 환경에서의 협업과 관리 프로세스를 최적화했습니다.',
      techStack: ['React', 'Next.js', 'TypeScript', 'PM2', 'GraphAPI'],
    },
    {
      title: '관리자 시스템',
      role: 'Front-end, Back-end, Deployment',
      link: null,
      team: 1,

      image: adminImage,
      description:
        '관리자 시스템은 React, Next.js, TypeScript를 기반으로 Docker, Django, ASP.NET, MSSQL을 활용하여 개발된 프로젝트로, 템플릿 관리와 미디어 콘텐츠 관리를 주요 기능으로 구현했습니다. 템플릿 조회 및 파일 업로드 기능을 포함한 템플릿 관리 모듈과 미디어 콘텐츠 및 카테고리 관리 기능을 프론트엔드와 백엔드에서 통합적으로 개발하여 관리의 효율성과 편리성을 크게 향상시켰습니다.',
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
      role: 'Front-end, Deployment',
      link: null,
      team: 10,
      image: meaPrjImage,
      description:
        '수준 측정 시스템은 React, Next.js, TypeScript를 기반으로 Docker, ASP.NET, MSSQL을 활용하여 개발 중인 프로젝트입니다. Sunburst 차트를 개발하고 데이터 입력을 자동화하여 시각화와 데이터 처리의 효율성을 높였으며, 각 페이지와 모달 UI를 직접 퍼블리싱했습니다. 또한, API 명세서를 작성해 개발 프로세스의 명확성을 확보하였습니다.',
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
      role: 'Front-end, Web Publishing',
      link: 'https://egai.brdg.kr',
      team: 3,

      image: egaiImage,
      description:
        'EG AI 데이터 학습 모델 시스템은 React, Next.js, TypeScript, Supabase를 기반으로 개발된 프로젝트로, 데이터를 활용한 학습 모델을 생성하는 플랫폼입니다. 프로젝트에서 소셜 로그인(구글, 네이버, 카카오)을 구현하여 사용자 편의성을 높였으며, 데이터를 효율적으로 처리할 수 있도록 데이터 업로드 기능을 개발했습니다. 또한, 퍼블리싱과 프론트엔드 개발을 담당하여 사용자 친화적인 UI와 직관적인 인터페이스를 구현했습니다.',
      techStack: ['React', 'Next.js', 'TypeScript', 'Supabase'],
    },
    {
      title: 'Gros 그린 리모델링 개선',
      role: 'Front-end',
      // link: 'https://gros.brdg.kr',
      link: null,
      team: 5,

      image: grosImage,
      description:
        'Gros 그린 리모델링 개선 시스템은 React, Next.js, TypeScript, Supabase를 기반으로 개발된 프로젝트로, 기존 건축물의 에너지 성능을 향상시키는 최적의 개선 요소를 도출하는 플랫폼입니다. 프로젝트에서 프론트엔드 개발을 담당하며, 여러 페이지에 걸쳐 데이터를 효율적으로 관리하고 처리하는 기능을 구현했습니다. 이를 통해 사용자가 개선 요소 데이터를 직관적으로 확인하고 최적의 조합을 선택할 수 있도록 지원했습니다.',
      techStack: ['React', 'Next.js', 'TypeScript', 'Supabase'],
    },
  ];
  const slideRef = useRef<any>();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 5 : 1,
    slidesToScroll: 1,
    centerPadding: '120px',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    // prevArrow: <ArrowLeft onClick={() => slideRef.current?.slickPrev()} />,
    // nextArrow: <ArrowRight onClick={() => slideRef.current?.slickNext()} />,
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
              <ProjectCard key={item.title} onClick={() => openModal(item)}>
                <Image
                  src={item.image}
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
                  <ProjectDescription>{item.role}</ProjectDescription>
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
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        title={
          <div style={{ color: '#fff', padding: '2px 0px 0px 16px' }}>
            <h2>{selectedProject?.title}</h2>
          </div>
        }
        styles={{
          body: {
            backgroundColor: '#333', // Modal 배경색
            padding: '0',
          },
          content: {
            backgroundColor: '#333', // Modal 배경색
            padding: '0',
          },
          header: {
            backgroundColor: '#333', // Modal 배경색
            padding: '0',
          },
        }}
        centered
        width={isDesktop ? 800 : 400} // 반응형 크기
      >
        {selectedProject && (
          <div style={{ color: '#fff' }}>
            {/* Image Section */}
            <div
              style={{
                position: 'relative',
                padding: '12px',
              }}
            >
              <Image
                src={selectedProject?.image} // 예시 이미지
                alt={selectedProject?.title}
                layout="intrinsic"
                objectFit="cover"
              />
            </div>

            <div style={{ padding: '0px 20px 20px 20px' }}>
              <p>
                <strong>역할:</strong> {selectedProject.role}
              </p>
              <p>
                <strong>Tech Stack:</strong>{' '}
                {selectedProject.techStack.toString()}
              </p>
              <div>{selectedProject.description}</div>
            </div>
          </div>
        )}
      </Modal>
    </ProjectsContainer>
  );
};

export default Projects;
