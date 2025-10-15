interface IInput {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}
const FormInput = () => {};

export default FormInput;
