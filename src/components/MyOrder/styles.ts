import { darken } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;

  background: ${({ theme }) => theme.colors.red};
  padding: 1rem 1rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;

  transition: background 0.3s;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${darken(0.1, '#AA2424')};
  }

  span {
    margin-left: 0.75rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media screen and (max-width: 720px) {
    top: 0.5rem;
    bottom: initial;
  }
`;