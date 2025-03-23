import CategoryItem from "../category-item/CategoryItem";

const Directory = ({ categories }) => {
  return (
    <div>
      {categories.map(({ id, title, image }) => (
        <CategoryItem id={id} title={title} image={image} />
      ))}
    </div>
  );
};

export default Directory;
