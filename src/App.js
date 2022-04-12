import {useState} from "react";

import {CarForm, Cars} from "./components";

const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            <CarForm
                setNewCar={setNewCar}
                carForUpdate={carForUpdate}
                setCarForUpdate={setCarForUpdate}
                setUpdatedCar={setUpdatedCar}
            />
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updatedCar={updatedCar}/>
        </div>
    );
};

export default App;
