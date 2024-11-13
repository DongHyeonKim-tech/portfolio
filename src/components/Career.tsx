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
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff8c00;
  margin-bottom: 30px;
`;

const CareerTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  width: 100%;
`;

const CareerCard = styled.div`
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8ox rgba(0,0,0,0.3);
    transition: transform 0.3s

    &:hover {
        transform: translateY(-5px);
    }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff8c00;
  margin: 0;
`;

const Company = styled.p`
  font-size: 1.1rem;
  color: #ddd;
  margin: 5px 0;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin: 5px 0;
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
          <JobTitle>Middle Full Stack Developer</JobTitle>
          <Company>Euclidsoft</Company>
          <Duration>2021 - 2023</Duration>
          <Responsibilities>
            <li>Full Stack Web Development - KISTEP</li>
            <li>Full Stack Web Development - </li>
          </Responsibilities>
        </CareerCard>
      </CareerTimeline>
    </CareerContainer>
  );
};

export default Career;
