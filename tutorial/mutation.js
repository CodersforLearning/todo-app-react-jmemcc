/* Data Change with MUTATION */
var player = { score: 1, name: 'Jeff' };
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}

// -----------------------------

/* Data Change without MUTATION */
var player = { score: 1, name: 'Jeff' };

var newPlayer = Object.assign({}, player, {score: 2});
// player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}
// OPTIONAL: if you are using object spread syntax proposal can do:
var newPlayer = {...player, score: 2};