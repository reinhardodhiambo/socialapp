import styled from 'styled-components';



export const CenteredButtonContainer = styled.div`
  
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 20px auto;

  button {
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.themeName === 'dark' ? 'transparent' : 'black'};
    border-radius: ${({ theme }) => theme.themeName === 'dark' ? '50px' : '5px'};
    cursor: pointer;
    width: 90vw;
    font-size: 32px;
  }
`;
