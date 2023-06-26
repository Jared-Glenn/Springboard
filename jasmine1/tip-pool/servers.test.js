describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    billAmtInput.value = '27.32';
    tipAmtInput.value = '5.50';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should leave the server name space blank', function() {
    submitServerInfo();
    expect(serverNameInput.value).toEqual("");
  })

  it('should have a number of rows equaling the number of servers', function() {
    submitServerInfo();
    updateServerTable();
    let numTotal = 0
    for (let num in allServers){
      numTotal++;
    }
    expect(numTotal).toEqual(serverTbody.rows.length);
  })

  it('should record the bill amount in the payment table', function() {
    submitPaymentInfo()
    let billTable = document.getElementById('payment1');
    let billAmount = billTable.firstChild.innerText;
    console.log(billAmount)
    expect(billAmount).toEqual('$27.32');
  })


  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    
    allPayments = {};
    paymentId = 0;
    
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
