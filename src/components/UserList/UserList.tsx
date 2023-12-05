import React, { FC } from 'react';
import { useTypeSelector } from '../../hooks/hooks';
import { fetchUsers } from '../../store/action-creators/user';
import { useActions } from '../../hooks/useActions';

interface IUser {
    name: string,
    id: number
}

const UserList: FC = () => {
    const { users, error, loading } = useTypeSelector(state => state.user)
    const {fetchUsers } = useActions()

    React.useEffect(() => {
            fetchUsers()
    },[])
    
    if (loading) {
        return <h1>Идет загрузка!</h1>
    }
    
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>
            {
                users.map((el: IUser) => (
                    <div
                    key={el.id} 
                    style={{ marginBottom: '10px', padding: '5px', border: '1px solid #ccc' }}>
                        
                        {el.name}
                    </div>
                ))
            }
        </div>
    );
};

export default UserList;