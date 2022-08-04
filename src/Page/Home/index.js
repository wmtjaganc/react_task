import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardInfo from "../../Component/CardInfo";

const Home = () => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState([]);
  const [resp, setResp] = useState();

  const handleChange = (event) => {
    const regex = new RegExp(
      `^https://?([\\da-z.-]+)\.ebay\.co\.uk/[/\\w .-]*/?`
    );
    if (regex.test(event.target.value)) {
      setError(false);
      setValue(event.target.value);
    } else {
      setError(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) {
      event.preventDefault();
    } else {
      const form = document.getElementById("form");
      axios
        .post("http://localhost:8080/", { url: value })
        .then((response) => setResp(response.data.data),
        form.reset())
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };
  return (
    <>
      <section className="full_hd">
        <div className="container_home">
          <div className="text_wrap">
            <h1 className="text_h1">
              Authenticate luxury watches on <strong>eBay</strong> before
              buying
            </h1>
            <span className="text_style_info">
              The most comprehensive and independent pre-purchase watch
              authentication service
            </span>
          </div>
          <div className="card">
            <div className="card_header">
              <div className="name_info">I am buying from:</div>
              <Link to="#" className="link_ebay">
                eBay.co.uk
              </Link>
            </div>
            <div className="w-100">
              <form onSubmit={(e) => handleSubmit(e)} id="form">
                <input
                  type="text"
                  name="URL"
                  placeholder="Enter listings URL to get a quote..."
                  className="input_style"
                  required
                  onChange={(e) => handleChange(e)}
                ></input>
                {error ? (
                  <div className="error_style">
                    Enter Valid URL.(It should be from https://www.ebay.co.uk/)
                  </div>
                ) : null}
                <div className="text-center">
                  <button className="btn_submit">Get a quote</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {resp ? <CardInfo resp={resp} /> : null}
    </>
  );
};

export default Home;
