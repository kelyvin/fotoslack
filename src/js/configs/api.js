var fotoslack = fotoslack || {
    configs: {},
    enums: {},
    models: {},
    utils: {},
    views: {
        components: {
            photo: {}
        },
        pages: {}
    }
};

// Move keys away from source code when a proper backend has been implemented
fotoslack.configs.api = (function() {
    'use strict';

    return {
        flickr: {
            url: 'https://api.flickr.com/services/rest/',
            key: 'f19a2ee5a13a683ec062087a9d33cbec',
            resource: {
                galleries: {
                    getPhotos: 'flickr.galleries.getPhotos'
                }
            },
            extras: [
                'description',
                'owner_name',
                'url_q',   // small square
                'url_c',   // medium
                'url_k'    // large
            ]

        }
    };
}());



