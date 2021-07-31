import { useState } from "react";

import styled from "styled-components";
import Logo from "./Logo";
const SideMenu = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fafbfd;

  & .mobile-menu {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    & .mobile-menu {
      display: flex;
    }
  }
`;
const MenuContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: unset;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: ${(props) => (props.active ? "inherit" : "var(--gray5)")};
  text-align: left;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  &:first-child {
    margin-top: 0;
  }

  .mobile-menu-container & {
    margin-top: 0.5rem;
    text-align: right;
  }

  &:hover {
    color: inherit;
  }
`;

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="mobile-menu"
      style={{
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <span
        style={{ cursor: "pointer" }}
        class="material-icons"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        menu
      </span>
      {isMobileMenuOpen && (
        <MobileMenuContainer className="mobile-menu-container">
          <MenuItem>Colors</MenuItem>
          <MenuItem>Typography</MenuItem>
          <MenuItem>Spaces</MenuItem>
          <MenuItem active>Buttons</MenuItem>
          <MenuItem>Inputs</MenuItem>
          <MenuItem>Grids</MenuItem>
        </MobileMenuContainer>
      )}
    </div>
  );
};

const SideMenuWrapper = () => {
  return (
    <SideMenu>
      <Logo />
      <MenuContainer>
        <MenuItem>Colors</MenuItem>
        <MenuItem>Typography</MenuItem>
        <MenuItem>Spaces</MenuItem>
        <MenuItem active>Buttons</MenuItem>
        <MenuItem>Inputs</MenuItem>
        <MenuItem>Grids</MenuItem>
      </MenuContainer>
      <MobileMenu></MobileMenu>
    </SideMenu>
  );
};

export default SideMenuWrapper;
