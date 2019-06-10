/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
// https://redux-form.com/8.2.2/examples/fieldlevelvalidation/

const requiredVal = (value) =>
  value || typeof value === 'number' ? undefined : 'Required';
const emailVal = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength6 = minLength(6);

export { requiredVal, emailVal, minLength6 };
