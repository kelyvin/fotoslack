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

fotoslack.views.components.lightbox = (function() {
    'use strict';

    var Lightbox = function(options) {
        var lightBoxContainer = null,
            photoPreviewView = null;

        fotoslack.views.base.call(this, options);
        this.photoCollection = this.options.photoCollection || [];
        this.index = this.options.index || 0;

        this.navigateLeft = function () {
            if (this.index >= 1) {
                this.index--;
                this.renderPhoto(this.index);
            }
        };

        this.navigateRight = function () {
            if (this.index < this.photoCollection.length - 1) {
                this.index++;
                this.renderPhoto(this.index);
            }
        };

        this.renderPhoto = function (index) {
            if (photoPreviewView) {
                var model = this.photoCollection[index];
                photoPreviewView.renderPhoto(model);
            }
        };

        this.renderCloseButton = function () {
            var buttonContainer = document.createElement('div'),
                closeButton = new fotoslack.views.components.button({
                    title: 'x',
                    classNames: ['close-button']
                });

            closeButton.render();
            closeButton.addClickEvent(this.destroy.bind(this));

            buttonContainer.classList.add('text-right');
            buttonContainer.appendChild(closeButton.el);
            this.el.appendChild(buttonContainer);
        };

        this.renderNavigationControls = function () {
            var buttonContainer = document.createElement('div'),
                prevButton = new fotoslack.views.components.button({
                    title: '←',
                    classNames: ['btn']
                }),
                nextButton = new fotoslack.views.components.button({
                    title: 'Next',
                    classNames: ['btn', 'btn-call-to-action']
                });

            prevButton.render();
            nextButton.render();
            prevButton.addClickEvent(this.navigateLeft.bind(this));
            nextButton.addClickEvent(this.navigateRight.bind(this));

            buttonContainer.classList.add('navigation-container', 'text-right');
            buttonContainer.appendChild(prevButton.el);
            buttonContainer.appendChild(nextButton.el);

            lightBoxContainer.appendChild(buttonContainer);
        };

        this.renderPhotoPreview = function () {
            if ((this.index) >= 0 && (this.index < this.photoCollection.length)) {
                photoPreviewView = new fotoslack.views.components.photo.preview({
                    model: this.photoCollection[this.index]
                });

                lightBoxContainer.appendChild(photoPreviewView.render().el);
            }
        };

        this.renderLightbox = function () {
            lightBoxContainer = document.createElement('div');
            lightBoxContainer.classList.add('container');
            lightBoxContainer.addEventListener('click', function (event) {
                // Prevents click events on the lightbox from closing within the main area
                event.stopPropagation();
            });

            this.el.classList.add('lightbox');
            this.el.appendChild(lightBoxContainer);
            this.renderNavigationControls();
            this.renderPhotoPreview();
            this.renderPhoto(this.index);
        };
    };

    Lightbox.prototype = Object.create(fotoslack.views.base.prototype);
    Lightbox.constructor = Lightbox;

    Lightbox.prototype.constructView = function() {
        this.renderCloseButton();
        this.renderLightbox();
    };

    Lightbox.prototype.postRender = function () {
        // Allow to click anywhere to close the lightbox
        this.addClickEvent(this.destroy.bind(this));
        document.onkeydown = function (event) {
            switch (event.keyCode) {
                case fotoslack.enums.keyCodes.leftArrow:
                    this.navigateLeft();
                    break;
                case fotoslack.enums.keyCodes.rightArrow:
                    this.navigateRight();
                    break;
                case fotoslack.enums.keyCodes.escape:
                    this.destroy();
                    break;
                default:
                    break;
            }
        }.bind(this);
    };

    Lightbox.prototype.destroy = function () {
        document.onkeydown = null;
        fotoslack.views.base.prototype.destroy.call(this);
    };

    return Lightbox;
}());