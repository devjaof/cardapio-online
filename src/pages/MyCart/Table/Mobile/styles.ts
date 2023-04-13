import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .order-item {
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 5px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;


    > div:first-child {
      button {
        color: ${({ theme }) => theme.colors.red};
        position: absolute;

        right: 0.5rem;
        top: 1.25rem;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      h4 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.75rem;
      }

      > span {
        font-size: 2rem;
        font-weight: 700;
      }

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 0.875rem 0;

        > div {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;

          button {
            flex: 0;

            display: flex;
            align-items: center;
            justify-content: center;
          }

          span {
            font-size: 1.5rem;
            font-weight: 700;
          }
        }
      }

      h5 {
        font-size: 2rem;
        font-weight: 700;

        margin-block-start: 0;
        margin-block-end: 0;

        span {
          display: block;
          font-size: 1.25rem;
          font-weight: 400;
        }
      }
    }


  }

  @media screen and (max-width: 540px){
    .order-item {
      grid-template-columns: 1fr;

      padding: 1rem;

      > div:first-child {
        height: 10rem;

        margin-top: 3rem;
      }

      > div:last-child {
        flex-direction: row;
        
        div {
          display: flex;
          flex-direction: column;

          div:first-child {
            width: 100%;
            align-items: start;
            gap: 0;
          }

          div:last-child {
            flex-direction: row;
            gap: 2rem;
          }
        }

        h5 {
          font-size: 2.25rem;
          margin-top: -2rem;
          span {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;