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

fotoslack.enums.keyCodes = (function() {
    'use strict';

    return {
        escape: 27,
        leftArrow: 37,
        rightArrow: 39
    };
}());