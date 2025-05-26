import React,{useState} from 'react';
const SavingsPlanForm=()=>{
    const [planName, setPlanName] = useState('');
    const [goalAmount, setGoalAmount] = useState('');
    const [timeFrame, setTimeFrame] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        ///
    };

    return(
        <div>
            <h1>
                Create New Savings Plan
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Plan Name'
                    value={planName}
                    onChange={(e)=> setPlanName(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='Goal Amount'
                    value={goalAmount}
                    onChange={(e)=> setGoalAmount(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='Time Frame (in years)'
                    value={timeFrame}
                    onChange={(e)=> setTimeFrame(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Risk Level'
                    value={riskLevel}
                    onChange={(e)=> setRiskLevel(e.target.value)}
                />
                <textarea
                    placeholder='Description'
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                />
                <button type="submit">Add Savings Plan</button>
            </form>
        </div>
    )



}

export default SavingsPlanForm;