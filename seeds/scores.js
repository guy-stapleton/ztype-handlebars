exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {id: 1, date: '2018-02-7', score: 232, typing_accuracy: 82, wave: 007, longest_streak: 32},
        {id: 2, date: '2018-02-8', score: 267, typing_accuracy: 77, wave: 008, longest_streak: 27},
        {id: 3, date: '2018-02-9', score: 274, typing_accuracy: 81, wave: 007, longest_streak: 54},
        {id: 4, date: '2018-02-9', score: 246, typing_accuracy: 86, wave: 006, longest_streak: 53},
        {id: 5, date: '2018-02-9', score: 382, typing_accuracy: 82, wave: 0011, longest_streak: 36}
      ]);
    });
};
