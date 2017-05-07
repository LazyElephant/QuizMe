import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/server';

const expect = chai.expect;
chai.use(chaiHttp);

describe('home controller', () => {
  describe('GET /', () => {
    it('should say hello', function(done) {
      chai.request(server)
        .get('/')
        .end( function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
