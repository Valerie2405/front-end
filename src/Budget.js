import React from 'react';
import './Budget.css';

function Budget({handleBudget}) {
    return (
        <section className="popup">
            <div className="join">
                <h2>Budget</h2>
                <input 
                    type="text"
                    placeholder="Enter Budget"
                    className="groupCodeInput"
                    // onChange={handleBudget}
                    //onKeyPress={Budget} when key is pressed, 
                    // redirect to budget page
                    />
            </div>
        </section>

    );
}

export default Budget;

