import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget,currency } = useContext(AppContext);

    const setNewBudget = (value) => {
        if(value == ""){
            value=0
        }
        if(value > 20000) {
                alert("The value cannot exceed £20000");
                return;
        }
        const newbud = {
            budget: parseInt(value)
        };
        dispatch({
            type: 'SET_BUDGET',
            payload: newbud,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget:                                 
            <label for="budget" style={{ marginLeft: '1rem'}}>{currency}</label>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        min='0'
                        style={{ size: 10}}
                        onChange={(event) => setNewBudget(event.target.value)}>
                        </input>
            </span>

        </div>
    );
};
export default Budget;