# Template for ReactJS and Backbone.js

Initial point for creating the ReactJS and Backbone.js based applications.

## What contains

* ReactJS
* Backbone.js
* Gulp
* Browserify
* Babel

App placed in the `frontend/scripts/App/` folder.

## How to use

#### Restoring the node packages
`npm install`

#### Runing the default (browserify) gulp task

`npm run gulp`

#### Cleaning the public folder

`npm run gulp clean`

#### Building application

`npm run gulp browserify`

Build app from the folder `frontend/scripts/App/App.jsx` and save result in `public/scripts/App/App.js`.

#### Copy CSS

`npm run gulp styles`

Copy pure css styles from the folder `frontend/styles` to `public/styles`

#### Copy static content (images, html, ...)

`npm run gulp assets`

Copy static content from the folder `frontend/assets` to `public`

#### Building app

`npm run gulp build`

Include tasks

* browserify
* styles
* assets

#### Run app via browser-sync

`npm run gulp serve`

## Example

Before first run

`npm install`

Build application

```
npm run gulp clean
npm run gulp build
```

View app via browser-sync

`npm run gulp serve`
