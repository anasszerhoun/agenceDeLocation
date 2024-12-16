import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import PersonalForm from "./Form/PersonalForm";
import AddressForm from "./Form/AddressForm";
import ConfirmationForm from "./Form/ConfirmationForm";
import Button from "./UI/Button";
import ProgressBar from "./UI/ProgressBar";
import Tabs from "./UI/Tabs";

const STEPS = ["Personal Information", "Additional Details", "Confirmation"];
const STORAGE_KEY = "multistepFormData";
const STEP_KEY = "multistepFormStep";

function Register() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(() => {
        const savedStep = localStorage.getItem(STEP_KEY);
        return savedStep ? parseInt(savedStep, 10) : 0;
    });
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        return savedData
            ? JSON.parse(savedData)
            : {
                name: "",
                lastname: "",
                date_naissance: "",
                address: "",
                phone: "",
                cin: "",
                perme: "",
                email: "",
                password: "",
                confirmPassword: "",
            };
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        localStorage.setItem(STEP_KEY, currentStep.toString());
    }, [currentStep]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = "";
        switch (name) {
            case "name":
                error = value.trim() ? (/^\d+$/.test(value) ? "Name cannot be a number" : "") : "Name is required";
                break;
            case "lastname":
                error = value.trim() ? "" : "Last name is required";
                break;
            case "date_naissance":
                error = value ? "" : "Date of birth is required";
                break;
            case "address":
                error = value.trim() ? "" : "Address is required";
                break;
            case "phone":
                error = /^\d{10}$/.test(value) ? "" : "Phone must be exactly 10 digits";
                break;
            case "cin":
                error = /^\d{8}$/.test(value) ? "" : "CIN must be 8 digits";
                break;
            case "perme":
                error = value.trim() ? "" : "Driving license number is required";
                break;
            case "email":
                error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format";
                break;
            case "password":
                error = value.length >= 8 ? "" : "Password must be at least 8 characters";
                break;
            case "confirmPassword":
                error = value === formData.password ? "" : "Passwords do not match";
                break;
            default:
                break;
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const isStepValid = () => {
        const fields = [
            ["name", "lastname", "date_naissance", "address", "phone"],
            ["cin", "perme", "email", "password", "confirmPassword"]
        ][currentStep];

        return fields.every((field) => formData[field]?.trim() && !errors[field]);
    };

    const handleNext = () => {
        // Get the required fields for the current step
        const currentFields = currentStep === 0
            ? ["name", "lastname", "date_naissance", "address", "phone"]
            : ["cin", "perme", "email", "password", "confirmPassword"];

        // Validate all current step fields
        const newErrors = {};
        currentFields.forEach((field) => {
            if (!formData[field]?.trim()) {
                newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
            }
        });

        // Update errors
        setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));

        // If no errors, proceed to the next step
        if (Object.keys(newErrors).length === 0) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = () => {
        if (isStepValid()) {
            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                toast.success("Form submitted successfully!");

                // Reset form data and localStorage
                setFormData({
                    name: "",
                    lastname: "",
                    date_naissance: "",
                    address: "",
                    phone: "",
                    cin: "",
                    perme: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                setCurrentStep(0);
                localStorage.removeItem(STORAGE_KEY);
                localStorage.removeItem(STEP_KEY);

                setIsSubmitting(false);
            }, 1000);
        } else {
            toast.error("Please fill out all required fields correctly.");
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <PersonalForm
                        formData={formData}
                        handleInputChange={handleInputChange}
                        errors={errors}
                    />
                );
            case 1:
                return (
                    <AddressForm
                        formData={formData}
                        handleInputChange={handleInputChange}
                        errors={errors}
                    />
                );
            case 2:
                return <ConfirmationForm formData={formData} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
                <ProgressBar currentStep={currentStep} totalSteps={STEPS.length} />
                <Tabs
                    steps={STEPS}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    {STEPS[currentStep]}
                </h1>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>
                <div className="flex justify-between mt-8">
                    <Button
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                    >
                        Back
                    </Button>
                    {currentStep === STEPS.length - 1 ? (
                        <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`bg-green-500 text-white hover:bg-green-600 transition-colors ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    ) : (
                        <Button
                            onClick={handleNext}
                            className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                        >
                            Next
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Register;