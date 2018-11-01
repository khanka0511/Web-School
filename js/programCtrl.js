function programCtrl($scope) {
    $scope.showPanel = function(event) {
        var clickedElement = angular.element(event.target);
        clickedElement.toggleClass("active");

        var panel = clickedElement.next();
        var style = window.getComputedStyle(panel[0]);
        if (style.getPropertyValue('max-height') === '0px') {
            panel.css('max-height', panel[0].scrollHeight + 'px');
        } else {
            panel.css('max-height', '0px');
        }
    }
}