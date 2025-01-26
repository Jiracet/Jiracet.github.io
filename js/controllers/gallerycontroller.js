angular.module('app', [])
    .controller('GalleryController', function($scope) {
        $scope.images = [];

        $scope.init = function(directory, n) {
            for (var i = 0; i < n; i++) {
                $scope.images[i] = "images/gallery/" + directory + "/image_(" + (i + 1) + ").png";
            }
        }
    });
