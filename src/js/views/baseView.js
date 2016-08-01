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

    // get parent node of this element,
    // delete the child node (i.e. this element) by calling .removeChild
    BaseView.prototype.destroy = function () {
        var parentNode = this.el.parentNode;

        if (parentNode) {
            parentNode.removeChild(this.el);
        }

    };

    return BaseView;
}());


