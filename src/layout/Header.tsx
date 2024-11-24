// components/Header.tsx
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px 15px 0px;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 10;
`;

const Logo = styled.span`
  color: #fff;
  font-weight: bold;
  text-decoration: none;

  @media (min-width: 350px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.a<{ $active: boolean }>`
  color: ${(props) => (props.$active ? '#ff8c00' : '#fff')};
  text-decoration: none;
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff8c00;
  }

  @media (min-width: 350px) {
    font-size: 0.75rem;
  }

  @media (min-width: 250px) {
    font-size: 0.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

interface HeaderProps {
  activeSection: string;
  weather: string;
}

const Header = ({ activeSection, weather }: HeaderProps) => {
  const [weatherIcon, setWeatherIcon] = useState<string>('❄️');
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  console.log('activeSection: ', activeSection);

  const triggerCodeEffect = () => {
    const codeElement = document.getElementById('code-effect');
    if (codeElement) {
      codeElement.classList.add('active');
      setTimeout(() => {
        codeElement.classList.remove('active');
      }, 2000); // 2초 동안 효과 유지
    }
  };

  useEffect(() => {
    if (weather) {
      let icon = '☀️';
      switch (weather) {
        case 'Clouds':
          icon = '☁️';
          break;
        case 'Rain':
          icon = '☔';
          break;
        case 'Mist':
          icon = '🌫️';
          break;
        case 'Snow':
          icon = '❄️';
          break;
      }
      setWeatherIcon(icon);
    }
  }, [weather]);

  return (
    <HeaderContainer>
      <Logo onClick={triggerCodeEffect}>{`KIM DONGHYEON ${weatherIcon}`}</Logo>
      <Menu>
        <MenuItem
          $active={activeSection === 'about'}
          onClick={() => handleScroll('about')}
        >
          About
        </MenuItem>
        <MenuItem
          $active={activeSection === 'skills'}
          onClick={() => handleScroll('skills')}
        >
          Skills
        </MenuItem>
        <MenuItem
          $active={activeSection === 'projects'}
          onClick={() => handleScroll('projects')}
        >
          Projects
        </MenuItem>
        <MenuItem
          $active={activeSection === 'career'}
          onClick={() => handleScroll('career')}
        >
          Career
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
