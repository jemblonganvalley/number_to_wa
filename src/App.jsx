import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userName, setUsername] = useState(" ");
  const [defaultMessage, setDefaultMessage] = useState();

  useEffect(() => {
    setDefaultMessage(`*Hello... ${userName}*
Kami dari Jvalley Assyifa kursus komputer Gratis.

Bisa saya konfirmasi data kembali via telpon ?
termikasih ${userName}
`);
  }, [userName]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const no = e.target.phone.value;
    const msg = e.target.message.value;
    const name = e.target.name.value;

    const convertNo = no.replace("0", "62");
    const convertMessage = encodeURIComponent(msg);
    console.log(`
      no : ${convertNo}
      message : ${msg}
    `);
    window.open(`https://wa.me/${convertNo}?text=${convertMessage}`);
  };

  return (
    <div className="App-header">
      <h3 style={{ color: "whitesmoke" }}>JVALLEY Number To WA</h3>
      <form className="form_wa" onSubmit={handleSubmit}>
        <label htmlFor="phone">Masukan Nomer</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          required
          placeholder="masukan nomer wa"
        />

        <label htmlFor="name">Masukan Nama</label>

        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label htmlFor="message">Pesan yang akan terkirim</label>

        <textarea
          name="message"
          id="message"
          required
          placeholder="masukan pesan"
          value={defaultMessage}
          // onChange={(e) => {
          //   setDefaultMessage(`${e.target.value}`);
          // }}
          disabled
        ></textarea>
        <button type="submit">Kirim Pesan</button>
      </form>
    </div>
  );
}

export default App;
