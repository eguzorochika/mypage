import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';


function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <header>
        <nav>
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section id="section1">
          <h1>Welcome to My Page</h1>
          <p>This is a simple page.</p>
        </section>

        <section id="section2">
          <h1>Welcome to Section 2</h1>
          <p>This is another section with some content.</p>
        </section>

        <section id="section3">
          <h1>Welcome to Section 3</h1>
          <p>More content goes here.</p>
        </section>
      </main>
    </div>
  );
}

export default App;

