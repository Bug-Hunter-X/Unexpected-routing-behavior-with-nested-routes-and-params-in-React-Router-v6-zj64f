```javascript
import { BrowserRouter, Routes, Route, useParams, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function User() {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  return (
    <div>User {userId}<br/>{searchParams.get('query')}</div>
  );
}
export default App;
```