import SkillBar from '@/components/SkillBar';
import styled from 'styled-components';

const SkillContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
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
  margin-bottom: 20px;
`;

const SkillGroup = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1000px;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SkillCard = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Skills = () => {
  return (
    <SkillContainer id={'skills'}>
      <TopContainer>
        <Title>Technical Skills</Title>
      </TopContainer>
      <BottomContainer>
        <SkillGroup>
          <SkillCard>
            <h3>Frontend Development</h3>
            <SkillBar skill={'React'} level={90} />
            <SkillBar skill={'React'} level={80} />
            <SkillBar skill={'React'} level={70} />
            <SkillBar skill={'React'} level={60} />
          </SkillCard>
        </SkillGroup>
        <SkillGroup>
          <SkillCard>
            <h3>Frontend Development</h3>
            <SkillBar skill={'React'} level={10} />
            <SkillBar skill={'React'} level={20} />
            <SkillBar skill={'React'} level={30} />
            <SkillBar skill={'React'} level={40} />
          </SkillCard>
        </SkillGroup>
        <SkillGroup>
          <SkillCard>
            <h3>Frontend Development</h3>
            <SkillBar skill={'React'} level={90} />
            <SkillBar skill={'React'} level={90} />
            <SkillBar skill={'React'} level={90} />
            <SkillBar skill={'React'} level={90} />
          </SkillCard>
        </SkillGroup>
      </BottomContainer>
    </SkillContainer>
  );
};

export default Skills;
