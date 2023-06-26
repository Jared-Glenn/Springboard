describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = '27.32';
      tipAmtInput.value = '5.50';
    });
  
    it('should record the bill amount in the payment table', function() {
      submitPaymentInfo()
      let billTable = document.getElementById('payment1');
      let billAmount = billTable.firstChild.innerText;
      expect(billAmount).toEqual('$27.32');
    })
  
    it('should correctly collect the values in the inputs', function() {
        let curPayment = createCurPayment();
        expect(curPayment.tipAmt).toEqual('5.50');
        expect(curPayment.billAmt).toEqual('27.32');
    })

  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      
      allPayments = {};
      paymentId = 0;

      while (paymentTbody.firstChild) {
        paymentTbody.removeChild(paymentTbody.firstChild);
      }
    });
  });
  