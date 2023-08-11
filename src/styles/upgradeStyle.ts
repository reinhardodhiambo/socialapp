import styled from "styled-components";

export const UpgradeContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color:transparent;
    padding: 10px;
    text-align: center;
`;

export const UpgradeButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border-image: linear-gradient(to right, darkblue, darkorchid);
  border-radius: 50px;
  cursor: pointer;
  margin-right: 10px;
`;

export const UpgradeText = styled.p`
  margin: 0;
  color: white;
`;