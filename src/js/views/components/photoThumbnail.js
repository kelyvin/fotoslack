var fotoslack = fotoslack || {
    configs: {},
    models: {},
    utils: {},
    views: {
        components: {},
        pages: {}
    }
};

fotoslack.views.components.photoThumbnail = (function() {
    'use strict';

    var PhotoThumbnail = function(options) {
        fotoslack.views.base.call(this, options);

        this.model = this.options.model || new fotoslack.models.flickrPhoto();

        this.renderThumbnail = function () {
            var thumbnailEl = document.createElement('img'),
                images = this.model.get('images');

            // Prevent default anchor tag function
            this.addClickEvent(function (event) {
                event.preventDefault();
            });

            thumbnailEl.setAttribute('src', images.square.url);
            this.el.setAttribute('href', images.original.url);
            this.el.appendChild(thumbnailEl);
        };
    };

    PhotoThumbnail.prototype = Object.create(fotoslack.views.base.prototype);
    PhotoThumbnail.constructor = PhotoThumbnail;

    PhotoThumbnail.prototype.template = function() {
        return document.createElement('a');
    };

    PhotoThumbnail.prototype.constructView = function() {
        this.el.classList.add('thumbnail');
        this.renderThumbnail();
    };

    return PhotoThumbnail;
}());


