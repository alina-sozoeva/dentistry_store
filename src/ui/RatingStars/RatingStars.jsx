import { StarFilled } from "@ant-design/icons";
import { Flex } from "antd";
import styles from "./RatingStars.module.scss";
import clsx from "clsx";
import { useState } from "react";

export const RatingStars = ({
  count = 5,
  color = "#f05423",
  value = null,
  onChange = () => {},
  readOnly = false,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(
    value !== null ? value - 1 : null
  );

  const handleClick = (index) => {
    if (readOnly) return;
    setSelectedIndex(index);
    onChange(index + 1);
  };

  return (
    <Flex className={clsx(styles.starGroup, "gap-[10px]")} style={{ color }}>
      {Array.from({ length: count }).map((_, i) => {
        const isActive =
          selectedIndex !== null
            ? i <= selectedIndex
            : hoveredIndex !== null && i <= hoveredIndex;

        return (
          <StarFilled
            key={i}
            className={clsx(styles.star, {
              [styles.active]: isActive,
            })}
            onMouseEnter={() => {
              if (!readOnly && selectedIndex === null) setHoveredIndex(i);
            }}
            onMouseLeave={() => {
              if (!readOnly && selectedIndex === null) setHoveredIndex(null);
            }}
            onClick={() => handleClick(i)}
            style={{
              transitionDelay: `${i * 50}ms`,
              cursor: readOnly ? "default" : "pointer",
            }}
          />
        );
      })}
    </Flex>
  );
};
