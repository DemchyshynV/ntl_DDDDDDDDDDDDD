import {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    useEffect(()=>{
        if (deletedCarId){
            setCars(cars=>{
                const index = cars.findIndex(value => value.id === deletedCarId);
                cars.splice(index,1)
                return [...cars]
            })
        }
    },[deletedCarId])

    useEffect(() => {
        if (updatedCar) {
            setCars(cars => {
                const target = cars.find(value => value.id === updatedCar.id);
                Object.assign(target, updatedCar)
                return [...cars]
            })
        }
    }, [updatedCar])
    return (
        <div>
            {cars.map(car => (
                <Car
                    key={car.id}
                    car={car}
                    setCarForUpdate={setCarForUpdate}
                    setDeletedCarId={setDeletedCarId}
                />
            ))}
        </div>
    );
};

export {Cars};
