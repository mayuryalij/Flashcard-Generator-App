import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { deleteInputBox } from "../../redux/action/Action";

import { useDispatch, useSelector } from "react-redux";

const TermForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Reducer.inputData);

  const onchangeHanlder = () => {
    console.log("onchange");
  };

  return (
    <div>
      <React.Fragment>
        {state.length > 0 &&
          state.map((elem, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col sm:justify-start sm:flex-row"
            >
              <div className="relative flex flex-col mb-3 sm:mb-0 w-full sm:w-2/6 mr-4">
                <span id="num" className="bg-red-600">
                  {index + 1}
                </span>
                <label
                  htmlFor="term"
                  className="text-gray-600 pb-3 font-medium"
                >
                  Enter Term*
                </label>
                <input
                  type="text"
                  id="term"
                  name="term"
                  value={elem.term}
                  onChange={onchangeHanlder}
                  placeholder="Write title here..."
                  className="py-4 px-5 outline outline-2 rounded outline-gray-400 border-r-8"
                />
              </div>

              <div className=" flex flex-col w-full sm:w-2/6 mr-4">
                <label
                  htmlFor="define"
                  className="text-gray-600 pb-3 font-medium"
                >
                  Enter Defination
                </label>
                <textarea
                  id="define"
                  name="defination"
                  value={elem.defination}
                  onChange={onchangeHanlder}
                  placeholder="Write defination here..."
                  className="py-4 px-5 outline outline-2 rounded outline-gray-400 border-r-8"
                ></textarea>
              </div>

              <div className=" flex justify-end items-end sm:mt-0 mt-2">
                <button className="px-5 py-2 text-2xl text-blue-700 rounded-md mr-2">
                  <AiOutlineEdit />
                </button>
                <button
                  className="px-5 py-2 rounded text-2xl text-red-700"
                  onClick={() => dispatch(deleteInputBox(index))}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
      </React.Fragment>
    </div>
  );
};

export default TermForm;
