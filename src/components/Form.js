import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = { description, priority, complete: false, id: Date.now() };
    console.log(newItem, "new");
    onAddItems(newItem);

    setDescription("");
    setPriority(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What needs to be added to the list?</h3>
      <select
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
