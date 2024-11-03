const SuggestionController = require('../controller/suggestion');

class SuggestionApi {
    async createSuggestion(req, res) {
        const { id } = req.session;
        const { title, description } = req.body;

        try {
            const suggestion = await SuggestionController.createSuggestion(title, description, id);
            return res.status(201).send(suggestion);
        } catch (e) {
            console.log(e);
            return res.status(400).send({ error: `Erro ao criar sugestão: ${e.message}` });
        }
    }

    async updateSuggestion(req, res) {
        const { id } = req.params;
        const { title, description} = req.body;

        console.log('Aquiiiiiiiiiiiiiiiiiiiiiiiiiiii',req.session.role)

        try {
            const suggestion = await SuggestionController.updateSuggestion(id, title, description, req.session.role === 'admin' ? true : false);
            return res.status(200).send(suggestion);
        } catch (e) {
            return res.status(400).send({ error: `Erro ao atualizar sugestão: ${e.message}` });
        }
    }

    async deleteSuggestion(req, res) {
        const { id } = req.params;

        try {
            await SuggestionController.deleteSuggestion(id);
            return res.status(204).send();
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar sugestão: ${e.message}` });
        }
    }

    async findSuggestions(req, res) {
        const { id, role } = req.session;

        if (role === 'admin') {
            try {
                const suggestion = await SuggestionController.findSuggestions();
                return res.status(200).send(suggestion);
            } catch (e) {
                return res.status(400).send({ error: `Erro ao buscar sugestão: ${e.message}` });
            }
        }
        else {
            try {
                const suggestion = await SuggestionController.findUserSuggestions(id);
                return res.status(200).send(suggestion);
            } catch (e) {
                return res.status(400).send({ error: `Erro ao buscar sugestão: ${e.message}` });
            }
        }
    }


}

module.exports = new SuggestionApi()