/**
 * This is directive loading dynamic templates based on the passed type.
 * scope: @param type string : the type to identify which template to load.
 */
app.directive('dynamicTemplate', function ($compile, $templateCache, $http) {
    /** Dynamically get the template by type. */
    var getTemplate = function(contentType) {
        var templateLoader,
            baseUrl = 'views/partial/templates/',
            templateMap = {
                blog: 'blog.html',
                photo: 'photo.html',
                video: 'video.html'
            };
        /** Generating the link to load the template from. */
        var templateUrl = baseUrl + templateMap[contentType];
        templateLoader = $http.get(templateUrl, {cache: $templateCache});
        return templateLoader;
    };

    /** The link function which will be used to dynamically load the template. */
    var linker = function(scope, element, attrs) {
        var loader = getTemplate(scope.type);
        var promise = loader.success(function(html) {
            element.html(html);
        }).then(function (response) {
            element.replaceWith($compile(element.html())(scope));
        });
    };

    return {
        link: linker,
        restrict: "AE",
        /** Add as many parameters you want to pass to the isolated scope HERE. */
        scope: {
            content: '=?',
            type: '=?'
        },
        /** Here comes the logic/controller of the directive. */
        controller: function ($scope) {

        }
    }
});
