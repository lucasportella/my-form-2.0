const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  submitted: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_HANDLER':
      return state;
    case 'ON_BLUR_HANDLER':
      return state;
    case 'VALIDATE_ADDRESS':
      return state;
    case 'HANDLE_SUBMIT':
      return state;
    case 'VALIDATE_FIELD':
      return state;
    case 'RESET_FORM':
      return state;
    case 'SEND_FORM':
      return state;
    default:
      return state;
  }
}

export default reducer;