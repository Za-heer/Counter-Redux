
const AddAction = () => {
  return (dispatch)=>{
    dispatch({
        type: "ADD_COUNTER",
    });
  };
    
};

const MinusAction = () => {
    return (dispatch) => {
        dispatch({
            type: "MINUS_COUNTER",
        });
    };
};

export {AddAction, MinusAction};