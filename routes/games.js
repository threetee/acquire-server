// GET /games
exports.list = function(req, res) {
  res.send([{name:'game1'}, {name:'game2'}]);
};

// GET /games/:id
exports.findById = function (req, res) {
  res.send({id:req.params.id, name: "The Name", description: "description"});
};
