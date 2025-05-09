import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    Toolbar,
    SaveButton,
    useRedirect,
    DeleteWithConfirmButton,
} from 'react-admin';

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

const UserEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput label="Full Name" source="name" />
            <TextInput label="Company" source="company" />
            <TextInput label="Email" source="email" />
            <NumberInput label="Age" source="age" />
        </SimpleForm>
        
    </Edit>
    
);

export default UserEdit;
