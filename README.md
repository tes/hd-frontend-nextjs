To start you need to run `npm i` inside `/app1` `/components` and `/app2`

### ui-library
It's the ui components library and has a package name `ui-library` and you can build it inside its directory with `npm run build` which will produce both the esm and commonjs build.
At this point you can link it locally with `npm link`

### Use the Components Library locally
Inside either `app1` or `app2` you can install your modules with `npm i` and then `npm link ui-library` will make sure to link your local components library (otherwise you would have to publish it to npm in order to use it)

## GOALS
 - Run both apps with the proxy
 - Use the same components from a shared library
 - Export static css for the components library


### Findings
- If you are inside an app folder you need to use `/pages/${name_of_the_app}` and this is something probably the AppShell approach of Trulia is automatically doing for you