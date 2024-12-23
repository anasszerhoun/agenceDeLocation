const Tabs = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <div className="flex justify-center mb-6">
      {steps.map((step, index) => (
        <button
          key={index}
          onClick={() => setCurrentStep(index)}
          className={`px-4 py-2 mx-1 rounded-md ${
            currentStep === index
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          } transition-colors duration-300`}
        >
          {step}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
