var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
        highlightLayer.setStyle({
        color: '#ffff00',
        });
    } else {
        highlightLayer.setStyle({
        fillColor: '#ffff00',
        fillOpacity: 1
        });
    }
}
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[24.86619838193481,66.96387897369767],[24.961626785201318,67.14908965830324]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
L.control.locate({locateOptions: {maxZoom: 19}}).addTo(map);
var measureControl = new L.Control.Measure({
    position: 'topleft',
    primaryLengthUnit: 'feet',
    secondaryLengthUnit: 'miles',
    primaryAreaUnit: 'sqfeet',
    secondaryAreaUnit: 'sqmiles'
});
measureControl.addTo(map);
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
.innerHTML = '';
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
.className += ' fas fa-ruler';
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_OSMStandard_0');
map.getPane('pane_OSMStandard_0').style.zIndex = 400;
var layer_OSMStandard_0 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OSMStandard_0',
    opacity: 1.0,
    attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OSMStandard_0;
map.addLayer(layer_OSMStandard_0);
function pop_amenity_school_Karachi_10000_1(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong>name</strong><br />' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_amenity_school_Karachi_10000_1_0() {
    return {
        pane: 'pane_amenity_school_Karachi_10000_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(1,5,255,0.5)',
        interactive: true,
    }
}
map.createPane('pane_amenity_school_Karachi_10000_1');
map.getPane('pane_amenity_school_Karachi_10000_1').style.zIndex = 401;
map.getPane('pane_amenity_school_Karachi_10000_1').style['mix-blend-mode'] = 'normal';
var layer_amenity_school_Karachi_10000_1 = new L.geoJson(json_amenity_school_Karachi_10000_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_amenity_school_Karachi_10000_1',
    layerName: 'layer_amenity_school_Karachi_10000_1',
    pane: 'pane_amenity_school_Karachi_10000_1',
    onEachFeature: pop_amenity_school_Karachi_10000_1,
    style: style_amenity_school_Karachi_10000_1_0,
});
bounds_group.addLayer(layer_amenity_school_Karachi_10000_1);
map.addLayer(layer_amenity_school_Karachi_10000_1);
function pop_amenity_university_Karachi_15000_2(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong>name</strong><br />' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_amenity_university_Karachi_15000_2_0() {
    return {
        pane: 'pane_amenity_university_Karachi_15000_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,1,18,0.5)',
        interactive: true,
    }
}
map.createPane('pane_amenity_university_Karachi_15000_2');
map.getPane('pane_amenity_university_Karachi_15000_2').style.zIndex = 402;
map.getPane('pane_amenity_university_Karachi_15000_2').style['mix-blend-mode'] = 'normal';
var layer_amenity_university_Karachi_15000_2 = new L.geoJson(json_amenity_university_Karachi_15000_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_amenity_university_Karachi_15000_2',
    layerName: 'layer_amenity_university_Karachi_15000_2',
    pane: 'pane_amenity_university_Karachi_15000_2',
    onEachFeature: pop_amenity_university_Karachi_15000_2,
    style: style_amenity_university_Karachi_15000_2_0,
});
bounds_group.addLayer(layer_amenity_university_Karachi_15000_2);
map.addLayer(layer_amenity_university_Karachi_15000_2);
function pop_Custom_education_institutes_3(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><strong>Name</strong><br />' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Custom_education_institutes_3_0() {
    return {
        pane: 'pane_Custom_education_institutes_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(81,255,1,0.5)',
        interactive: true,
    }
}
map.createPane('pane_Custom_education_institutes_3');
map.getPane('pane_Custom_education_institutes_3').style.zIndex = 403;
map.getPane('pane_Custom_education_institutes_3').style['mix-blend-mode'] = 'normal';
var layer_Custom_education_institutes_3 = new L.geoJson(json_Custom_education_institutes_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Custom_education_institutes_3',
    layerName: 'layer_Custom_education_institutes_3',
    pane: 'pane_Custom_education_institutes_3',
    onEachFeature: pop_Custom_education_institutes_3,
    style: style_Custom_education_institutes_3_0,
});
bounds_group.addLayer(layer_Custom_education_institutes_3);
map.addLayer(layer_Custom_education_institutes_3);
function pop_amenity_college_Karachi_10000_4(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong>name</strong><br />' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_amenity_college_Karachi_10000_4_0() {
    return {
        pane: 'pane_amenity_college_Karachi_10000_4',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,94,1,0.5)',
        interactive: true,
    }
}
map.createPane('pane_amenity_college_Karachi_10000_4');
map.getPane('pane_amenity_college_Karachi_10000_4').style.zIndex = 404;
map.getPane('pane_amenity_college_Karachi_10000_4').style['mix-blend-mode'] = 'normal';
var layer_amenity_college_Karachi_10000_4 = new L.geoJson(json_amenity_college_Karachi_10000_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_amenity_college_Karachi_10000_4',
    layerName: 'layer_amenity_college_Karachi_10000_4',
    pane: 'pane_amenity_college_Karachi_10000_4',
    onEachFeature: pop_amenity_college_Karachi_10000_4,
    style: style_amenity_college_Karachi_10000_4_0,
});
bounds_group.addLayer(layer_amenity_college_Karachi_10000_4);
map.addLayer(layer_amenity_college_Karachi_10000_4);
var osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing'
}).addTo(map);
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
.className += ' fa fa-search';
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
.title += 'Search for a place';
setBounds();