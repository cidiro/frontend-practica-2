import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";

const SearchIsland: FunctionComponent = () => {
  const [name, setName] = useState<string>("");

  const submitHandler = (
    e: JSX.TargetedEvent<HTMLFormElement, Event>,
  ) => {
    e.preventDefault();
    e.currentTarget.submit();
  };

  return (
    <form
      class="searchbar"
      action="/search"
      method="POST"
      onSubmit={submitHandler}
    >
      <input
        onInput={(e) => setName(e.currentTarget.value)}
        type="text"
        id="name"
        name="name"
      />
      <button
        type="submit"
        class="btn"
      >
        Search
      </button>
    </form>
  );
};

export default SearchIsland;
