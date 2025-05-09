import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  email,
  number,
} from 'react-admin';

const validateRequired = required('Trường này là bắt buộc');
const validateEmail = [required('Email là bắt buộc'), email('Email không hợp lệ')];
const validateNumber = [number('Phải là số'), required('Trường này là bắt buộc')];
const validateURL = (value: string) => {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  return value && !urlPattern.test(value) ? 'URL không hợp lệ' : undefined;
}

const UserCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Full Name" source="name" validate={validateRequired} />
      <TextInput label="Company" source="company" validate={validateRequired} />
      <TextInput label="Email" source="email" validate={validateEmail} />
      <TextInput label="City" source="city" validate={validateRequired} />
      <TextInput label="Country" source="country" validate={validateRequired} />
      <TextInput label="Zip Code" source="zipCode" validate={validateNumber}/> 
      <TextInput label="Avatar URL" source="avatar" validate={validateURL}/> 
    </SimpleForm>
  </Create>
);

export default UserCreate;
