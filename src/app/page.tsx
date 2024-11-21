'use client';
import About from '@/components/About';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Header from '@/layout/Header';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const MainContainer = styled.main`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  position: relative;
`;

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [weather, setWeather] = useState<string>('Clear');
  const desktop = useMediaQuery({ minWidth: 1200 });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=37.498095&lon=127.027610&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeather(data.weather[0].main);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 섹션이 60% 이상 보이면 활성화
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        />
      </Head>

      <Header activeSection={activeSection} weather={weather} />

      <MainContainer>
        <About />
        <Skills isDesktop={isDesktop} />
        <Projects isDesktop={isDesktop} />
        <Career />
      </MainContainer>
    </>
  );
}
