// components/Header.tsx
import Link from 'next/link';
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
}

const Header = ({ activeSection }: HeaderProps) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  console.log('activeSection: ', activeSection);

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>Title</Logo>
      </Link>
      <Menu>
        <MenuItem
          $active={activeSection === 'about'}
          onClick={() => handleScroll('about')}
        >
          Menu1
        </MenuItem>
        <MenuItem
          $active={activeSection === 'skills'}
          onClick={() => handleScroll('skills')}
        >
          Menu2
        </MenuItem>
        <MenuItem
          $active={activeSection === 'projects'}
          onClick={() => handleScroll('projects')}
        >
          Menu3
        </MenuItem>
        <MenuItem
          $active={activeSection === 'career'}
          onClick={() => handleScroll('career')}
        >
          Menu4
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
