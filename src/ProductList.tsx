import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const ProductList = () => (
  <List perPage={10} sort={{ field: 'id', order: 'DESC' }}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="product" />
      <TextField source="material" />
      <TextField source="description" />
      <TextField source="createdAt" />
      <EditButton />
    </Datagrid>
  </List>
);
