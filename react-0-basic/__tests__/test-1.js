describe('test-1 test toEqual', () => {
  console.log('this is first test example by FaceBook jest ---->>>>');

  it('it should be true', ()=> {
    expect(true).toEqual(true);
  });

});

describe('test-1 test toBe', () => {
  console.log('this is first test example by FaceBook jest ---->>>>');

  it('it should be true', ()=> {
    expect('a').toBe('a');
    //expect('a').toBe('A');
  });

});
