export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.complete}
        onChange={() => {
          onToggleItem(item.id);
        }}
      ></input>
      <span>{item.priority}</span>
      <span style={item.complete ? { textDecoration: "line-through" } : {}}>
        {item.description}{" "}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
}
