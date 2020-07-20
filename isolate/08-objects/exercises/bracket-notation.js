'use strict';

const expect = chai.expect;

describe('bracket notation', () => {
  it('types of tasty treats', () => {
    const key1 = 'dry';
    const key2 = 'wet';
    const obj = {};
    obj[key2] = 'soup';
    obj[key1] = 'bread'
    expect(obj.wet).to.eql('soup');
    expect(obj[key1]).to.eql('bread');
  });
  it('a menagerie', () => {
    const motion = 'running';
    const fastAnimal = 'cheetah';
    const water = 'swimming';
    const obj = {
      swimming: 'mackerel'
    };
    obj[motion] = fastAnimal;
    obj['flying'] = 'crane';
    expect(obj.flying).to.eql('crane');
    expect(obj.running).to.eql(fastAnimal);
    expect(obj[water]).to.eql('mackerel')
  });
});

