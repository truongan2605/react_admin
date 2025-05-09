import {
    Show,
    TabbedShowLayout,
    Tab,
    TextField as RaTextField,
    useGetMany,
    EmailField,
    DateField,
    ImageField,
} from 'react-admin';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    CircularProgress,
    Alert,
    Box,
    Avatar,
} from '@mui/material';

const ProductListForUser = () => {
    const { data, isLoading, error } = useGetMany('products', { ids: ['2', '4'] });

    if (isLoading) return <CircularProgress />;
    if (error) return <Alert severity="error">Lỗi khi tải sản phẩm</Alert>;
    if (!data || data.length === 0) return <Alert severity="info">Không có sản phẩm nào</Alert>;

    return (
        <Grid container spacing={2}>
            {data.map((product) => (
                <Grid  size={{ xs: 12, md: 6 }} key={product.id}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Sản phẩm #{product.id}: {product.name}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Loại:</strong> {product.product}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Chất liệu:</strong> {product.material}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Mô tả:</strong> {product.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                
            ))}
        </Grid>
    );
};

const UserShow = () => (
    <Show>
        <TabbedShowLayout>
            <Tab label="Thông tin người dùng">
                <RaTextField source="id" />
                <RaTextField source="name" />
                <RaTextField source="company" />
                <EmailField source="email" />
                <RaTextField source="city" />
                <RaTextField source="country" />
                <RaTextField source="zipCode" />
                <DateField source="createdAt" label="Ngày tạo" />
                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Avatar:</Typography>
                    <ImageField source="avatar" title="Avatar"  />
                </Box>
            </Tab>
            <Tab label="Sản phẩm cố định">
                <ProductListForUser />
            </Tab>
            <Tab label="Thông tin thêm">
                <Box sx={{ m:2 }}>
                    <Typography variant="body1">Đây là tab sử dụng MUI</Typography>
                </Box>
            </Tab>

        </TabbedShowLayout>
    </Show>
);

export default UserShow;
