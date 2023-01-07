import {
  ADD_GROUP,
  ADD_INPUT_BOX,
  DELETE_INPUT_BOX,
  SHOW_FLASH_CARDS,
} from "../actionTypes";

const inputlocal = localStorage.getItem("card-input");
const grouplocal = localStorage.getItem("groupData");
const initialState = {
  inputData: inputlocal ? JSON.parse(inputlocal) : [],
  groupData: grouplocal ? JSON.parse(grouplocal) : [],
};

export const Reducer = (state = initialState, action) => {
  // console.log('reducer : ', action.payloade);
  switch (action.type) {
    case ADD_INPUT_BOX:
      localStorage.setItem(
        "card-input",
        JSON.stringify([...state.inputData, action.payloade])
      );
      return {
        ...state,
        inputData: [...state.inputData, action.payloade],
      };
    case DELETE_INPUT_BOX:
      let data = state.inputData.filter((ele, ind) => ind !== action.payloade);
      localStorage.setItem("card-input", JSON.stringify(data));
      // console.log('delete reducer ', action.payload);
      return {
        ...state,
        inputData: [...data],
      };

    case ADD_GROUP:
      localStorage.removeItem("card-input");
      state.inputData = [];
      // let inputarr = JSON.parse(localStorage.getItem('card-input'))
      localStorage.setItem(
        "groupData",
        JSON.stringify([...state.groupData, action.payloade])
      );
      return {
        ...state,
        inputData: [...state.inputData],
        groupData: [...state.groupData, action.payloade],
      };

    case SHOW_FLASH_CARDS:
      return {
        ...state,
        showNum: action.payloade,
      };
    default:
      return {
        ...state,
        showNum: 0,
      };
  }
};
