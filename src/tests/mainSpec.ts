import supertest from 'supertest';
import app from '../main';

describe('GET /api/images', function () {
  it('should respond with 200', function (done) {
    supertest(app)
      .get('/api/images?filename=fjord&weight=300&height=300')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });
});
