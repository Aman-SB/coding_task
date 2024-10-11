/**
 * Form Component
 *
 * This component renders a form for user input, including fields for name, email, and password.
 * It validates the inputs and provides feedback for any errors encountered during submission.
 * The password field includes a toggle feature to show/hide the password.
 *
 * Usage:
 * ```jsx
 * <Form />
 * ```
 */

import React from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function Form() {
    // State to store form input data
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    // State to store form validation errors
    const [errors, setErrors] = React.useState({});

    // State to manage password field type (text/password)
    const [type, setType] = React.useState("password");

    // State to manage the visibility icon for the password field
    const [icon, setIcon] = React.useState(eyeOff);

    /**
     * Handles changes in form input fields.
     *
     * @param {Object} e - The event object from the input field.
     */
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /**
     * Validates the form data for required fields and formats.
     *
     * @param {Object} formData - The current state of the form data.
     * @returns {Object} - An object containing any validation errors.
     */
    const validateForm = (formData) => {
        let error = {};

        if (!formData.name.trim()) {
            error.name = "Name is required";
        } else if (formData.name.length < 4) {
            error.name = "Name must be at least 4 characters";
        }

        if (!formData.email.trim()) {
            error.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            error.email = "Email is invalid";
        }

        if (!formData.password) {
            error.password = "Password is required";
        } else if (
            !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                formData.password
            )
        ) {
            error.password =
                "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character";
        }

        return error;
    };

    /**
     * Handles the form submission, validates the input, and logs the data.
     *
     * @param {Object} e - The event object from the form submission.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully", formData);
            setFormData({
                name: "",
                email: "",
                password: "",
            });
        } else {
            console.log("Form submission failed due to validation errors.");
        }
    };

    /**
     * Toggles the visibility of the password field.
     */
    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    return (
        <main className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="border border-gray-300 p-8 shadow-xl bg-white rounded-lg w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Form
                </h2>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={type}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        />
                        <span
                            className="absolute right-0 bottom-2 pr-2 text-gray-600 cursor-pointer"
                            onClick={handleToggle}
                        >
                            <Icon className="" icon={icon} size={25} />
                        </span>
                    </div>

                    {errors.password && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
    );
}
