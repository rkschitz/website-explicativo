const suggestion = require("../model/suggestion")

class SuggestionController {
    async createSuggestion(title, description, userId) {
        if (!title || !description || !userId) {
            throw new Error("Titulo, descrição e id do usuário são obrigatórios");
        }

        const suggestionValue = await suggestion.create({
            title,
            description,
            userId
        });

        return suggestionValue;
    }

    async findSuggestion(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório");
        }

        const suggestion = await suggestion.findByPk(id);

        if (!suggestion) {
            throw new Error("Sugestão não encontrada");
        }

        return suggestion;
    }

    async updateSuggestion(id, title, description, validated) {
        const oldSuggestion = await suggestion.findByPk(id);

        oldSuggestion.title = title || oldSuggestion.title;
        oldSuggestion.description = description || oldSuggestion.description;
        oldSuggestion.validated = validated || oldSuggestion.validated;

        console.log(oldSuggestion)

        oldSuggestion.save();

        return oldSuggestion;
    }

    async deleteSuggestion(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório");
        }

        const suggestionValue = await suggestion.findByPk(id);
        console.log('Aquiii', suggestionValue)
        suggestionValue.destroy();

        return;
    }

    async findSuggestions() {
        return suggestion.findAll();
    }

    async findUserSuggestions(userId) {
        return suggestion.findAll({
            where: {
                userId
            }
        });
    }
}


module.exports = new SuggestionController();