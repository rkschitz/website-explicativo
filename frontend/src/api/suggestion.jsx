import api from './api';

export const createSuggestion = async (suggestion) => {
    const response = await api.post('/api/v1/suggestion', suggestion);
    return response;
}

export const getAllSuggestions = async () => {
    const response = await api.get(`/api/v1/suggestion`);
    return response;
}

export const updateSuggestion = async (suggestion) => {
    const response = await api.put(`/api/v1/suggestion/${suggestion.suggestionId}`, suggestion);
    return response;
}

export const deleteSuggestion = async (suggestionId) => {
    const response = await api.delete(`/api/v1/suggestion/${suggestionId}`);
    return response;
}