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

fotoslack.utils.apiHelper = (function() {
    'use strict';

    function constructUrl (host, resource, queryParams) {
        var url = host + resource;

        if (queryParams) {
            var keys = Object.keys(queryParams);

            if (keys.length > 0) {
                url += '?';

                for (var i = 0; i < keys.length; i++) {
                    var currKey = keys[i];
                    url += currKey + '=' + queryParams[currKey];

                    if (i !== keys.length - 1) {
                       url += '&';
                    }
                }
            }
        }

        return encodeURI(url);
    }

    function get(url, callback) {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                var responseJson = null;

                if (request.status === 200) {
                    var response = request.responseText;

                    // If response body is empty, potentially no images in gallery
                    if (response) {
                        try {
                            responseJson = JSON.parse(response);
                        } catch (e) {
                            // If the API returns malformed JSON, we want to throw an error
                            responseJson = null;
                        }
                    } else {
                        responseJson = {};
                    }
                }

                callback.call(this, responseJson);
            }
        };

        request.open('GET', url, true);
        request.send();
    }

    return {
        get: get,
        constructUrl: constructUrl
    };
}());


