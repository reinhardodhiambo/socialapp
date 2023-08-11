import React from 'react';
import { GalleryContainer, GalleryImage, GalleryItem } from './styles';
const imageUrls = [
    'https://loremflickr.com/320/400?random=1',
    'https://loremflickr.com/320/400?random=2',
    'https://loremflickr.com/320/400?random=3',
    'https://loremflickr.com/320/400?random=4',
    'https://loremflickr.com/320/400?random=5',
    'https://loremflickr.com/320/400?random=6',
    'https://loremflickr.com/320/400?random=7',
    'https://loremflickr.com/320/400?random=8',
    'https://loremflickr.com/320/400?random=9',
    'https://loremflickr.com/320/400?random=10',
    'https://loremflickr.com/320/400?random=11',
    'https://loremflickr.com/320/400?random=12',
    'https://loremflickr.com/320/400?random=13',
    'https://loremflickr.com/320/400?random=14',
    'https://loremflickr.com/320/400?random=15',
    // Add more image URLs here
];

const Gallery: React.FC = () => {
    return (
        <GalleryContainer>
            {imageUrls.map((imageUrl, index) => (
                <GalleryItem key={index}>
                    <GalleryImage src={imageUrl} alt={`Image ${index + 1}`} />
                </GalleryItem>
            ))}
        </GalleryContainer>
    );
};

export default Gallery;