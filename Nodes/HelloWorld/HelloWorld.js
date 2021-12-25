module.exports = function (RED) {
  function helloWorld(config) {
    RED.nodes.createNode(this, config);
    var context = this.context();
    var node = this;

    node.on("input", function (msg) {
      //   msg.payload = msg.payload.toLowerCase();
      // var outMsg = { payload: "Hello World", input: msg.payload };
      var input = {};
      input["name"] = config.name;
      input["topic"] = config.topic;

      var payload = {};
      payload["payload_input"] = msg.payload;
      payload["node_input"] = input;
      payload["node_output"] = "Hello World 'output'";

      msg.payload = payload;

      node.send(msg);
    });
  }
  RED.nodes.registerType("HelloWorld", helloWorld);
};
