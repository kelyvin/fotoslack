var fotoslack = fotoslack || {
    configs: {},
    models: {},
    utils: {},
    views: {
        components: {},
        pages: {}
    }
};

fotoslack.utils.flickrApi = (function() {
    'use strict';
    var flickrConfig = fotoslack.configs.api.flickr || {},
        url = flickrConfig.url || '',
        apiKey = flickrConfig.key || '',
        extras = flickrConfig.extras || [];

    // Parses the response from the flickr API
    function parseResponse(response) {
        var photoCollection = null;

        if (response && response.stat === 'ok' && response.photos) {
            var photos = response.photos.photo || [];
            photoCollection = [];

            // Convert each photo returned from the API as a flickrPhoto model
            for (var i = 0; i < photos.length; i++) {
                var currPhoto = photos[i];
                photoCollection.push(new fotoslack.models.flickrPhoto(currPhoto));
            }
        }

        return photoCollection;
    }

    function getGalleryPhotos(galleryId, callback) {
        var queryParams = {
                method: flickrConfig.resource.galleries.getPhotos,
                api_key: apiKey,
                gallery_id: galleryId,
                extras: extras.join(','),
                format: 'json',
                nojsoncallback: 1
            },
            getGalleryPhotosUrl = '';

        getGalleryPhotosUrl = fotoslack.utils.apiHelper.constructUrl(url, '', queryParams);
        fotoslack.utils.apiHelper.get(getGalleryPhotosUrl, function (response) {
            var photoCollection = parseResponse(response);
            callback.call(this, photoCollection);
        });
    }

    return {
        getGalleryPhotos: getGalleryPhotos
    };
}());


