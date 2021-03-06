
module.exports = (function() {
  'use strict';

  //skip self signed cer check
  //https://github.com/visionmedia/superagent/issues/188
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  var confige2e = {};

  confige2e.authentication = {
      scopes : {
        SOIL_AREA :'SOIL_AREA_SERVICES'
      },
      url : 'https://oauth-fb-stg.agriculture.vic.gov.au/core/connect/token',
      scope : 'WFS_SERVICES',
      clientId : '',
      clientSecret : ''
      };

  confige2e.devwfs = {
      soils : 'https://farmbuild-ws.dev.ag.ecodev.vic.gov.au/soils',
      parcels: 'https://farmbuild-ws.dev.ag.ecodev.vic.gov.au/parcels',
      soilareas: 'https://farmbuild-soil.dev.ag.ecodev.vic.gov.au/areas'
      };

  confige2e.wfs = {
    soils : 'https://farmbuild-wfs-stg.agriculture.vic.gov.au/geoserver/farmbuild/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=farmbuild:soils&outputFormat=text/javascript',
    parcels: 'https://farmbuild-wfs-stg.agriculture.vic.gov.au/geoserver/farmbuild/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=farmbuild:parcels&outputFormat=text/javascript',
    soilareas: 'https://farmbuild-soil-stg.agriculture.vic.gov.au/areas'
  };

  console.log('config created: %j', confige2e);

  return confige2e;
});