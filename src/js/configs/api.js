var fotoslack = fotoslack || {
    configs: {},
    models: {},
    utils: {},
    views: {
        components: {},
        pages: {}
    }
};

// Move keys away from source code when a proper backend has been implemented
fotoslack.configs = (function() {
    'use strict';

    return {
        flickr: {
            key: 'f19a2ee5a13a683ec062087a9d33cbec',
            secret: '1dc26aa527a59b12'
        }
    };
}());



