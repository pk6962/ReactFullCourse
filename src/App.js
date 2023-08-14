
function App() {
  return (
    <div className="cardsMainContainer">
      <HtmlComponent name="App" />
      <HtmlComponent name="App.js" />
      <HtmlComponent name="index.js" />
      <HtmlComponent name="App" />
      <HtmlComponent name="App.js" />
      <HtmlComponent name="index.js" />
    </div>
  );
} 

const HtmlComponent = (props) => {
  return (
  <div className="container">
      <h1> Hello this is React {props.name} </h1>
      <p> here comes the paragraph of the react para </p>
  </div>
  )
}

export default App;
