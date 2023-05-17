import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const handleDecrease = () => {
        dispatch({
            type: 'DECREASE_BUDGET',
            payload: 50,
        });

        setTimeout(() => {
            const remaining = document.querySelector('.alert.alert-danger');
        
            if (remaining) {
              alert('You cannot reduce the budget lower than spending');
            }
          }, 0);
    };

    const handleIncrease = () => {
        dispatch({
            type: 'INCREASE_BUDGET',
            payload: 10,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <button onClick={handleDecrease}>-10</button>
            <button onClick={handleIncrease}>+10</button>
        </div>
    );
};
export default Budget;