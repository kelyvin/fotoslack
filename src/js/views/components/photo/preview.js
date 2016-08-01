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

fotoslack.views.components.photo.preview = (function() {
    'use strict';

    var PhotoPreview = function(options) {
        var photoEl = null,
            titleEl = null;

        fotoslack.views.base.call(this, options);
        this.model = this.options.model || new fotoslack.models.flickrPhoto();

        function createPhoto (imageUrl) {
            photoEl = document.createElement('img');
            photoEl.setAttribute('src', imageUrl);
        }

        function createTitle(title) {
            titleEl = document.createElement('h1');
            titleEl.appendChild(document.createTextNode(title));
        }

        this.renderPhoto = function (model) {
            if (photoEl) {
                this.el.removeChild(photoEl);
                photoEl = null;
            }

            if (titleEl) {
                this.el.removeChild(titleEl);
                titleEl = null;
            }

            if (model) {
                var title = model.get('title'),
                    images = model.get('images'),
                    imageUrl = images.medium.url || images.large.url || images.square.url || '';

                createPhoto(imageUrl);
                createTitle(title);

                this.el.appendChild(titleEl);
                this.el.appendChild(photoEl);
            }
        };
    };

    PhotoPreview.prototype = Object.create(fotoslack.views.base.prototype);
    PhotoPreview.constructor = PhotoPreview;

    PhotoPreview.prototype.constructView = function() {
        this.el.classList.add('photo-preview');
        this.renderPhoto(this.model);
    };

    return PhotoPreview;
}());


