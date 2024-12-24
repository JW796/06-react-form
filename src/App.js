function App() {
  const handleInput = () => {};
  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form action="">
        <fieldset>
          <legend>About you</legend>
          <label htmlFor="">What's your name?</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={handleInput}
          />
        </fieldset>
      </form>
    </>
  );
}

export default App;
