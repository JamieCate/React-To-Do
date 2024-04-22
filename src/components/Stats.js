export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding tasks to the list!</em>
      </p>
    );
  const numItems = items.length;
  const numComplete = items.filter((item) => item.complete).length;
  const percentage = Math.round((numComplete / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You nothing left to do!"
          : `You have ${numItems} tasks to complete
        ${numComplete} tasks (${percentage})% complete!`}
      </em>
    </footer>
  );
}
