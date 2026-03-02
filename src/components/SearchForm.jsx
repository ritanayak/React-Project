import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [input, setInput] = useState("");

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input); // Pass value to parent component
  }

  return (
    <form onSubmit={handleSubmit} role="search">
      <input
        type="text"
        value={input} // Controlled component
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for any IP or domain"
        aria-label="Search IP address or domain"
      />
      <button type="submit">Search</button>
    </form>
  );
}