import React from "react";

const FormEditor = () => {
  const [isRequired, setIsRequired] = React.useState(false);
  const [isRadio, setIsRadio] = React.useState(false);
  const [isCheckbox, setIsCheckbox] = React.useState(true);
  const [data, setData] = React.useState(["Option 1"]);
  const [isClickInside, setIsClickInside] = React.useState(false);
  const questionValueInputRef = React.useRef(null);

  return (
    <div
      className="bg-white m-auto rounded-md flex flex-col items-start"
      style={{ width: "770px" }}
      onClick={() => setIsClickInside(true)}
    >
      <div className="pt-8 pb-8 px-6 w-full">
        <input
          className="text-lg"
          defaultValue="Question"
          ref={questionValueInputRef}
        ></input>
        <form>
          {data.map((value) => {
            return (
              <div className="flex items-center mt-3 ">
                <div
                  className={
                    (isRadio &&
                      "rounded-full w-4 h-4 border-gray-400 border border-solid") ||
                    (isCheckbox &&
                      "w-4 h-4 border-gray-400 border border-solid")
                  }
                ></div>
                <input
                  className="ml-2 after:content-[''] after:block after:w-full after:h-0.5 after:hover:bg-gray-200 after:focus:bg-purple-600 
			  focus:outline-none after:transition after:ease-in-out after:duration-200  after:focus:w-full flex-1"
                  defaultValue={value}
                ></input>
              </div>
            );
          })}
        </form>
        <div className="flex items-center mt-3 ">
          <div
            className={
              (isRadio &&
                "rounded-full w-4 h-4 border-gray-400 border border-solid") ||
              (isCheckbox && "w-4 h-4 border-gray-400 border border-solid")
            }
          ></div>
          <input
            htmlFor="1"
            className="ml-2  after:content-[''] after:block after:h-0.5 after:hover:bg-gray-200 after:focus:bg-purple-600 
			  focus:outline-none after:transition after:ease-in-out after:duration-200"
            onClick={() => {
              setData([...data, `Option ${data.length + 1}`]);
            }}
            defaultValue="add option"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default FormEditor;
