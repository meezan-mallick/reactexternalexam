const intialState = [
    {
        firstName:"meezan",
        lastName:"Mallick",
        email :"meezan@gmail.com",
        gender:"male",
        maritialStatustext:"unmarried",
        familyMembers:[
            {
                "firstName": "jonh",
                "lastName": "deo"
            },
            {
                "firstName": "net",
                "lastName": "parker"
            }
        ]
    }
]

const userReducer = (state = intialState,action) =>{
    switch(action.type){
        case "ADD_USER":
            state = [...state, action.payload];
            return state;
        default:
            return state;
    }
}

export default userReducer