import styled from "styled-components";
import Logo from "./Logo";
const SideMenu = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fafbfd;
`;
const MenuContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const MenuItem = styled.button`
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: ${props => props.active ? "inherit" : "var(--gray5)"};
  text-align: left;

  &:hover {
    color: inherit;
  }
`;

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
    </SideMenu>
  );
};

export default SideMenuWrapper;
