const cloudinary = require('cloudinary').v2;
const { promisify } = require('util');
const got = require('got');

exports.handler = function(context, event, callback){

  const pictureWidth = parseFloat(context.PICTURE_WIDTH || '0');
  const pictureHeight = parseFloat(context.PICTURE_HEIGHT || '0');
  const ratio = pictureWidth / pictureHeight;
  
  
  const message = `${event.message} - ${event.Name}`;
  const cloudinaryTransforms = {
    transformation: [
      { aspect_ratio: ratio, crop: 'crop' },
      { height: pictureHeight, crop: 'scale' },
      { overlay: { 
          font_family: "Cookie",
          font_size: 80,
          width: (context.PICTURE_WIDTH-120),
          text: message,
         },
      }
    ],
  };

  const background = 'blank.png';
  const url = cloudinary.url(background, cloudinaryTransforms);
  callback(null, { picture: url});
};
