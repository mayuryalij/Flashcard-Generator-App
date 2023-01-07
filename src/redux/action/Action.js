import {
  ADD_GROUP,
  ADD_INPUT_BOX,
  DELETE_INPUT_BOX,
  SHOW_FLASH_CARDS,
} from "../actionTypes";

// -------- add input box
export const addInputBox = (data) => {
  return {
    type: ADD_INPUT_BOX,
    payloade: data,
  };
};

// --------- delete input box
export const deleteInputBox = (data) => {
  return {
    type: DELETE_INPUT_BOX,
    payloade: data,
  };
};

// --------- add group
export const addGroup = (data) => {
  // console.log('group ',data)
  return {
    type: ADD_GROUP,
    payloade: data,
  };
};

// --------- show flashcards
export const showFalshCard = (data) => {
  // console.log('flash action: ', data)

  return {
    type: SHOW_FLASH_CARDS,
    payloade: data,
  };
};
