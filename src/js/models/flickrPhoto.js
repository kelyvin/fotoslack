var fotoslack = fotoslack || {
    configs: {},
    models: {},
    utils: {},
    views: {
        components: {},
        pages: {}
    }
};

fotoslack.models.flickrPhoto = (function() {
    'use strict';

    var FlickrPhotoModel = function(options) {
        fotoslack.models.base.call(this, options);

        this.defaults = {
            id: '',
            description: '',
            ownername: '',
            images: {
                square: {
                    url: '',
                    height: '',
                    width: ''
                },
                medium: {
                    url: '',
                    height: '',
                    width: ''
                },
                original: {
                    url: '',
                    height: '',
                    width: ''
                }
            }
        };
    };

    FlickrPhotoModel.prototype = Object.create(fotoslack.models.base.prototype);
    FlickrPhotoModel.constructor = FlickrPhotoModel;

    FlickrPhotoModel.prototype.parse = function (photo) {
        var model = this.defaults;

        if (photo) {
            model = {
                id: photo.id,
                description: photo.description._content,
                ownername: photo.ownername,
                images: {
                    square: {
                        url: photo.url_q,
                        height: photo.height_q,
                        width: photo.width_q
                    },
                    medium: {
                        url: photo.url_c,
                        height: photo.height_c,
                        width: photo.width_c
                    },
                    original: {
                        url: photo.url_o,
                        height: photo.height_o,
                        width: photo.height_o
                    }
                }
            };
        }

        return model;
    };

    return FlickrPhotoModel;
}());


