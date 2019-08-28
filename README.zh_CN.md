# egg-error-handler

[English](./README.md)|中文

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

## 依赖说明

### 依赖的 egg 版本

egg-error-handler 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

## 安装

```bash
$ npm i egg-error-handler --save
```

## 开启插件

```js
// config/plugin.js
exports.errorHandler = {
  enable: true,
  package: 'egg-error-handler',
};
```

## 使用说明

- 该插件是一个中间件插件，使用该插件，在controller层中会自动捕获异常并处理，打印并记录错误日志，最终将向客户端响应错误信息，如下格式：

```json
{
    "code": 400,
    "success": false,
    "message": "NotFoundError:找不到你想要的"
}
```

- 默认情况下，所有种类的异常，在捕获后都会在响应数据中包含异常的原生错误提示，不过你可以使用下列方式，对特定异常隐藏错误信息（当且仅当运行环境为`prod`），而用其它文本代替： 
```js
// {app_root}/config/config.default.js
config.errorHandler2 = {
    // 开启保护（默认不开启）
    protection: true,
    // 对不可预期的错误，响应时使用tips作为客户端提示（默认值为'Internal Server Error'）
    tips:'Internal Server Error',
    // 保护对该异常类以及继承该异常类的所有子类不起作用
    ignore: [ClientError]
};
```

- **注意**:配置为`errorHandler2`，而不是`errorHandler`

## 提问交流

请到 [egg issues](https://github.com/iamljw/egg-error-handler/issues) 异步交流。

## License

[MIT](LICENSE)
