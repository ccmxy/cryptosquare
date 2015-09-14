
describe('getNumCols', function() {
  it("is 4 for 16 sent int", function() {
    expect(getNumCols(16)).to.equal(4);
  });

  it("is 3 for 5 sent int", function() {
    expect(getNumCols(5)).to.equal(3);
  });


});
