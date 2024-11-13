import styled from 'styled-components';

const JokeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #fff;
  padding: 0 20px;
`;

const Joke = () => {
  return (
    <JokeContainer id={'joke'}>
      <h1>오똥꾸 바보 &#128518;</h1>
    </JokeContainer>
  );
};

export default Joke;
