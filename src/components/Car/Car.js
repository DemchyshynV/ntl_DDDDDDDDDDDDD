import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setDeletedCarId}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        try {
            await carService.deleteById(id)
            setDeletedCarId(id)
        } catch (e) {
            console.log(e.response.data);
        }
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <br/>
            <button onClick={() => deleteCar()}>delete</button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
        </div>
    );
};

export {Car};
