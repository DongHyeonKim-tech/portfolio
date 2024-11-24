import { motion } from 'framer-motion';
import styled from 'styled-components';

const CareerContainer = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #fff;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff8c00;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const CareerTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const CareerCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff8c00;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Company = styled.p`
  font-size: 1.1rem;
  color: #ddd;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Responsibilities = styled.ul`
  margin-top: 10px;
  list-style-type: disc;
  list-style-position: inside;
  padding: 0;
  color: #ccc;
  font-size: 1rem;

  li {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Career = () => {
  return (
    <CareerContainer
      id={'career'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title>Career Journey</Title>
      <CareerTimeline>
        <CareerCard>
          <JobTitle>Full Stack Developer</JobTitle>
          <Company>Euclidsoft</Company>
          <Duration>2021 - 2023</Duration>
          <Responsibilities>
            <li>
              Full Stack Web Development - 도서 정보 데이터 수집 기반 검색 웹
              구현
            </li>
            <li>
              Full Stack Web Development - 한국과학기술기획평가원 통합연구시스템
              솔루션
            </li>
            <li>
              Full Stack Web Development - 중소기업기술정보진흥원 예비평가
              솔루션
            </li>
            <li>Full Stack Web Development - 도서 분석 검색 시스템</li>
            <li>
              Full Stack Web Development - 중소기업기술정보진흥원 스마트추진단
              업무시스템
            </li>
          </Responsibilities>
        </CareerCard>
        <CareerCard>
          <JobTitle>Full Stack Developer</JobTitle>
          <Company>Haeahn Architecture</Company>
          <Duration>2023 - </Duration>
          <Responsibilities>
            <li>Full Stack Web Development - 평가인증 시스템</li>
            <li>Full Stack Web Development - 러닝 웹</li>
            <li>Full Stack Web Development - 팀즈 관리 시스템</li>
            <li>Full Stack Web Development - 관리자 시스템</li>
            <li>Front-end Development - 수준측정 시스템</li>
          </Responsibilities>
        </CareerCard>
      </CareerTimeline>
    </CareerContainer>
  );
};

export default Career;
