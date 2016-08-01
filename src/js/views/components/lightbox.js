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

fotoslack.views.components.lightbox = (function() {
    'use strict';

    var Lightbox = function(options) {
        var photoPreviewView = null;

        fotoslack.views.base.call(this, options);
        this.photoCollection = this.options.photoCollection || [];
        this.index = this.options.index || 0;

        this.renderCloseButton = function () {
            // TODO: implement this
        };

        this.renderControls = function () {
            var buttonContainer = document.createElement('div'),
                prevButtonEl = document.createElement('button'),
                nextButtonEl = document.createElement('button');

            buttonContainer.classList.add('button-controls-container');
            prevButtonEl.classList.add('left');
            nextButtonEl.classList.add('right');

            prevButtonEl.appendChild(document.createTextNode('←'));
            nextButtonEl.appendChild(document.createTextNode('→'));

            prevButtonEl.addEventListener('click', function () {
                if (this.index >= 1) {
                    this.index--;
                    this.renderPhoto(this.index);
                }
            }.bind(this));

            nextButtonEl.addEventListener('click', function () {
                if (this.index < this.photoCollection.length - 1) {
                    this.index++;
                    this.renderPhoto(this.index);
                }
            }.bind(this));

            buttonContainer.appendChild(prevButtonEl);
            buttonContainer.appendChild(nextButtonEl);

            this.el.appendChild(buttonContainer);
        };

        this.renderPhotoPreview = function () {
            if ((this.index) >= 0 && (this.index < this.photoCollection.length)) {
                photoPreviewView = new fotoslack.views.components.photo.preview({
                    model: this.photoCollection[this.index]
                });

                this.el.appendChild(photoPreviewView.render().el);
            }
        };

        this.renderPhoto = function (index) {
            if (photoPreviewView) {
                var model = this.photoCollection[index];
                photoPreviewView.renderPhoto(model);
            }
        };

        this.renderLightbox = function () {
            this.el.classList.add('lightbox');

            this.renderCloseButton();
            this.renderPhotoPreview();
            this.renderControls();

            this.renderPhoto(this.index);
        };
    };

    Lightbox.prototype = Object.create(fotoslack.views.base.prototype);
    Lightbox.constructor = Lightbox;

    Lightbox.prototype.constructView = function() {
        this.renderLightbox();
    };

    return Lightbox;
}());


