// Create our image list component


// 3 Things to do with every component

// 1)
// Import React and Necessary Components
import React from 'react';
import ImageDetail from './image_detail';

// 2)
// Create Component
const ImageList = (props) => {
    // Filter out broken images (albums instead of single images) with array
    // filter method
    const validImages = props.images.filter(image => !image.is_album);

    // variable function that loops through filtered array
    const RenderedImages = validImages.map(image => {
      // image={image} is what we refer to with props
      return <ImageDetail key={image.title} image={image} />
  });

  return (
    <ul className='media-list list-group'>
      {RenderedImages}
    </ul>
  );
};

// 3)
// Export Component
export default ImageList;
