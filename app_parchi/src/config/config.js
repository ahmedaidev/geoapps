const geoserver = `${process.env.REACT_APP_GEOSERVER_URL}`
const workspace = `${process.env.REACT_APP_GEOSERVER_WORKSPACE}`

export const url = `${geoserver}/geoserver/${workspace}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${workspace}:parchi_poligoni&maxFeatures=50&outputFormat=application/json`
