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

fotoslack.views.components.photo.thumbnail = (function() {
    'use strict';

    var PhotoThumbnail = function(options) {
        fotoslack.views.base.call(this, options);
        this.model = this.options.model || new fotoslack.models.flickrPhoto();

        this.renderThumbnail = function () {
            var thumbnailEl = document.createElement('img'),
                images = this.model.get('images'),
                squareUrl = images.square.url || '',
                largeImageUrl = images.large.url || images.medium.url || squareUrl;

            // Prevent default anchor tag function
            this.addClickEvent(function (event) {
                event.preventDefault();
            });

            thumbnailEl.setAttribute('src', squareUrl);
            this.el.setAttribute('href', largeImageUrl);
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


