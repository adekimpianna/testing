'use strict';

const expect = chai.expect;

describe('computed properties', () => {
  it('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = {
      [wet] : 'wet', // or soup : 'wet'
      dry : 'bread'
    };
    expect(obj.soup).to.eql('wet');
    expect(obj.dry).to.eql('bread');
  });
  it('a menagerie', () => {
    const swimming = 'mackerel';
    const mackerel = 'swimming';
    const inTheSky = 'flying';
    const obj = {
      [inTheSky]: 'crane',
      [mackerel]: swimming,
      running: 'cheetah'
    };
    expect(obj.flying).to.eql('crane');
    expect(obj.running).to.eql('cheetah');
    expect(obj[mackerel]).to.eql(swimming)
  });
});
