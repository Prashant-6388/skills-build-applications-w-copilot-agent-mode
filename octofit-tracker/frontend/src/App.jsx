import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="py-3 mb-4 border-bottom">
          <div className="d-flex align-items-center">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" height="40" className="me-2" />
            <span className="fs-4 fw-bold">OctoFit Tracker</span>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to OctoFit Tracker</h1>
      <p className="lead">Track your fitness activities and compete with your team!</p>
    </div>
  );
}

export default App;
