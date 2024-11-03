import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import { AuthContext } from '../../auth/Context';
import { createSuggestion, deleteSuggestion, getAllSuggestions, updateSuggestion } from '../../api/suggestion';

function Suggestion() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [sugestoes, setSugestoes] = useState([]);
    const [isNewSuggestion, setIsNewSuggestions] = useState(true);
    const [suggestionId, setSuggestionId] = useState(null);

    const { role } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isNewSuggestion) {
            const novaSugestao = { title, description };
            try {
                const response = await createSuggestion(novaSugestao);
                setSugestoes([response.data]);
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            const newSugestao = { suggestionId, title, description };

            try {
                const response = await updateSuggestion(newSugestao);
                setSugestoes([response.data]);
            }
            catch (error) {
                console.error(error);
            }
        }
        setIsNewSuggestions(true);
        clearForm();
    };

    const validateSuggestion = async (suggestion) => {
        const response = await updateSuggestion(suggestion);
        if (response.status === 200) {
            getSuggestions();
        }
    };

    const handleDelete = async (suggestion) => {
        const response = await deleteSuggestion(suggestion);
        if (response.status === 204) {
            getSuggestions();
        }
    };

    const handleUpdate = async (suggestion) => {
        setSuggestionId(suggestion.suggestionId)
        setTitle(suggestion.title);
        setDescription(suggestion.description);
        setIsNewSuggestions(false);
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
    }

    const getSuggestions = async () => {
        try {
            const response = await getAllSuggestions();
            setSugestoes(response.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getSuggestions();
    }, [])

    return (
        <div className="container">
            {role !== 'admin' && (
                <>
                    <h1>Formulário de Sugestão</h1>
                    <form>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Título da Sugestão"
                            required
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição da Sugestão"
                            rows="5"
                            required
                        />
                        <button type="submit" onClick={handleSubmit}>{isNewSuggestion ? 'Adicionar Sugestão' : 'Alterar sugestão'}</button>
                    </form>
                </>
            )}
            <h2>Sugestões</h2>
            <ul>
                {sugestoes.map((sugestao, index) => (
                    <li key={index}>
                        <strong>{sugestao.title}</strong>: {sugestao.description}
                        {!sugestao.validated && (role !== 'admin' ?
                            <button onClick={() => handleDelete(sugestao.suggestionId)}>Excluir</button>
                            : <button onClick={() => validateSuggestion(sugestao)}>Validar</button>)}
                        {!sugestao.validated && <button onClick={() => handleUpdate(sugestao)}>Editar</button>}
                        {sugestao.validated && <span>Validado</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Suggestion;
