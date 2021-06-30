import React, { FC, useState, useEffect } from "react";
import { Flex, Text } from "theme-ui";

interface ItemProps {
  id: string | number;
  label: string;
  value: string;
}

interface SelectionProps {
  items: ItemProps[];
  onClick?: (value: string) => void;
  selectedItem?: ItemProps;
}

const Selection: FC<SelectionProps> = ({ items, onClick, selectedItem }) => {
  const [selected, setSelected] = useState<ItemProps>(selectedItem ?? items[0]);
  useEffect(() => {
    if (onClick) onClick(selected.value);
  }, [selected]);
  return (
    <Flex
      bg="white"
      mx={15}
      mb={10}
      p="5px"
      sx={{
        height: 47,
        borderRadius: 25,
        boxShadow: "rgb(0 0 0 / 5%) 1px 8px 8px 1px",
      }}
    >
      {items.map((item) => (
        <Flex
          key={item.id}
          onClick={() => {
            setSelected(item);
          }}
          bg={selected === item ? "chelseaCucumber18" : "white"}
          sx={{
            borderRadius: 25,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Text
            sx={{
              fontWeight: selected === item ? "700" : "body",
              fontSize: 15,
              lineHeight: 20,
            }}
            color={selected === item ? "chelseaCucumber" : "mistGray"}
          >
            {item.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Selection;
