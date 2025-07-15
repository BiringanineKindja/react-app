import React from "react";  
export default function Hello() {
  const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  return (
    <div>
      <h1>Person Data</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  );
}