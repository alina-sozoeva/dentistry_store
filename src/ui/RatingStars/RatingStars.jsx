import { StarFilled } from "@ant-design/icons";
import { Flex } from "antd";

export const RatingStars = ({ count = 5, color = "#f05423" }) => {
  return (
    <Flex style={{ color }}>
      {Array.from({ length: count }).map((_, i) => (
        <StarFilled key={i} />
      ))}
    </Flex>
  );
};
