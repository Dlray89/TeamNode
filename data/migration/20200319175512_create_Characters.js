
exports.up = function(knex) {
  return knex.schema
  .createTable("characters", tbl => {
      tbl.increments()


      tbl
      .string("name", 200)
      .notNullable()
      .unique()
      .index()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("characters")
};
