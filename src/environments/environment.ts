// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    apiURL: 'http://localhost:2110/rest/api',
    homeURL: 'http://localhost:3000/home?access_token=234SDFSDj4sfSD234&provider=1',
    fitbitApiUrl: 'http://localhost:3000/oauth2/0?code=342dfsdf234fdsgh',
    appleApiUrl: 'http://localhost:3000/oauth2/1?code=324fgdfd45hjfgjs'
};
