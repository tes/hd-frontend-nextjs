### Getting started
In each folder `blog` `users` `home` and `test-ui-components` you need to install npm modules.
From the root folder you can run the proxy with `npm run proxy`.

### test-ui-components
It's the ui components library and has a package name `test-ui-components` and you can build it inside its directory with `npm run build` which will produce both the esm and commonjs build.
At this point you can link it locally with `npm link`

### Use the Components Library locally
Inside either `/blog` or `/user` or `/home` you can install your modules with `npm i` and then `npm link ui-library` will make sure to link your local components library (otherwise you would have to publish it to npm in order to use it)

## GOALS
 - Run all 3 apps with the proxy
 - Use the same components from a shared library
 - Export static css for the components library
 - Understand more about the transition between pages
 - Evaluate a "boilerplate" to share across apps (AppShell approach maybe?)


### Findings
- At the moment it's not possible to navigate between different apps (zones) and avoid page reloading
- If you are inside an app folder you need to use `/pages/${name_of_the_app}` and this is something probably the AppShell approach of Trulia is automatically doing for you
