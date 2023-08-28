import { useDispatch, useSelector } from "react-redux"
import { addCar, changeCost, changeName } from "../store"

export const CarForm = () => {
    const dispatch = useDispatch()
    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value))
    }
    const { name, cost } = useSelector(state => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        }
    })

    const handleCostChange = (e) => {
        const carCost = parseInt(e.target.value) || 0;
        dispatch(changeCost(carCost))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCar({
            id: Date.now(),
            name,
            cost,
        }));
        
    }

    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add car</h4>
        <form 
            onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        className="input is-expanded"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input 
                        className="input is-expanded"
                        value={cost || ''}
                        onChange={handleCostChange}
                        type="number"
                    />
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    </div>
}
