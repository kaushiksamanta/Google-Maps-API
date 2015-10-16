app.directive("gmaps", function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            height: '@',
            width: '@'
        },
        template: "<div id='gmaps'></div>",
        link: function(scope, element, attrs) {
            if(scope.width)
                element.css({width:scope.width});
            if(scope.height)
                element.css({height:scope.height});
        }
    }
});
