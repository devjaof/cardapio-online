import styled from "styled-components";

export const Container = styled.header`
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5rem;
  }

  > div {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    div {
      text-align: right;

      h3 {
        font-weight: 500;

        margin-block-start: 0;
        margin-block-end: 0;
      }

      span {
        color: ${({ theme }) => theme.colors.yellow};

        strong {
          font-weight: 500;
        }
      }
    }
  }
`

export const Logo = styled.img`
  padding: 2rem;
`