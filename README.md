# Leaflet JS map in Google Maps design layer using

Leaflet JS is a free map library that is completely free and available to everyone. You can see what they are up to by checking out their website;

https://leafletjs.com/

Under normal circumstances, it is common and preferred to use OpenStreetMap-based, that is, another open source code map design together with Leaflet JS. To look at the sample designs here;

https://leaflet-extras.github.io/leaflet-providers/preview/

But if you want, you can also use Google Maps technology for design and map images;

## How to use Google Maps Layer?

First of all, the url that will be written in the tilelayer section will change the web address. So what values will come here?

**Street view;**

L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

**Hybrid view;**

L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

**Satellite view;**

L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

**Terrain view;**

L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

**Traffic layer**

L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});
