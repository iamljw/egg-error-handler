# egg-error-handler

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-error-handler.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-error-handler
[travis-image]: https://img.shields.io/travis/eggjs/egg-error-handler.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-error-handler
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-error-handler.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-error-handler?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-error-handler.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-error-handler
[snyk-image]: https://snyk.io/test/npm/egg-error-handler/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-error-handler
[download-image]: https://img.shields.io/npm/dm/egg-error-handler.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-error-handler

<!--
Description here.
-->

## Install

```bash
$ npm i egg-error-handler --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.errorHandler = {
  enable: true,
  package: 'egg-error-handler',
};
```

## Instructions for use

- The plugin is a middleware plugin that automatically catches exceptions and processes them in the controller layer, prints and logs error logs, and eventually responds to the client with error messages in the following format:

```json
{
     "success": false,
     "message": "NotFoundError: Can't find what you want"
}
```

- By default, all kinds of exceptions will contain an exception's native error hint in the response data after capture, but you can hide the error message for a specific exception (if and only if the runtime environment is `prod`) Instead of using other text:
```js
// {app_root}/config/config.default.js
config.errorHandler2 = {
     // Turn on protection (not enabled by default)
     protection: true,
     // For unpredictable errors, use tips as a client prompt in response (default is 'Internal Server Error')
     tips: 'Internal Server Error',
     // protect against the exception class and all subclasses that inherit the exception class do not work
     ignore: [ClientError]
};
```

- **Note**: Configured as `errorHandler2` instead of `errorHandler`


## Questions & Suggestions

Please open an issue [here](https://github.com/iamljw/egg-error-handler/issues).

## License

[MIT](LICENSE)
