import React from "react";
import styled from "styled-components";
import FormInput from "../../Inputs/FormInput";
import FormTextarea from "../../Inputs/FormTextArea";

const Error = styled.div`
    color: red;
`;

const Step = styled.div`
    padding: 10px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const AddRecipeFormStep = ({
    index,
    name,
    description,
    image,
    recipeSteps,
    errors,
    touched,
    handleChange,
    setFieldValue,
}) => {
    console.log(touched);
    return (
        <Step>
            <p>Шаг № {index + 1}</p>
            <label htmlFor={`step${index + 1}_name`}>Название</label>
            <FormInput
                value={name}
                onChange={handleChange}
                name={`steps[${index}].name`}
            />
            {typeof errors === "object" && errors[index].name ? (
                <Error>{errors[index].name}</Error>
            ) : null}
            <label htmlFor={`step${index + 1}_description`}>Описание</label>
            <FormTextarea
                value={description}
                onChange={handleChange}
                name={`steps[${index}].description`}
                id={`step${index + 1}`}
            />
            {typeof errors === "object" && errors[index].description ? (
                <Error>{errors[index].description}</Error>
            ) : null}
            <button
                onClick={() => {
                    setFieldValue(
                        "steps",
                        [...recipeSteps].filter((step, i) => i !== index)
                    );
                }}
            >
                Удалить текущий шаг
            </button>
        </Step>
    );
};

export default AddRecipeFormStep;
