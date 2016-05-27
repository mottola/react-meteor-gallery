import React from 'react';


const ImageScore = (props) => {
  // props.ups is number of upvotes (from inspecting api obj)

  // props.downs is number of upvotes (from inspecting api obj)

  // add ups and downs as objects to props
  const { ups, downs } = props;

  // get percentage of upvotes and downvotes and store to const
  const upsPercent = `${100 * (ups / (ups + downs))}%`;
  const downsPercent = `${100 * (downs / (ups + downs))}%`;

  // html to render
  return (
    <div>
      Ups/downs
      <div className='progress'>
        <div style={{ width: upsPercent }} className='progress-bar progress-bar-success progress-bar-striped' />
      <div style={{ width: downsPercent }} className='progress-bar progress-bar-danger progress-bar-striped' />
      </div>
    </div>
  );
};

export default ImageScore;
