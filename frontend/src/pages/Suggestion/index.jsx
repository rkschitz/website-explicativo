import React, { useContext, useState } from 'react';
import './styles.css';
import { AuthContext } from '../../auth/Context';

function Suggestion() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [sugestoes, setSugestoes] = useState([]);

    const {role} = useContext(AuthContext);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const novaSugestao = { titulo, descricao };
        setSugestoes([...sugestoes, novaSugestao]);
        setTitulo('');
        setDescricao('');
    };

    const handleDelete = (index) => {
        const novasSugestoes = sugestoes.filter((_, i) => i !== index);
        setSugestoes(novasSugestoes);
    };

    return (
        <div className="container">
            {role !== 'admin' && (
                <>
                    <h1>Formulário de Sugestão</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            placeholder="Título da Sugestão"
                            required
                        />
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Descrição da Sugestão"
                            rows="5"
                            required
                        />
                        <button type="submit">Adicionar Sugestão</button>
                    </form>
                </>
            )}
            <h2>Sugestões</h2>
            <ul>
                {sugestoes.map((sugestao, index) => (
                    <li key={index}>
                        <strong>{sugestao.titulo}</strong>: {sugestao.descricao}
                        {role !== 'admin' && (
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Suggestion;
