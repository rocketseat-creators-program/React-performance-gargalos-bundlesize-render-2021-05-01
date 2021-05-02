import React from "react";

export function Menu({
  items,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  selectedItem,
}) {
  return (
    <ul {...getMenuProps()}>
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          index={index}
          getItemProps={getItemProps}
          isSelected={selectedItem?.id === item.id}
          isHighlighted={highlightedIndex === index}
        >
          <SearchResults name={item.name} />
        </ListItem>
      ))}
    </ul>
  );
}

export function ListItem({
  getItemProps,
  item,
  index,
  isSelected,
  isHighlighted,
  ...props
}) {
  return (
    <li
      {...getItemProps({
        index,
        item,
        style: {
          fontWeight: isSelected ? "bold" : "normal",
          backgroundColor: isHighlighted ? "lightgray" : "inherit",
        },
        ...props,
      })}
    />
  );
}


const SearchResults = ({ name }) => {
  return (
    <div className="mt-10 mb-10">
      <div
        className="rounded-lg bg-cover bg-bottom h-56 md:h-auto md:w-56  transform transition-all duration-300 scale-100 hover:scale-95"
        style={{
          backgroundImage: `url(https://source.unsplash.com/featured/?${name}),url(https://picsum.photos/200/300)`,
        }}
      />
      <div>
        <div className="p-4 md:p-5">
          <p className="font-bold text-xl md:text-2xl">{name}</p>
          <p className="text-gray-700 md:text-lg">
            Explore popular tourist destinations as well as hidden local
            favourites. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nobis voluptate animi voluptas sunt maiores nulla veniam eos
            voluptatibus distinctio iste, provident officiis iure quam fuga
            cupiditate fugit quae, quo neque!
          </p>
        </div>
      </div>
    </div>
  );
};


