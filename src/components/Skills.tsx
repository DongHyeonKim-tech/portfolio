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
  font-size: 2rem;
  color: #ff8c00;
  margin-bottom: 16px;

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

  @media (min-width: 350px) {
    flex-direction: row;
    gap: 24px;
    max-width: 800px;
    flex-wrap: wrap;
  }
`;

const SkillCard = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 70%;
  @media (min-width: 350px) {
    padding: 20px;
  }
`;

const SkillTitle = styled.h3`
  color: #ff8c00;
  margin-bottom: 12px;

  @media (min-width: 350px) {
    font-size: 0.75rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

const Skills = ({ isDesktop }: { isDesktop: boolean }) => {
  console.log('isDesktop: ', isDesktop);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SkillContainer id={'skills'}>
      <TopContainer>
        <Title>Technical Skills</Title>
      </TopContainer>
      <BottomContainer>
        {isDesktop ? (
          <>
            <SkillGroup>
              <SkillCard>
                <SkillTitle>Frontend Development</SkillTitle>
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={80} />
                <SkillBar skill={'React'} level={70} />
                <SkillBar skill={'React'} level={60} />
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillTitle>Frontend Development</SkillTitle>
                <SkillBar skill={'React'} level={10} />
                <SkillBar skill={'React'} level={20} />
                <SkillBar skill={'React'} level={30} />
                <SkillBar skill={'React'} level={40} />
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillTitle>Frontend Development</SkillTitle>
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={90} />
              </SkillCard>
            </SkillGroup>
          </>
        ) : (
          <Slider {...settings}>
            <SkillGroup>
              <SkillCard>
                <SkillTitle>Frontend Development</SkillTitle>
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={80} />
                <SkillBar skill={'React'} level={70} />
                <SkillBar skill={'React'} level={60} />
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillTitle>Frontend Development</SkillTitle>
                <SkillBar skill={'React'} level={10} />
                <SkillBar skill={'React'} level={20} />
                <SkillBar skill={'React'} level={30} />
                <SkillBar skill={'React'} level={40} />
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillTitle>Frontend Development</SkillTitle>
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={90} />
                <SkillBar skill={'React'} level={90} />
              </SkillCard>
            </SkillGroup>
          </Slider>
        )}
      </BottomContainer>
    </SkillContainer>
  );
};

export default Skills;
