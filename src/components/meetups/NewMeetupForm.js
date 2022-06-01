import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

import { useRef } from "react";

function NewMeetupForm() {
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault(); // To prevent automatic handler...

    const enteredTitle = titleInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredUrl,
      address: enteredAddress,
      description: enteredDesc,
    };
    console.log(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor> Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor> Meetup Image</label>
          <input type="url" required id="image" ref={urlInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor> Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor> Meetup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
