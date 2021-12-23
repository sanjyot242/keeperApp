import React, { useState } from "react";

function AddNote(props) {
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;

    setItem((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(item);
    setItem({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handelChange}
          placeholder="Title"
          value={item.title}
        />
        <textarea
          name="content"
          placeholder="Enter text"
          onChange={handelChange}
          rows="3"
          value={item.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
