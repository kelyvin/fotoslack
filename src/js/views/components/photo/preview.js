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

fotoslack.views.components.photo.preview = (function() {
    'use strict';

    var PhotoPreview = function(options) {
        var photoEl = null,
            titleEl = null,
            footerEl = null;

        fotoslack.views.base.call(this, options);
        this.model = this.options.model || new fotoslack.models.flickrPhoto();

        function createPhoto(images) {
            var imageEl = document.createElement('img'),
                imageUrl = images.medium.url || images.large.url || images.square.url || '',
                largeImageUrl = images.large.url || imageUrl;

            imageEl.setAttribute('src', imageUrl);
            photoEl = document.createElement('a');
            photoEl.setAttribute('href', largeImageUrl);
            photoEl.setAttribute('target', '_blank');
            photoEl.appendChild(imageEl);
        }

        function createTitle(title) {
            titleEl = document.createElement('h1');
            titleEl.classList.add('text-left');
            titleEl.appendChild(document.createTextNode('"' + title + '"'));
        }

        function createFooter(text) {
            footerEl = document.createElement('h5');
            footerEl.classList.add('text-right');
            footerEl.appendChild(document.createTextNode(text));
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

            if (footerEl) {
                this.el.removeChild(footerEl);
                footerEl = null;
            }

            if (model) {
                var title = model.get('title') || 'Untitled',
                    owner = model.get('ownerName') || '',
                    images = model.get('images');

                createPhoto(images);
                createTitle(title);
                createFooter(owner);

                this.el.appendChild(titleEl);
                this.el.appendChild(photoEl);
                this.el.appendChild(footerEl);
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


