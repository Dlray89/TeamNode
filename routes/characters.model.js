const database = require("../data/db.config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return database("characters");
}

function findById(id) {
  return database("characters")
    .where({ id })
    .first();
}

function add(characters) {
  return database("characters")
    .insert(characters, "id")
    .then(ids => ({ id: ids[0] }));

  // const [id] =
}

function update(id, changes) {
  return database("characters")
    .where({ id })
    .update(changes, "*");
}

function remove() {
  return database("characters")
    .where({ id })
    .del();
}
