
describe('getNumCols', function() {
  it("is 4 for 16 sent int", function() {
    expect(getNumCols(16)).to.equal(4);
  });

  it("is 3 for 5 sent int", function() {
    expect(getNumCols(5)).to.equal(3);
  });


});

/*

describe('getNumCols', function() {
  it("is 4 for 16 sent int", function() {
    expect(getNumCols(16))).to.equal(4);
  });

});
*/
//removed functions
/*
describe('isTriangle', function() {
  it("it is true when all sides are even", function() {
    expect(isTriangle(4, 4, 4)).to.equal(true);
  });

});
describe('isEqual', function() {
  it("it is true when all sides are even", function() {
    expect(isEqual(4, 4, 4)).to.equal(true);
  });

});
*/
