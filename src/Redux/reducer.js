import {createStore} from "redux"
const initialState = {
    pupils: [
        {
            name: "Jasur",
            direction:"Microsoft",
            phone: "90-933-78-72",
            pay:"697 000",
            group:"Frontend",
            status: true
        },
        {
            name: "Aziz",
            direction:"Microsoft",
            phone: "90-934-72-92",
            pay:"247 000",
            group:"Frontend",
            status: false
        },
        {
            name: "Suhrob",
            direction:"Web dasturlash",
            phone: "90-934-72-92",
            pay:"247 000",
            group:"Frontend",
            status: true
        },
    ],
    group: [
        {
            date: "December 20, 2022",
            direction:"Frontend 010",
            pupils: 6,
            percentage: 70,

        },
        {
            date: "January 27, 2022",
            direction:"Backend 010",
            pupils: 10,
            percentage: 90,

        },
        {
            date: "March 20, 2021",
            direction:"Marketing",
            pupils: 8,
            percentage: 40,
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NEW_PUPIL":
            return{
                ...state,
                pupils: [
                    ...state.pupils,
                    {
                        name: action.payload.name,
                        phone: action.payload.phone,
                        direction: action.payload.direction,
                        pay: action.payload.pay,
                        group: action.payload.group,
                    },
                ],
            };
           
            return state

        case "ADD_NEW_GROUP":
            return{
                ...state,
                group:[
                    ...state.group,
                    {
                        date: action.payload.date,
                        direction: action.payload.direction,
                        number: action.payload.number,
                        percentage: action.payload.percentage,
                    },
                ],
            };
    
            default :
            return state
        }
}

const store = createStore(reducer)
export default store