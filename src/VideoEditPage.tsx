// src/videos/VideoEditPage.tsx
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetOne } from "react-admin";
import WaveformViewer from "./WaveformViewer";

export default function VideoEditPage() {
  const { id } = useParams();
  const numericId = id ? parseInt(id, 10) : 0;
  const { data, isLoading, error } = useGetOne('videos', { id: numericId });

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;
  if (!data) return <Typography>Không tìm thấy video</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{data.title}</Typography>
      <WaveformViewer src={data.src} />
    </Container>
  );
}
