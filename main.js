import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import Stamen from 'ol/source/Stamen';
import VectorLayer from 'ol/layer/Vector';
import Vector from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import * as olProj from 'ol/proj';

const map = new Map({
    target: 'map',
    view: new View({
        center: olProj.fromLonLat([16.37, 48.2]),
        zoom: 13
    })
});

map.addLayer(new TileLayer({
    source: new Stamen({
        layer: 'watercolor'
    })
}));

const countries = new VectorLayer({
    source: new Vector({
        url: 'data/countries.json',
        format: new GeoJSON()
    })
});
map.addLayer(countries);

const grenzen = new VectorLayer({
    source: new Vector({
        url: 'data/grenzen.json',
        format: new GeoJSON()
    })
});
map.addLayer(grenzen);

const poi = new VectorLayer({
    source: new Vector({
        url: 'data/poi.json',
        format: new GeoJSON()
    })
});
map.addLayer(poi);

poi.setStyle(function (feature) {
    return new Style({
        text: new Text({
            text: feature.get('name'),
            font: 'Bold 14pt Verdana',
            stroke: new Stroke({
                color: 'white',
                width: 3
            })
        })
    });
});