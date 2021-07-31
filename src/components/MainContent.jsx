import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 768px) {
    gap: normal;
  }
`;

export default MainContent;
