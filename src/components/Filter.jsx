import React from "react";

const Filter = (props) => {
  const filterData = props.filterData;
  const category = props.category;
  const setCategory = props.setCategory;
  return (
    <div className=" w-11/12 max-w-max mx-auto flex flex-wrap gap-y-3 gap-x-4 justify-center py-4">
      {filterData.map((categories) => {
        return (
          <button
            className={`${
              category === categories.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }
            text-lg px-2 py-1 font-medium text-white bg-black hover:bg-opacity-50 border-2 rounded-md transition-all ease-in`}
            key={categories.id}
            onClick={() => setCategory(categories.title)}
          >
            {categories.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
