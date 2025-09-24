import { Modal } from "antd";
import { useEffect, useRef } from "react";
import styles from "./VideoModal.module.scss";
import clsx from "clsx";

export const VideoModal = ({ open, onCancel, sourse, isYuoTube = false }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (open) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          console.log("Автоплей со звуком может быть заблокирован браузером");
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [open]);

  return (
    <div className={clsx(styles.wrap)}>
      <Modal
        centered
        className={clsx(styles.modal)}
        open={open}
        onCancel={onCancel}
        width={900}
        footer={false}
        destroyOnClose
      >
        {isYuoTube ? (
          <iframe
            width="100%"
            height="500"
            src={sourse}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <video ref={videoRef} loop autoPlay controls playsInline>
            <source src={sourse} type="video/mp4" />
          </video>
        )}
      </Modal>
    </div>
  );
};
