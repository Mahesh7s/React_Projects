import { useEffect, useState } from 'react';

function Displayuser() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [search, setSearch] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let dataa = await res.json();
      setData(dataa);
      setOriginalData(dataa); 
      setErr(null);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setSearch(value);


    const filtered = originalData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.address.city.toLowerCase().includes(value.toLowerCase())
    );
    setData(filtered);
  }

  return (
    <>
      <h1>User Profiles</h1>

      <input
        type="search"
        placeholder="Search by name or city..."
        value={search}
        onChange={handleChange}
      />

      <button onClick={fetchData}>Fetch Data</button>

      {loading && <h2 style={{ color: 'blue' }}>Loading...</h2>}
      {err && <h2 style={{ color: 'red' }}>{err}</h2>}

      <Usercard data={data} />
    </>
  );
}

export default Displayuser;

function Usercard({ data }) {
  return (
    <div>
      {data.map(item => (
        <div key={item.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
          <h3>
            {item.id}. {item.name}
          </h3>
          <p>City: {item.address.city}</p>
        </div>
      ))}
    </div>
  );
}
