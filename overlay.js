const cloudinary = require('cloudinary').v2;
const { promisify } = require('util');
const got = require('got');

const uploadImage = promisify(cloudinary.uploader.upload);

exports.handler = function(context, event, callback){
    
  const pictureWidth = parseFloat(context.PICTURE_WIDTH || '0');
  const pictureHeight = parseFloat(context.PICTURE_HEIGHT || '0');
  const ratio = pictureWidth / pictureHeight;
  
  const cloudinaryTransforms = {
    transformation: [
      { aspect_ratio: ratio, crop: 'crop' },
      { height: pictureHeight, crop: 'scale' },
      {
        overlay: context.PICTURE_OVERLAY_ID,
        flags: 'relative',
        height: '1.0',
        width: '1.0',
      },
      {flags: "layer_apply", x: 0, y: 0},
      { overlay: { 
          font_family: "Cookie",
          font_size: 150,
          width: (context.PICTURE_WIDTH-100),
          text: `from ${event.Name}`,
         },
      },
      {flags: "layer_apply", x: 0, y: ((context.PICTURE_HEIGHT-150)/2)},
    ],
  };


  const imageBaseUrl = event.MediaUrl0;

  const res = uploadImage(imageBaseUrl, {
      public_id:
        context.ID_PREFIX +
        imageBaseUrl.substr(imageBaseUrl.lastIndexOf('/') + 1),
      eager: [cloudinaryTransforms],
    }).then(res =>{
        const url = res.eager[0].secure_url;
        callback(null, { picture: url });
    }).catch(err =>{
        callback(err.message);
    });
    
};
