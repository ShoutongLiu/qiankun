import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About () {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Route path="/home" exact component = { Home} />
      <Route path="/about" component = { About } />
    </Router>
  );
}

export default App;
