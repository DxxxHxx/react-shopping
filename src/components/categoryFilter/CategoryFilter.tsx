export default function CategoryFilter({
  categories,
}: {
  categories: string[];
}) {
  return (
    <ul className="h-full p-3 mb-5 border rounded-2xl">
      {categories.map((category, index) => (
        <li
          className="p-3 cursor-pointer hover:bg-[rgba(255,255,255,.7)] rounded-lg"
          key={`${category}_${index}`}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
