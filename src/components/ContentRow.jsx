import styled from 'styled-components'
const ContentRow = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;

    &:first-child {
      margin-top: unset;
    }
  }
`
export default ContentRow