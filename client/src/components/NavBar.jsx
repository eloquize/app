import React from 'react';

export default function NavBar() {
  return (
    <div className="navigation">
      <div className="logo">eloquize</div>
      <div className="summary">summary</div>
      <div className="newQ">new question</div>
      <button className="logout" type="button">log out</button>
    </div>
  );
}