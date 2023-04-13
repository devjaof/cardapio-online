import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${({theme}) => theme.colors.red};

  ${({ isOpen }) => {
    return isOpen ?
      css`width: 18.3rem;` :
      css`width: 7.75rem;`
  }}

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: width 0.3s;

  @media screen and (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 720px) {
    height: 100%;
  }
`

export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  padding: 0;

  @media screen and (max-width: 720px) {
    flex-direction: row;
    align-items: center;
  }
`

export const Item = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 2rem;

    width: fit-content;
    position: relative;

    padding-left: 1.875rem;
    padding-right: 1.875rem;

    color: ${({theme}) => theme.colors.white};

    font-size: 1.4rem;

    svg {
      font-size: 3.8rem;
    }

    &.active {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        bottom: 0;
        transform: translateY(-50%);

        background-color: ${({ theme }) => theme.colors.yellow};
        width: 7px;
        height: calc(100% + 10px);
        
        border-radius: 0 5px 5px 0;
      } 
      color: ${({theme}) => theme.colors.yellow};
    }

    @media screen and (max-width: 720px) {
      flex-direction: column;

      svg {
        width: 3.25rem;
        height: 3.25rem;
      }

      span {
        display: none;
      }

      &.active {
        &::after {
          display: none;
        }
      }
    }
  }
`

export const Button = styled.button`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media screen and (max-width: 720px) {
    display: none;
  }
`