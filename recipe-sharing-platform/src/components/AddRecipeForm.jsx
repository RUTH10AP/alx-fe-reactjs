import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        steps: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.ingredients.trim() || formData.ingredients.split('\n').length < 2)
            newErrors.ingredients = "At least two ingredients are required";
        if (!formData.steps.trim()) newErrors.steps = "Preparation steps are required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Recipe submitted:", formData);
            // Reset form after successful submission
            setFormData({ title: '', ingredients: '', steps: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Ingredients (one per line)</label>
                <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Preparation Steps</label>
                <textarea
                    name="steps"
                    value={formData.steps}
                    onChange={handleChange}
                    rows="6"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;
