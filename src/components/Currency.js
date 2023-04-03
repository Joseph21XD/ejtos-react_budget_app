import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch,currency } = useContext(AppContext);

    const setNewCurrency = (value) => {
        const newbud = {
            currency: value
        };
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newbud,
        });
    };

    return (
        <div className='alert alert-info'>
            <span>Currency {currency} :                                        
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setNewCurrency(event.target.value)}>
                    <option value="$" name="marketing">$ Dollar</option>
                    <option value="£" name="sales">£ Pound</option>
                    <option value="¥" name="finance">¥ Yen</option>
                    <option value="₡" name="hr">₡ Colon</option>
                </select>
            </span>
        </div>
    );
};
export default Currency;