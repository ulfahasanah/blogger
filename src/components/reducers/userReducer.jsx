const initState = {
    users: [
        {
        "id": "1", 
        "firstName": "ulfa", 
        "lastName": "hasanah", 
        "email": "fa@mail.com",
        "password": "123"
        },
        {
        "id": "2", 
        "firstName": "mario", 
        "lastName": "plan", 
        "email": "mario@mail.com",
        "password": "123"
        }
    ]
}

export default function userReducer(state = initState, action) {
    return state
}