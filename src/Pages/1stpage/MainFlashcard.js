import React from "react";

const MainFlashcard = ({ formik }) => {
  return (
    <div>
      <div className="mt-5 sm:px-14 px-10 py-7 bg-white rounded-md shadow-lg">
        <div className="flex flex-col mb-4">
          <label htmlFor="groupname" className="text-gray-600 pb-3 font-medium">
            Create Group*
          </label>

          <input
            type="text"
            name="groupName"
            id="groupname"
            value={formik.values.groupName}
            onChange={formik.handleChange}
            placeholder="Add Group name"
            className="py-4 px-5 focus:outline-blue-500 outline-blue-100 outline outline-2 focus:outline-7 rounded md:w-96"
          />
          {formik.errors.groupName ? (
            <div className="text-red-600 text-sm">
              {formik.errors.groupName}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label htmlFor="role" className="text-gray-600 pb-3 font-medium">
            Add description
          </label>

          <textarea
            type="textarea"
            name="description"
            id="role"
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder="Add about you"
            className="py-4 focus:outline-blue-500 outline-blue-100 px-5 outline outline-2 rounded h-35"
          ></textarea>
          {formik.errors.description ? (
            <div className="text-red-600 text-sm">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MainFlashcard;
