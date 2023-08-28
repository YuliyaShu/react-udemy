import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export const CarList = () => {
    const dispatch = useDispatch();

    const { cars, name } = useSelector(({form, cars: {data, searchTerm}}) => {
        const filteredCars =  data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

        return {
            cars: filteredCars,
            name: form.name,
        }
    });
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }
    const renderedCars = cars.map(car => {
        const isBold = name && car.name.toLowerCase().includes(name.toLowerCase());
        
        return <div key={car.id} className={`panel ${isBold && 'bold'}`}>
            <p>{car.name} - ${car.cost}</p>
            <button 
                className="button is-danger"
                onClick={() => handleCarDelete(car)}
            >
                Delete
            </button>
        </div>
    });
    return <div>
        {renderedCars}
        <hr />
    </div>
}
