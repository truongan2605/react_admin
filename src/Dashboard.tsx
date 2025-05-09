import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const productData = [
  { name: 'Product A', price: 100, quantity: 2400 },
  { name: 'Product B', price: 150, quantity: 4567 },
  { name: 'Product C', price: 200, quantity: 1398 },
  { name: 'Product D', price: 250, quantity: 9800 },
  { name: 'Product E', price: 300, quantity: 3908 },
];

// Tính doanh thu cho từng sản phẩm
const salesData = productData.map(product => ({
  ...product,
  revenue: product.price * product.quantity, // Doanh thu = price * quantity
}));

// Tính tổng doanh thu
const totalRevenue = salesData.reduce((acc, product) => acc + product.revenue, 0);

// Xác định sản phẩm bán chạy nhất và bán ít nhất
const bestSellingProduct = salesData.reduce((max, product) => (product.revenue > max.revenue ? product : max), salesData[0]);
const leastSellingProduct = salesData.reduce((min, product) => (product.revenue < min.revenue ? product : min), salesData[0]);

// Chuyển salesData thành dạng dữ liệu phù hợp với Recharts
const chartData = salesData.map(product => ({
  name: product.name,
  sales: product.revenue,
}));

const Dashboard = () => (
  <Box m={2}>
    <Typography variant="h4" gutterBottom>
      Trang chủ
    </Typography>

    <Grid container spacing={3}>
      {/* Tổng doanh thu */}
      <Grid size={{ xs: 12, md: 10 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Doanh thu tổng cộng
            </Typography>
            <Typography variant="h4">${totalRevenue}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Sản phẩm bán chạy nhất */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sản phẩm bán chạy nhất
            </Typography>
            <Typography variant="h5">{bestSellingProduct.name}</Typography>
            <Typography variant="body1">Doanh thu: ${bestSellingProduct.revenue}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Sản phẩm bán ít nhất */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sản phẩm bán ít nhất
            </Typography>
            <Typography variant="h5">{leastSellingProduct.name}</Typography>
            <Typography variant="body1">Doanh thu: ${leastSellingProduct.revenue}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Biểu đồ doanh thu */}
      <Grid size={{ xs: 12, md: 10 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Doanh số sản phẩm
            </Typography>
            <Box height={400}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Dashboard;
