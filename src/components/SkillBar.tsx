import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #ff8c00;
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  height: 10px;
  backgroun: #333;
  border-radius: 5px;
  overflow: hidden;
`;

const Filler = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width};
  background: #ff8c00;
  transition: width 0.6s ease-in-out;
`;

const SkillBar = ({ skill, level }: SkillBarProps) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(level);
  }, [level]);

  return (
    <SkillContainer>
      <Label>{skill}</Label>
      <ProgressBar>
        <Filler width={progress} />
      </ProgressBar>
      <span>{progress}%</span>
    </SkillContainer>
  );
};

export default SkillBar;