import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

type Props = {
    src: string;
};

export default function WaveformViewer({ src }: Props) {
    const waveformRef = useRef<HTMLDivElement>(null);
    const waveSurferRef = useRef<WaveSurfer | null>(null);

    useEffect(() => {
        const ws = WaveSurfer.create({
            container: waveformRef.current!,
            waveColor: "#ccc",
            progressColor: "#2192f3",
            height: 100,
            backend: "MediaElement",
            mediaControls: true,
        });

        ws.load(src);
        waveSurferRef.current = ws;

        const handleResize = () => {
            waveSurferRef.current?.empty();
            waveSurferRef.current?.load(src);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            ws.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, [src]);


    return (
        <div>
            <div ref={waveformRef} style={{ width: '100%' }} />

        </div>
    );

}
