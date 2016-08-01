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

fotoslack.views.components.loader = (function() {
    'use strict';

    var Loader = function(options) {
        fotoslack.views.base.call(this, options);
    };

    Loader.prototype = Object.create(fotoslack.views.base.prototype);
    Loader.constructor = Loader;

    Loader.prototype.constructView = function() {
        var imageEl = document.createElement('img');
        imageEl.setAttribute('src', 'src/images/loading_gears.svg');
        this.el.classList.add('loader');
        this.el.appendChild(imageEl);

    };

    return Loader;
}());


