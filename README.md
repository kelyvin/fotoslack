# Fotoslack
A photo gallery viewer made for Slack's technical exercise.

## Features
On page load, the web app will automatically pull from a default gallery from Flickr and reveal all the images in the gallery as a grid. You can also perform the following actions.

1. Click on any image thumbnail to open a lightbox view.
2. Navigate through each image by clicking on the button or using the left/right arrow keys.
3. Close the lightbox by pressing the x, escape key, or clicking in the black area outside of the main content.

## Architecture
This Fotoslack web app is written in pure native javascript that is supported on all modern browsers (IE10+, Chrome, Firefox, Safari). It is designed and architected to best represent how to potentially approach a large scale web app with large teams. In this code base, you may find the following:

1. Namespacing conventions
2. Reusable, extensible, and modular components.
3. Object oriented javascript practices.
4. A file system that best represents the structure of large-scale apps.
5. Modular SASS stylesheets to create easy and readable associations betwen styles and components.

## API
This project integates with the Flickr Api. In particular, we are creating the photo viewer using the [Get Gallery Photos](https://www.flickr.com/services/api/flickr.galleries.getPhotos.html) endpoint.

## Sass
For this project, I am using SASS to generate the styles.css file. To initiate and run the SASS preprocessor, run the following command:

```
sass src/sass/styles.scss src/styles/styles.css
```

To auto watch for file changes, run the following:

```
sass --watch src/sass:src/styles
```
