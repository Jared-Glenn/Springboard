describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
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
    console.log(numTotal);
    expect(numTotal).toEqual(serverTbody.rows.length);
  })

  afterEach(function() {
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
