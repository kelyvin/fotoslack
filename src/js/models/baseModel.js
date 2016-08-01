var fotoslack = fotoslack || {
    configs: {},
    models: {},
    utils: {},
    views: {
        components: {},
        pages: {}
    }
};

fotoslack.models.base = (function() {
    'use strict';

    var BaseModel = function(options) {
        this.model = this.parse(options);
    };

    BaseModel.prototype.parse = function (json) {
        if (json) {
            return json;
        }

        return {};
    };

    BaseModel.prototype.get = function (key) {
        if (this.model.hasOwnProperty(key)) {
            return this.model[key];
        }

        return null;
    };

    BaseModel.prototype.set = function (key, value) {
        this.model[key] = value;
        return value;
    };

    return BaseModel;
}());


