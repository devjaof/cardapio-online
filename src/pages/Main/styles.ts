import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 1rem 1.875rem;

    img {
      width: 5rem;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 720px){
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }
  }
`

export const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
`

export const Logo = styled.img`
  padding: 2rem;
`
