import { Modal } from "antd";
import { ProductInfo } from "../ProductInfo";

export const ProductModal = ({ open, onCancel, item }) => {
  return (
    <Modal
      centered
      width={1000}
      open={open}
      onCancel={onCancel}
      footer={null}
      title="О продукте"
    >
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <ProductInfo item={item} isModal={true} />
      </div>
    </Modal>
  );
};
