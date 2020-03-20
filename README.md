# TwilioWhatsAppMothersDayPhotoBook

This is the TL;DR; to setup your Twilio WhatsApp Mother's Day photo Collection or any photo Collection you like.

## Prerequisites
- [A Twilio Account](www.twilio.com/referral/SaSofa)
- [A Twilio WhatsApp SandBox](https://www.twilio.com/docs/sms/whatsapp/quickstart/node#sign-up-for-twilio-and-activate-the-sandbox)
- [A Cloudinary Account](https://cloudinary.com/signup)

## Step 1 
Upload the images `overlay-mother.png` and `blank.png` to your Cloudinary Media Library

## Step 2
Go to your [Twilio Studio Dashboard](https://www.twilio.com/console/studio/dashboard) and create a new flow using **import from json** use the JSON File in this repository

## Step 3 
Go to your [Twilio Functions Dashboard](https://www.twilio.com/console/functions/configure) and add the following environment variables and dependencies

Environment Variables:
- **CLOUDINARY_URL** - You can find this [here](https://cloudinary.com/console)
- **PICTURE_WIDTH** - I used 1200 for postcard sized printing
- **PICTURE_HEIGHT** - I used 1600 for Postcard sized printing
- **PICTURE_OVERLAY_ID** - The name of the overlay image after you have uploaded it to cloudinary. Warning cloudinary may change the name of your image when you upload it.

Dependencies:
- promisify
- got
- cloudinary

## Step 4
Create 2 Functions filled with the code from the two javascript files in this repository.

## Step 5
Go to your Twilio Studio Flow and edit the Function URLs to reference your Twilio Functions

## Step 6
Copy your Studio Flow Webhook URL into your WhatsApp Sand box Configuration

## STep 7 Test it

I can’t wait to see what you build with Twilio WhatsApp. Let me know what you’re working on at:
Twitter - @chatterboxCoder
Email - nokenwa@twilio.com
GitHub - nokenwa
