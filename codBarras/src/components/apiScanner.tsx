import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

type Props = {
  onDetected: (code: string) => void;
};

export default function ApiScanner({ onDetected }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    // Só inicia se o vídeo estiver disponível
    if (videoRef.current) {
      codeReader
        .decodeFromVideoDevice(undefined, videoRef.current, (result, err) => {
          if (result) {
            onDetected(result.getText());
            if (controlsRef.current) {
              controlsRef.current.stop();
            }
          }
          // Se quiser lidar com erros de leitura, pode usar o parâmetro 'err'
        })
        .then((controls) => {
          controlsRef.current = controls;
        })
        .catch((err) => {
          console.error("Erro ao iniciar o leitor de código:", err);
        });
    }

    // Cleanup: para o scanner ao desmontar
    return () => {
      if (controlsRef.current) {
        controlsRef.current.stop();
      }
    };
  }, [onDetected]);

  return (
    <div className="mt-4">
      <video ref={videoRef} className="w-full rounded-md border border-gray-300" />
    </div>
  );
}
