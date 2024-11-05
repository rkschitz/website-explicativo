const User = require("./user");
const Suggestion = require("./suggestion");

User.hasMany(Suggestion, {foreignKey: 'userId', as: 'suggestions'});
Suggestion.belongsTo(User, {foreignKey: 'userId', as: 'user'});