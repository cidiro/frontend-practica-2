import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";

const AddFormIsland: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");

  const submitHandler = (
    e: JSX.TargetedEvent<HTMLFormElement, Event>,
  ) => {
    e.preventDefault();
    e.currentTarget.submit();
  };

  return (
    <div class="addform">
      <h1>New Hero</h1>
      <form
        action="/new"
        method="POST"
        onSubmit={submitHandler}
      >
        <div>
          <label for="name">Name</label>
        </div>
        <div>
          <input
            onInput={(e) => setName(e.currentTarget.value)}
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div>
          <label for="image">Image</label>
        </div>
        <div>
          <input
            onInput={(e) => setImage(e.currentTarget.value)}
            type="text"
            id="image"
            name="image"
          />
        </div>

        <div>
          <label for="sound">Sound</label>
        </div>
        <div>
          <input
            onInput={(e) => setSound(e.currentTarget.value)}
            type="text"
            id="sound"
            name="sound"
          />
        </div>
        <div>
          <button
            type="submit"
            class="btn"
          >
            Submit
          </button>
        </div>
        <div>
          <button
            type="reset"
            class="reset"
            onClick={(e) => {
              setName("");
              setImage("");
              setSound("");
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFormIsland;