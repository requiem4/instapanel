/**
 * Config file
 * @type {{production: {apiVersion: *, apiPath: *}, local: {apiVersion: *, apiPath: *}}}
 */
const config = {
  local: {
    apiPath: 'https://api.punkapi.com/',
    apiVersion: 'v2',
  },
  development: {
    apiPath: 'https://api.punkapi.com/',
    apiVersion: 'v2',
  },
  production: {
    apiPath: 'https://api.punkapi.com/',
    apiVersion: 'v2',
  },
};

let currentConfig = config.local
if(process.env.REACT_APP_STAGE === 'production'){
  currentConfig = config.production;
}
if(process.env.REACT_APP_STAGE === 'development'){
  currentConfig = config.development;
}
module.exports = currentConfig;
