import { Card, CardContent, Typography, Box, Avatar, CircularProgress, Alert, Divider } from "@mui/material";
import { useGetOne } from "react-admin";

const Profile = () =>{
    const {data, isLoading, error} = useGetOne('users', { id: '1'});

    if (isLoading) return <CircularProgress />
    if (error) return <Alert severity="error">Lỗi khi tải dữ liệu người dùng</Alert>
    if (!data) return <Alert severity="info">Không có dữ liệu người dùng</Alert>

    return (
        <Card sx={{ maxWidth: 600, m: '2rem auto'}}>
            <CardContent>
                <Box display="flex" alignContent="center" mb={2}>
                    <Avatar alt={data.name} src={data.avatar} sx={{width:80, height:80, mr:2}} />
                        <Box>
                            <Typography variant="h6">
                                {data.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.email}
                            </Typography>
                        </Box>
                    
                </Box>

                <Typography variant="subtitle1">Thông tin cá nhân:  </Typography>
                <Typography><strong>Công ty: {data.company}</strong></Typography>
                <Typography><strong>Thành phố: {data.city}</strong></Typography>
                <Typography><strong>Quốc gia: {data.country}</strong></Typography>

            </CardContent>

        </Card>
    );
};

export default Profile; 