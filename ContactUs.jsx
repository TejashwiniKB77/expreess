import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const ContactUs = () => {
  const { user } = useContext(UserContext);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    const data = {
      name: user.name,
      email: user.email,
      feedbackText: feedback,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem("feedback", JSON.stringify(data));
    setSuccess(true);
    setFeedback("");
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>Contact Us</h2>

        <input className="input input-readonly" value={user.name} readOnly />
        <input className="input input-readonly" value={user.email} readOnly />

        <textarea
          className="input"
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>

        {success && (
          <p className="success">Feedback submitted successfully!</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
