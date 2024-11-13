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
  fons-size: 1.8rem;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const Menu = styled.nav`
  display: flex;
  gap: 30px;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    padding: 5px 0;

    &:hover::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: #ff8c00;
    }
  }
`;

const MenuItem = styled.a`
  cursor: pointer;
`;

const Header = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>오두우웅</Logo>
      </Link>
      <Menu>
        <MenuItem onClick={() => handleScroll('about')}>About</MenuItem>
        <MenuItem onClick={() => handleScroll('skills')}>Skills</MenuItem>
        <MenuItem onClick={() => handleScroll('projects')}>Projects</MenuItem>
        <MenuItem onClick={() => handleScroll('career')}>Career</MenuItem>
        <MenuItem onClick={() => handleScroll('joke')}>hahaha</MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
