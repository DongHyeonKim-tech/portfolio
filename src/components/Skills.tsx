import AwsIcon from '@/../public/images/aws.png';
import CssIcon from '@/../public/images/css.png';
import DjangoIcon from '@/../public/images/django.png';
import DockerIcon from '@/../public/images/docker.png';
// import ElectronIcon from '@/../public/images/electron-icon.png';
import FastapiIcon from '@/../public/images/fastapi-logo.png';
import GitIcon from '@/../public/images/git.png';
import QraphQLIcon from '@/../public/images/graphQL-icon.png';
import NongoDBIcon from '@/../public/images/mongoDB.png';
import MssqlIcon from '@/../public/images/mssql.png';
import MysqlIcon from '@/../public/images/mysql.png';
import NextIcon from '@/../public/images/next-js-icon.png';
import ReactIcon from '@/../public/images/react-icon.png';
import RecoilIcon from '@/../public/images/recoil-logo.png';
import ReduxIcon from '@/../public/images/redux.png';
import RestfulapiIcon from '@/../public/images/restfulapi.png';
import SpringIcon from '@/../public/images/spring.png';
import SupabaseIcon from '@/../public/images/supabase_icon.png';
import TypescriptIcon from '@/../public/images/typescript.png';
import ZustandIcon from '@/../public/images/zustand.png';
import SkillBar from '@/components/SkillBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

const SkillContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: #fff;
  padding: 20px;

  @media (min-width: 480px) {
    padding: 30px;
  }

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const TopContainer = styled.div``;

const BottomContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 50vh;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: 481px) and (max-width: 1199px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  div.slick-slider {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #ff8c00;
  margin-bottom: 16px;

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
`;

const SkillGroup = styled.div`
  display: flex !important;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  justify-content: center;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 20px;
    max-width: 600px;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    gap: 24px;
    max-width: 800px;
  }
`;

const SkillCard = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: left;
  width: 70%;

  @media (min-width: 480px) {
    padding: 18px;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const SkillTitle = styled.h3`
  color: #ff8c00;
  margin-bottom: 12px;

  @media (min-width: 480px) {
    font-size: 0.85rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

const skillData = [
  {
    title: 'Frontend',
    skills: [
      { skill: 'React', level: 90, icon: ReactIcon },
      { skill: 'Next.js', level: 90, icon: NextIcon },
      { skill: 'Redux', level: 75, icon: ReduxIcon },
      { skill: 'Zustand', level: 80, icon: ZustandIcon },
      { skill: 'Recoil', level: 60, icon: RecoilIcon },
      { skill: 'TypeScript', level: 85, icon: TypescriptIcon },
      { skill: 'CSS Modules', level: 75, icon: CssIcon },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { skill: 'Django', level: 80, icon: DjangoIcon },
      { skill: 'FastAPI', level: 80, icon: FastapiIcon },
      { skill: 'Spring Boot', level: 60, icon: SpringIcon },
      { skill: 'RESTful API', level: 90, icon: RestfulapiIcon },
      { skill: 'GraphQL', level: 50, icon: QraphQLIcon },
    ],
  },
  {
    title: 'Others',
    skills: [
      { skill: 'MySQL', level: 80, icon: MysqlIcon },
      { skill: 'MSSQL', level: 80, icon: MssqlIcon },
      { skill: 'MongoDB', level: 60, icon: NongoDBIcon },
      { skill: 'Docker', level: 70, icon: DockerIcon },
      { skill: 'AWS', level: 50, icon: AwsIcon },
      { skill: 'Git', level: 80, icon: GitIcon },
      { skill: 'supabase', level: 60, icon: SupabaseIcon },
    ],
  },
];

const Skills = ({ isDesktop }: { isDesktop: boolean }) => {
  console.log('isDesktop: ', isDesktop);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: isDesktop,
  };

  const renderSkillGroups = () =>
    skillData.map((group, index) => (
      <SkillGroup key={index}>
        <SkillCard>
          <SkillTitle>{group.title}</SkillTitle>
          {group.skills.map((skill, idx) => (
            <SkillBar
              key={idx}
              skill={skill.skill}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </SkillCard>
      </SkillGroup>
    ));

  return (
    <SkillContainer id={'skills'}>
      <TopContainer>
        <Title>Technical Skills</Title>
      </TopContainer>
      <BottomContainer>
        {isDesktop ? (
          renderSkillGroups()
        ) : (
          <Slider {...settings}>{renderSkillGroups()}</Slider>
        )}
      </BottomContainer>
    </SkillContainer>
  );
};

export default Skills;
