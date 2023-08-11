import styled from "styled-components";

export const UpgradeContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  padding: 10px;
  text-align: center;
`;

export const UpgradeButton = styled.button`
  padding: 5px 9px;
  border: none;
  outline: none;
  position: relative;
  border-radius: 50px;
  background: linear-gradient(to right, #6600ff, #6bd0ef);
  cursor: pointer;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: 3px;
    right: 3px;
    top: 3px;
    bottom: 3px;
    border-radius: 44px;
    background-color: white;
    z-index: -1;
  }

  span {
    background-color: red;

    /* Create the gradient. */
    background-image: linear-gradient(45deg, #6600ff, #6bd0ef);

    /* Set the background size and repeat properties. */
    background-size: 100%;
    background-repeat: repeat;

    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
  }
`;

export const UpgradeText = styled.p`
  margin: 0;
  color: white;
  font-size: 8px;
`;
