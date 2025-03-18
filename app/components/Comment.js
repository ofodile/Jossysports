"use client"

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import "../css/Comment.css"

export default function Comment() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "comments"), (snapshot) => {
      setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    await addDoc(collection(db, "comments"), {
      name,
      text,
      createdAt: new Date(),
    });

    setName("");
    setText("");
  };

  return (
    <div className="comments-container">
      <h2>Leave a Comment</h2>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Post Comment</button>
      </form>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <strong>{comment.name}</strong>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
