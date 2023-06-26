
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: 0.01})).toEqual(222.44);
  expect(calculateMonthlyPayment({
      amount: 82000,
      years: 30,
      rate: 0.02})).toEqual(1641.32);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: 0.01})).toBeCloseTo(222.44, 5);
  expect(calculateMonthlyPayment({
      amount: 82000,
      years: 30,
      rate: 0.02})).toBeCloseTo(1641.32, 5);
});

