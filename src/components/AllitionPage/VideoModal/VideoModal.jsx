import { Modal } from "antd";
import { useEffect, useRef } from "react";
import styles from "./VideoModal.module.scss";
import clsx from "clsx";

export const VideoModal = ({ open, onCancel, sourse }) => {
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
      >
        <video ref={videoRef} loop autoPlay controls playsInline>
          <source src={sourse} type="video/mp4" />
        </video>
      </Modal>
    </div>
  );
};
