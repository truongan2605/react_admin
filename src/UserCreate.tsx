import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const UserCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Full Name" source="name" />
            <TextInput label="Company" source="company" />
            <TextInput label="Email" source="email" />
            <NumberInput label="Age" source="age" />
        </SimpleForm>
    </Create>
);

export default UserCreate;
