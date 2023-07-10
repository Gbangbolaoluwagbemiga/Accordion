import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "In the library",
  },
  {
    title: "How long do I have to return your chair?",
    text: "A day",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Yes",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <>
      <div className="accordion">
        {faqs.map((el, num) => (
          <AccordionQuestion
            question={el.title}
            answer={el.text}
            num={num}
            key={num}
          />
        ))}
      </div>

      <AddItems />
    </>
  );
}
function AccordionQuestion({ question, answer, num }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>

      {!isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}
function AddItems() {
  const styles = {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "1.5rem auto",
    padding: "1.25rem 2.5rem",
    borderRadius: "1rem",
    cursor: "pointer",
    fontSize: "1rem",
    color: "red",
    background: "#ced4da",
  };

  return <button style={styles}>ADD</button>;
}
