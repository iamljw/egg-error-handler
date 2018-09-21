'use strict';

const mock = require('egg-mock');

describe('test/error-handler.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/error-handler-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, errorHandler')
      .expect(200);
  });
});
