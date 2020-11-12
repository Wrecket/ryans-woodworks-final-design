const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: 'google',
 
  // Optional depending on the providers
  fetch: customFetchImplementation,
  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
 
const geocoder = NodeGeocoder(options);
 
// Using callback
const lookup = enw geocoder.geocode('29 champs elysée paris');
 