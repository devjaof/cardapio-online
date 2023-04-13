import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.footer`
  padding-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: ${({ theme }) => theme.colors.red};
    width: 100%;
    max-width: 16.5rem;
    min-height: 4rem;

    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;

    border-radius: 8px;

    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, '#AA2424')};
    }
  }

  span {
    font-weight: 500;
    text-transform: uppercase;
    margin-left: 0.75rem;
    
    display: flex;
    flex-direction: column;

    strong {
      font-size: 2.25rem;
      font-weight: 700;
    }
  }
`
