// Set up namespace
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

(function(app) {
    'use strict';

    var appContainerEl = document.getElementById('app-container');

    document.addEventListener('DOMContentLoaded', function(event) {
        var photoViewerPage = new app.views.pages.photoViewer();
        appContainerEl.appendChild(photoViewerPage.render().el);
    });

}(fotoslack));