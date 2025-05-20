// src/videos/VideoDetailPage.tsx
import { useParams } from 'react-router-dom';
import { useGetOne } from 'react-admin';
import { Typography, Box } from '@mui/material';
// import WaveformViewer from './WaveformViewer';

export default function VideoDetailPage() {
  const { id } = useParams();
  const numericId = id ? parseInt(id, 10) : 0;
  const { data, isLoading, error } = useGetOne('videos', { id: numericId });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Không tìm thấy video</p>;

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        {data.title}
      </Typography>

      <video
        controls
        width="80%"
        src={data.src}
        // poster={data.thumbnail} 
        style={{ marginBottom: 20 }}
      >
        Trình duyệt của bạn không hỗ trợ video.
      </video>

      {/* <Typography variant="h6">Waveform</Typography>
      <WaveformViewer src={data.src} /> */}
    </Box>
  );
}
