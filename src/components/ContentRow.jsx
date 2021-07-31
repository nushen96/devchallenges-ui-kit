import styled from "styled-components";
const ContentRow = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }
`;
export default ContentRow;
