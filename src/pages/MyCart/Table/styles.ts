import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  a {
    background: ${({ theme }) => theme.colors.red};
    padding: 0.75rem 0.5rem;
    border-radius: 5px;
  
    font-size: 1.5rem;

    color: ${({ theme }) => theme.colors.white};
  } 
`