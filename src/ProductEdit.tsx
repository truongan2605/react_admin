import { Edit, SimpleForm, TextInput } from 'react-admin';

const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="product" />
      <TextInput source="material" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export default ProductEdit;
