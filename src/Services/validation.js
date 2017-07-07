// local client validation logic. Add to this to control client side validators.

// form field is required
export const required = value => value ? undefined : 'Enter your details';

// form field must be a number
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

//form field must be a valid email format
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;


//must meet minimal length requiremnts
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

//must meet maximum length requirements
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;


//checks password is the same as passwordConfirm
export function validate(formProps) {
  const errors = {};
  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm =  'Passwords need to  match';
  }   
  return errors;
}




