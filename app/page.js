'use client'
import React, { useState } from "react";
import Footer from "./components/ui/Footer";
import Counter from "./components/ui/Counter";

export default function Home() {
  const [counter, setCounter] = useState(1);
  const max = 10; // Set your desired maximum value here

  return (
    <div>
      <main className="container mx-auto">
        <h1 className="text-4xl text-blue-600 text-bold my-4">Next JS</h1>
        <hr />
        <p className="text-base mt-4">Bienvenidos a coderhouse</p>
        <Counter counter={counter} setCounter={setCounter} max={max} />
      </main>
      <Footer />
    </div>
  );
}
