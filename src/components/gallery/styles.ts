import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px; /* Adjust as needed */
  margin: 0 auto;
`;

export const GalleryItem = styled.div`
  flex: 0 0 calc(33.33% - 2px); /* Adjust spacing as needed */
  margin-bottom: 2px; /* Adjust spacing as needed */
  margin-left: 2px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

