import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

export const CarSearch = () => {
    const searchTerm = useSelector(state => state.cars.searchTerm);
    const dispatch = useDispatch();
    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }

    return <div className="list-header">
        <h3 className="title is-3">My Cars</h3>
        <div className="search field is-horizontal">
            <label className="label">Search</label>
            <input 
                className="input"
                value={searchTerm}
                onChange={handleSearchTermChange} />
        </div>
    </div>
}
