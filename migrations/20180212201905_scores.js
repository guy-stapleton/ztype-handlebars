exports.up = function(knex, Promise) {
    return knex.schema.createTable('scores', (table) => {
      table.increments()
      table.date('date')
      table.integer('score')
      table.integer('typing_accuracy')
      table.integer('wave')
      table.integer('longest_streak')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores')
};
