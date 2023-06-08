// Coding documentation website test project

function NavSearchBar () {
  return (
    <div className="nav-bar-search">
      
    </div>
  );
}

function NavBar () {
  return (
    <div className="nav-bar">
      
      <a className="nav-bar-home" href="" > <img src="src/assets/cool.png" alt="Logo" ></img> </a>

      <NavSearchBar />

    </div>
  );
}

function App () {
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;