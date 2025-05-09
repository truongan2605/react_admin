import { DeleteWithConfirmButton, Edit, required, SaveButton, SelectInput, SimpleForm, TextInput, Toolbar, useRedirect } from 'react-admin';

const materialChoices = [
  { id: 'Steel', name: 'Steel' },
  { id: 'Bronze', name: 'Bronze' },
  { id: 'Plastic', name: 'Plastic' },
];
const validateRequired = required('Trường này là bắt buộc');

const CustomToolbar = (proops: any) => {
    const redirect = useRedirect();

    return (
        <Toolbar {...proops}>
            <SaveButton />
            <DeleteWithConfirmButton
                mutationOptions={{
                    onSuccess: () => {
                        alert('Xoá thành công');
                        redirect('/users');
                    },
                    onError: () => {
                        alert('Lỗi khi xoá');

                    }
                }}
                confirmTitle="Bạn có chắc chắn muốn xoá không?"
                confirmContent="Dữ liệu sẽ không thể khôi phục lại"
            />
        </Toolbar>
    );
};

const ProductEdit = () => (
  <Edit>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source="name" validate={validateRequired}/>
      <TextInput source="product" validate={validateRequired}/>
      {/* <TextInput source="material" /> */}
      <SelectInput
                    source="material"
                    label="Chất liệu"
                    choices={materialChoices}
                    validate={required()}
                    fullWidth
                  />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export default ProductEdit;
