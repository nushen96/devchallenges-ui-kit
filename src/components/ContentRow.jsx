import styled from "styled-components";
const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: space-between;
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }
`;
export default ContentRow;
