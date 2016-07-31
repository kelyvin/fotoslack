var fotoslack = fotoslack || {
    configs: {},
    models: {},
    utils: {},
    views: {
        components: {},
        pages: {}
    }
};

fotoslack.views.base = (function() {
    'use strict';

    var BaseView = function(options) {
        this.options = options || {};
        this.el = '';
    };

    // Establish the initial base template
    BaseView.prototype.template = function () {
        return document.createElement('div');
    };

    // Construct any additional views onto the template.
    // This is intended to be overridden in subclassed views.
    BaseView.prototype.constructView = function() {
        return;
    };

    BaseView.prototype.render = function() {
        this.el = this.template();
        this.constructView();

        return this;
    };

    BaseView.prototype.addClickEvent = function(callback) {
        this.el.addEventListener('click', callback);
    };

    BaseView.prototype.destroy = function () {
        // get parent node of this element,
        // delete the child node (i.e. this element) by calling .removeChild
        // remove event listeners .removeEventListener
    };

    return BaseView;
}());


