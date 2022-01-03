import FormEditor from "./FormEditor";

const Main = () => {
  return (
    <div className="pt-3">
      <div
        className="bg-white m-auto rounded-md flex flex-col items-start mb-4"
        style={{ width: "770px" }}
      >
        <div className="bg-purple-600 w-full h-2 rounded-t-md"></div>
        <div className="pt-8 pb-8 px-6 w-full">
          <div
            className="after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-200 after:focus:bg-purple-600 
			 text-3xl focus:outline-none after:transition after:ease-in-out after:duration-200"
            contentEditable
          >
            Untitled form
          </div>
          <div
            className="mt-2 after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-200 after:focus:bg-purple-600 
			  focus:outline-none after:transition after:ease-in-out after:duration-200"
            contentEditable
          >
            Form description
          </div>
        </div>
      </div>
      <FormEditor></FormEditor>
    </div>
  );
};

export default Main;
