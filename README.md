# Image Processing API

This app runs simple node.js express server with REST API for Image resizing.

## REST API

The REST API for image resizing is described below.

### Request

`GET /api/images`

Parameter name  | Parameter Description
------------- | -------------
filename  | file name saved in ./src/assets/full folder
weight  | weight of resized image
height  | height of resized image

### Request example

Example of GET request when we expect transform to not throw error: `http://localhost:3000/api/images?filename=fjord&weight=300&height=300`.

Example of GET request when we expect transform to throw error: `http://localhost:3000/api/images?filename=fjordFIXME&weight=300&height=300`.

## Get started

To get project up and running do following:

- Clone repo
- Install dependencies: `npm install`
- Start server: `npm run start`

### Eslint

`npm run lint`

### Prettier

`npm run prettier`

### Run tests

`npm run test`

### Build typescript to javascript

`npm run build`