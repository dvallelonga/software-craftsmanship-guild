var DynamicMap = new Interface('DynamicMap', ['centerOnPoint', 'zoom', 'draw']);

/* 3rd party DynamicMapAPI v1.0 */
var DynamicAPI = function () {
	// Implements centerOnPoint, zoom, and draw prototype methods
}

function displayRoute(mapInstance) {
    Interface.ensureImplements(mapInstace, DynamicMap);
    // Interface.ensureImplements throws error if mapInstance doesn't have the method names 
    mapInstance.centerOnPoint(12, 34);
    mapInstance.zoom(5);
    mapInstance.draw();
    // ...
}

/* Usage example 1 */
var cityMap = new DynamicAPI();
displayRoute(cityMap); /*** What happens? ***/

/* ================================================ */

var DynamicMap = new Interface('DynamicMap', ['centerOnPoint', 'zoom', 'draw']);

/* Mock example of DynamicMapAPI v2.0 */
var DynamicAPI = function () {
	// Implements centerOnPoint, zoomIn, zoomOut, and draw prototype methods
}

function displayRoute(mapInstance) {
    Interface.ensureImplements(mapInstace, DynamicMap);

    mapInstance.centerOnPoint(12, 34);
    mapInstance.zoom(5);
    mapInstance.draw();
}

/* Usage example 2 */
var cityMap = new DynamicAPI();
displayRoute(cityMap); /*** What happens? ***/

