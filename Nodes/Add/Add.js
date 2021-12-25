module.exports = function (RED) {
  function add(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.on("input", function (msg) {
      var n1 = Number(config.n1);
      var n2 = Number(config.n2);
      var result = n1 + n2;

      var payload = {};
      payload["N1"] = n1;
      payload["N2"] = n2;
      payload["result"] = result;
      msg.payload = payload;

      node.send(msg);
    });
  }
  RED.nodes.registerType("Add", add);
};
