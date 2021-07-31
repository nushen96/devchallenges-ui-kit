import styled from "styled-components";
const MainContainer = styled.div`
  flex: 10;
  padding: 3rem 3rem 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2rem 2rem 1rem;
  }
`;

const ContentTitle = styled.h1`
  font-weight: inherit;
  font-size: 170%;
`;

const ContentFooter = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #a9a9a9;

  & a {
    text-decoration: underline;
    font-weight: 700;
    color: inherit;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;



const MainContainerWrapper = ({ title, contentComponent }) => {
  return (
    <MainContainer>
      <ContentTitle>{title}</ContentTitle>
      {contentComponent}
      <ContentFooter>made with fierce by <a href="https://papidiagne.dev">papidiagne</a> - devChallenges.io</ContentFooter>
    </MainContainer>
  );
};

export default MainContainerWrapper;
