var Category=angular.module("Category",["controllers"]),totalControllers=angular.module("controllers",[]);totalControllers.controller("categoryControl",["$scope","$http",function(o,t){t({url:"api/meishi.php"}).success(function(t){o.contents=t})}]),totalControllers.controller("recreationControl",["$scope","$http",function(o,t){t({url:"api/recreation.php"}).success(function(t){o.contents=t})}]),totalControllers.controller("filmControl",["$scope","$http",function(o,t){t({url:"api/film.php"}).success(function(t){o.contents=t})}]),totalControllers.controller("hotelControl",["$scope","$http",function(o,t){t({url:"api/hotel.php"}).success(function(t){o.contents=t})}]),totalControllers.controller("lifeControl",["$scope","$http",function(o,t){t({url:"api/life.php"}).success(function(t){o.contents=t})}]),totalControllers.controller("beautyControl",["$scope","$http",function(o,t){t({url:"api/beauty.php"}).success(function(t){o.contents=t})}]),totalControllers.controller("travelControl",["$scope","$http",function(o,t){t({url:"api/travel.php"}).success(function(t){o.contents=t})}]);