import * as types from '../constants/infoCatVehTypes';

// import axios from "axios";


export const getAllVehCats = data => async dispatch => {

    try {

        // const config = {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // };

        dispatch({
            type: types.CATSVEH_LOADING,
        });

        // const res = await axios.post("http://localhost:5000/api/v1/users?active=true", data, config);

        const res = [
            {
                brand: 'Audi',
                cars: 1100,
                family: 9,
                years: 90,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
            {
                brand: 'Mercedes',
                cars: 900,
                family: 9,
                years: 100,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
            {
                brand: 'BMW',
                cars: 1200,
                family: 9,
                years: 110,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
            {
                brand: 'volkswagen',
                cars: 1400,
                family: 9,
                years: 170,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
            {
                brand: 'volkswagen',
                cars: 1000,
                family: 9,
                years: 80,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
            {
                brand: 'volkswagen',
                cars: 1000,
                family: 9,
                years: 100,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
            {
                brand: 'volmswagen',
                cars: 1000,
                family: 9,
                years: 100,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
            {
                brand: 'volkswagen',
                cars: 1000,
                family: 9,
                years: 190,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
            {
                brand: 'volkswagen',
                cars: 1000,
                family: 9,
                years: 100,
                km: 700,
                gasoline: 400,
                diesel: 900,
                colors: 19
            },
        ];


        dispatch({
            type: types.GET_ALL_CATSVEH,
            payload: { categories: res },
        })

    } catch (err) {
        let error = "We have an error in our system, please try again later.";

        console.log(err);

        if (err &&
            err.response &&
            err.response.data) {
            error = err.response.data;
        }


        dispatch({
            type: types.CATSVEH_ERROR,
            payload: { type: "categories", message: error.message ? error.message : error }
        })
    }

}


export const setDisplayVehCats = data => async dispatch => {


    dispatch({
        type: types.FILTRING_DISPLAY_CATSVEH,
        payload: data
    });

}

export const setFilterVehCats = data => async dispatch => {

    dispatch({
        type: types.FILTRING_CATSVEH,
        payload: data
    });

}

export const setSearchVehCats = data => async dispatch => {


    dispatch({
        type: types.SEARCH_CATSVEH,
        payload: data
    });

}

export const setSearchVehFams = data => async dispatch => {


    dispatch({
        type: types.SEARCH_FAMSVEH,
        payload: data
    });

}


// Families

export const setCurrentFamilies = data => async dispatch => {

    try {

        dispatch({
            type: types.FAMSVEH_LOADING,
        });

        let res = [];

        if (data.brand === 'Audi') {
            res = [
                {
                    brand: 'Audi',
                    name: 'Q3',
                    cars: 100,
                    years: 90,
                    km: 70,
                    gasoline: 40,
                    diesel: 90,
                    colors: 16
                },
                {
                    brand: 'Audi',
                    name: 'Q5',
                    cars: 200,
                    years: 100,
                    km: 70,
                    gasoline: 40,
                    diesel: 90,
                    colors: 15
                },
                {
                    brand: 'Audi',
                    name: 'A4',
                    cars: 100,
                    years: 10,
                    km: 70,
                    gasoline: 40,
                    diesel: 90,
                    colors: 10
                },
                {
                    brand: 'Audi',
                    name: 'A5',
                    cars: 50,
                    years: 17,
                    km: 700,
                    gasoline: 40,
                    diesel: 10,
                    colors: 19
                },
                {
                    brand: 'Audi',
                    name: 'S3',
                    cars: 250,
                    years: 80,
                    km: 70,
                    gasoline: 40,
                    diesel: 90,
                    colors: 13
                },
                {
                    brand: 'Audi',
                    name: 'A6',
                    cars: 200,
                    years: 10,
                    km: 70,
                    gasoline: 40,
                    diesel: 90,
                    colors: 9
                },
                {
                    brand: 'Audi',
                    name: 'A1',
                    cars: 150,
                    years: 100,
                    km: 70,
                    gasoline: 40,
                    diesel: 90,
                    colors: 2
                },
                {
                    brand: 'Audi',
                    name: 'R8',
                    cars: 25,
                    years: 19,
                    km: 20,
                    gasoline: 10,
                    diesel: 20,
                    colors: 14
                },
                {
                    brand: 'Audi',
                    name: 'S7',
                    cars: 25,
                    years: 10,
                    km: 10,
                    gasoline: 10,
                    diesel: 10,
                    colors: 12
                },
            ];

        }


        dispatch({
            type: types.GET_ALL_FAMSVEH,
            payload: { families: res },
        })

    } catch (err) {
        let error = "We have an error in our system, please try again later.";

        console.log(err);

        if (err &&
            err.response &&
            err.response.data) {
            error = err.response.data;
        }


        dispatch({
            type: types.CATSVEH_ERROR,
            payload: { type: "veh_families", message: error.message ? error.message : error }
        })
    }

}

export const setDisplayVehFams = data => async dispatch => {

    dispatch({
        type: types.FILTRING_DISPLAY_FAMSVEH,
        payload: data
    });

}


export const setFilterVehFams = data => async dispatch => {

    dispatch({
        type: types.FILTRING_FAMSVEH,
        payload: data
    });

}


// Vehicles 

export const setCurrentVehicle = data => async dispatch => {

    try {

        dispatch({
            type: types.ONEVEH_LOADING,
        });

        let res = {};


        dispatch({
            type: types.SET_CURRENT_VEH,
            payload: { vehicle: res },
        })

    } catch (err) {
        let error = "We have an error in our system, please try again later.";

        console.log(err);

        if (err &&
            err.response &&
            err.response.data) {
            error = err.response.data;
        }


        dispatch({
            type: types.CATSVEH_ERROR,
            payload: { type: "veh_current", message: error.message ? error.message : error }
        })
    }

}