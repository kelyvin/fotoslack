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

fotoslack.models.flickrPhoto = (function() {
    'use strict';

    var FlickrPhotoModel = function(options) {
        fotoslack.models.base.call(this, options);

        this.defaults = {
            id: '',
            description: '',
            ownerName: '',
            title: '',
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
                large: {
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
                ownerName: photo.ownername,
                title: photo.title,
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
                    large: {
                        url: photo.url_k,
                        height: photo.height_k,
                        width: photo.height_k
                    }
                }
            };
        }

        return model;
    };

    return FlickrPhotoModel;
}());


