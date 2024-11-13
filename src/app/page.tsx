'use client';
import About from '@/components/About';
import Career from '@/components/Career';
import Joke from '@/components/Joke';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Header from '@/layout/Header';
import Head from 'next/head';
import styled from 'styled-components';

const MainContainer = styled.main`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
      </Head>

      <Header />

      <MainContainer>
        <About />
        <Skills />
        <Projects />
        <Career />
        <Joke />
      </MainContainer>
    </>
  );
}
