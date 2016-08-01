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

fotoslack.views.components.button = (function() {
    'use strict';

    var Button = function(options) {
        fotoslack.views.base.call(this, options);

        this.renderButton = function () {
            var title = this.options.title || '',
                classNames = this.options.classNames || [];

            for (var i = 0; i < classNames.length; i++) {
                this.el.classList.add(classNames[i]);
            }

            this.el.setAttribute('title', title);
            this.el.appendChild(document.createTextNode(title));
        };
    };

    Button.prototype = Object.create(fotoslack.views.base.prototype);
    Button.constructor = Button;

    Button.prototype.template = function() {
        return document.createElement('button');
    };

    Button.prototype.constructView = function() {
        this.renderButton();
    };

    return Button;
}());


