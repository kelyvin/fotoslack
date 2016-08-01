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

        this.photoCollection = [];

        this.renderPhotos = function () {
            for (var i = 0; i < this.photoCollection.length; i++) {
                var flickrPhoto = this.photoCollection[i],
                    photoThumbnailView = new fotoslack.views.components.photoThumbnail({
                        model: flickrPhoto
                    });

                // Add click event to open lightbox
                // photoThumbnailView.addClickEvent()
                photoThumbnailView.render();
                this.el.appendChild(photoThumbnailView.el);
            }
        };

        this.renderApiErrorMessage = function () {
            var apiFailMessageEl = document.createElement('h1');
            apiFailMessageEl.classList.add('error');
            apiFailMessageEl.appendChild(document.createTextNode('The Flickr API seems to have errored, cannot currently retrieve the gallery. Please refresh to try again.'));

            this.el.appendChild(apiFailMessageEl);
        }

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


