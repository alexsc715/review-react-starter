import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  //const [enteredBody, setEnteredBody] = useState("");
  //const [currentValue, setCurrentValue] = useState("");

  //const stateData = useState("");
  //stateData[0]; //current value
  //stateData[1]; //state updating function

  /*function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }*/

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} maxLength={50} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  //this request is related to request object
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
