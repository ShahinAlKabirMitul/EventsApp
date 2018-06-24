export const createReducer = (initialStage,fnMap) => {
  return(state=initialStage,{type,payload}) =>{
    const handeler = fnMap[type];
    return handeler ? handeler(state,payload) : state
  }
}