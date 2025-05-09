import { List, Datagrid, TextField, ImageField, EditButton  } from 'react-admin';

export const UserList = () => (
  <List perPage={10} sort={{ field: 'id', order: 'DESC' }}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="company" />
      <TextField source="city" />
      <TextField source="country" />
      <TextField source="zipCode" />
      <ImageField source="avatar" title="name" />
      <TextField source="createdAt" />
      <EditButton />
    </Datagrid>
  </List>
);


