var fotoslack = fotoslack || {
    configs: {},
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
fotoslack.configs.default = (function() {
    'use strict';

    return {
        flickrGalleryId: '72157662859243450'
    };
}());



