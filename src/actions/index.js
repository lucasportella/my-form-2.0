export const changeHandler = (event) => ({ type: 'CHANGE_HANDLER', event });

export const onBlurHandler = (event) => ({ type: 'ON_BLUR_HANDLER', event });

export const validateAddress = (event) => ({ type: 'VALIDATE_ADDRESS', event });

export const handleSubmit = (event) => ({ type: 'HANDLE_SUBMIT', event });

export const validateField = (field, value) => ({ type: 'VALIDATE_FIELD', field, value });

export const resetForm = (event) => ({ type: 'RESET_FORM', event });

export const sendForm = (event) => ({ type: 'SEND_FORM', event });