const initialState={
fetchedData:[{category: "Maths", userId: 1, message: "Statistics"},
{category: "History2", userId: 2, message: "Geography"},
       {category: "Computer Science", userId: 3, message: "Java"}]


}

const reducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case 'FETCH':
            return {
                ...state,
                fetchedData:action.messageDetails
            }
            case 'UPDATE':
               
            return {
                ...state,
                fetchedData:action.userId
            }
            default:
                return state;
    }
}
export default reducer;