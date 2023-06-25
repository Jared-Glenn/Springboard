
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: 0.01})).toBeCloseTo(222.44, 2)
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
