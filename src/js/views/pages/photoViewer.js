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

fotoslack.views.pages.photoViewer = (function() {
    'use strict';

    var PhotoViewer = function(options) {
        var lightbox = null;

        fotoslack.views.base.call(this, options);
        this.photoCollection = [];

        this.renderLightbox = function (index) {
            if (lightbox) {
                lightbox.destroy();
                lightbox = null;
            }

            lightbox = new fotoslack.views.components.lightbox({
                photoCollection: this.photoCollection,
                index: index
            });

            lightbox.render();
            this.el.appendChild(lightbox.el);
        };

        this.renderPhotos = function () {
            for (var i = 0; i < this.photoCollection.length; i++) {
                var flickrPhoto = this.photoCollection[i],
                    photoThumbnailView = new fotoslack.views.components.photo.thumbnail({
                        model: flickrPhoto
                    });

                photoThumbnailView.render();
                photoThumbnailView.addClickEvent(this.renderLightbox.bind(this, i));

                this.el.appendChild(photoThumbnailView.el);
            }
        };

        this.renderApiErrorMessage = function () {
            var apiFailMessageEl = document.createElement('h1');
            apiFailMessageEl.classList.add('error');
            apiFailMessageEl.appendChild(document.createTextNode('The Flickr API seems to have errored, cannot currently retrieve the gallery. Please refresh to try again.'));

            this.el.appendChild(apiFailMessageEl);
        };

        this.renderPhotoGallery = function () {
            var galleryId = fotoslack.configs.default.flickrGalleryId,
                loaderEl = new fotoslack.views.components.loader(),
                onFetchComplete = function (photoCollection) {
                    loaderEl.destroy();

                    if (photoCollection) {
                        this.photoCollection = photoCollection;
                        this.renderPhotos();
                    } else {
                        this.renderApiErrorMessage();
                    }
                };

            if (galleryId) {
                this.el.appendChild(loaderEl.render().el);
                fotoslack.utils.flickrApi.getGalleryPhotos(galleryId, onFetchComplete.bind(this));
            }
        };
    };

    PhotoViewer.prototype = Object.create(fotoslack.views.base.prototype);
    PhotoViewer.constructor = PhotoViewer;

    PhotoViewer.prototype.constructView = function() {
        this.el.classList.add('photo-viewer');
        this.renderPhotoGallery();
    };

    return PhotoViewer;
}());


