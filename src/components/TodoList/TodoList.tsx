import React, { useEffect } from 'react';
import { useTypeSelector } from '../../hooks/hooks';
import { useActions } from '../../hooks/useActions';

const TodoList: React.FC = () => {
    const { error, limit, loading, page, todos } = useTypeSelector(state => state.todo)
    const { fethcTodos, SetTodoPage } = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        fethcTodos(page, limit)
    }, [page])


    if (loading) {
        return <h1>Идет загрузка!</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
                        {todo.id} - {todo.title}
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', marginTop: '20px' }}>
                {pages.map((p, index) => (
                    <div
                        key={index}
                        onClick={() => SetTodoPage(p)}
                        style={{
                            border: p === page ? '2px solid green' : '1px solid gray',
                            padding: '10px',
                            cursor: 'pointer',
                            marginRight: '10px',
                        }}
                    >
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;