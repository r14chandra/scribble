import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/create" element={<CreateBlog />}></Route>
              <Route path="/blogs/:id" element={<BlogDetails />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
