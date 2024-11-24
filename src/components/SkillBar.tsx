import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SkillBarProps {
  skill: string;
  level: number;
  icon: any; //
}

const SkillContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  font-weight: 500;
  color: #ff8c00;
  margin-bottom: 5px;
  @media (min-width: 350px) {
    font-size: 0.75rem;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`;

const ProgressBar = styled.div`
  backgroun: #333;
  border-radius: 5px;
  overflow: hidden;
  @media (min-width: 350px) {
    height: 5px;
  }

  @media (min-width: 1200px) {
    height: 10px;
  }
`;

const Filler = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background: #ff8c00;
  border-radius: 10px;
  transition: width 0.6s ease-in-out;
`;

const SkillBar = ({ skill, level, icon }: SkillBarProps) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(level);
  }, [level]);

  return (
    <SkillContainer>
      <Label>
        <Image src={icon} alt={skill} width={20} height={20} />
        {skill}
      </Label>
      <ProgressBar>
        <Filler width={progress} />
      </ProgressBar>
      <span>{progress}%</span>
    </SkillContainer>
  );
};

export default SkillBar;
