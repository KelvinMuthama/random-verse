import React from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component {
  state = { bookname: "", chapter: "", verse: "", text: "" };

  componentDidMount() {
    this.fetchrandVerse();
  }

  fetchrandVerse = async () => {
    try {
      const verseObj = await axios.get(
        `https://labs.bible.org/api/?passage=random&type=json`
      );
      const { bookname, chapter, verse, text } = verseObj.data[0];
      this.setState({ bookname, chapter, verse, text });
      console.log(bookname, chapter, verse, text);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { bookname, chapter, verse, text } = this.state;

    return (
      <div className="app">
        <div className="container">
          <div className="card text-center">
            <div className="card-header">
              <h2>
                {bookname} {chapter}:{verse}
              </h2>
            </div>
            <div className="card-body">
              <h5 className="card-title">Today's Bible Verse</h5>
              <p className="card-text">{text}</p>
              <div className="nice-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="goo"
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="10"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="goo"
                      />
                      <feComposite in="SourceGraphic" in2="goo" />
                    </filter>
                  </defs>
                </svg>

                <span className="button--bubble__container">
                  <a
                    href="#campaign"
                    className="button button--bubble"
                    onClick={this.fetchrandVerse}
                  >
                    Generate verse
                  </a>
                  <span className="button--bubble__effect-container">
                    <span className="circle top-left"></span>
                    <span className="circle top-left"></span>
                    <span className="circle top-left"></span>

                    <span className="button effect-button"></span>

                    <span className="circle bottom-right"></span>
                    <span className="circle bottom-right"></span>
                    <span className="circle bottom-right"></span>
                  </span>
                </span>
              </div>
            </div>
            <footer className="blockquote-footer">
              By <cite title="Source Title">Kelvin Kamau</cite> <h2>😊</h2>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
