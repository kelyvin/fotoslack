var fotoslack = fotoslack || {
    configs: {},
    models: {},
    utils: {},
    views: {
        components: {},
        pages: {}
    }
};

fotoslack.views.pages.photoViewer = (function() {
    'use strict';

    var PhotoViewer = function(options) {
        fotoslack.views.base.call(this, options);
    };

    PhotoViewer.prototype = Object.create(fotoslack.views.base.prototype);
    PhotoViewer.constructor = PhotoViewer;

    PhotoViewer.prototype.constructView = function() {
        this.el.appendChild(document.createTextNode('Hello World'));
    };

    return PhotoViewer;
}());


