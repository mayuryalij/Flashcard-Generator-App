import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInputBox } from "../../redux/action/Action";

const AddMore = ({ formik }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Reducer.inputData);

  const addInputValue = () => {
    dispatch(
      addInputBox({
        term: formik.values.term,
        defination: formik.values.defination,
      })
    );
    formik.values.term = "";
    formik.values.defination = "";
  };

  return (
    <div>
      <div
        id="form_resp"
        className="flex flex-col sm:justify-start sm:flex-row"
      >
        <div className="relative flex flex-col sm mr-4 mb-3 sm:mb-0 sm:mt-4 w-full sm:w-2/6">
          <span id="num1" className="bg-red-500">
            {state.length + 1}
          </span>
          <label htmlFor="term" className="text-gray-600 pb-3 font-medium">
            Enter Term
          </label>
          <input
            type="text"
            id="term"
            name="term"
            value={formik.values.term}
            onChange={formik.handleChange}
            placeholder="write title here..."
            className="focus:outline-gray-500 outline-blue-100 rounded py-4 px-5 outline outline-2"
          />
          {formik.errors.term ? (
            <div className="text-red-600 text-sm">{formik.errors.term}</div>
          ) : null}
        </div>

        <div className=" flex flex-col w-full sm:mt-4 sm:w-2/6">
          <label htmlFor="define" className="text-gray-600 pb-3 font-medium">
            Enter Defination*
          </label>
          <input
            type="text"
            id="define"
            name="defination"
            value={formik.values.defination}
            onChange={formik.handleChange}
            placeholder="Write defination here..."
            className="focus:outline-gray-500 outline-blue-100 py-4 px-5 outline outline-2 rounded"
          />
          {formik.errors.defination ? (
            <span className="text-red-600 text-sm">
              {formik.errors.defination}
            </span>
          ) : null}
        </div>
      </div>

      <span
        className="py-4 inline-block cursor-pointer font-medium mt-8 text-blue-700"
        onClick={addInputValue}
      >
        + Add more
      </span>
    </div>
  );
};

export default AddMore;
