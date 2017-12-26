// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    apiURL: 'http://192.168.15.178:4000',
    homeURL: 'http://localhost:3000/home',
    fitbitApiUrl: 'http://localhost:3000/oauth2/0',
    fitbitRestApi: 'https://api.fitbit.com/1/user/-',
    appleApiUrl: 'http://localhost:3000/oauth2/1',
    geoApi: 'https://www.googleapis.com/geolocation/v1/geolocate',
    mapKey: 'AIzaSyBCVJPfwKSgIrz0VWZDL6LNUWMK7M6oR_w'
};
