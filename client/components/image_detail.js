// Create our image list component


// 3 Things to do with every component

// 1)
// Import React and Necessary Components
import React from 'react';
import ImageScore from './image_score';

// 2)
// Create Component
const ImageDetail = (props) => {
  // props.image => the image object
  // props.image.title => the image title object
  // props.image.link => the image link object

  return (
    <li className='media list-group-item'>
      <div className='media-left'>
        <img src={props.image.link} />
      </div>
      <div className='media-body'>
        <h4 className='media-heading'>
          {props.image.title}
        </h4>
        <p>{props.image.description}</p>
      <ImageScore ups={props.image.ups} downs={props.image.downs} />
      </div>
    </li>
  );
};

// 3)
// Export Component
export default ImageDetail;
