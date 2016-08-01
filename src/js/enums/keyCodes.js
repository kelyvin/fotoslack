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
fotoslack.enums.keyCodes = (function() {
    'use strict';

    return {
        escape: 27,
        leftArrow: 37,
        rightArrow: 39
    };
}());