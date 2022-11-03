import {useState, useEffect} from 'react';
import {Author} from './interfaces/Author';
import axios from 'axios'

function App() {
  useEffect(() => {
    const getAuthors = async () => {
    const data = await axios.get<Author[]>('/api/authors/');
     setAuthors(data.data);
    }
    getAuthors();
  }, []);
  const [authors, setAuthors] = useState<Author[]>([]);
  return (
    <div className="App">
      <h1>My Authors</h1>
     {authors && authors.map(author => <div key={author.id}>{author.name}</div>)}
    </div>
  );
}

export default App;
