
const StartSteps = ({ number, text }) => (
    <div className={`flex items-start flex-row`}>
      <div
        className={`flex items-center justify-center w-[70px] h-[70px] rounded-[24px] bg-gray-300`}
      >
        <p className="font-bold text-[20px] text-cyan-800">
          {number}
        </p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-gray-800 leading-[32.4px]">
        {text}
      </p>
    </div>
  );
  
  export default StartSteps;