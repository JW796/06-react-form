function App() {
  const handleInput = () => {};
  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form className="w-5/6 max-w-md mx-auto">
        <fieldset className="flex flex-col border py-1 py-3">
          <legend className="text-3xl font-semibold">About you</legend>
          <label className="text-3xl font-semibold" htmlFor="">
            What's your name?
          </label>
          <input
            className="border rounded text-lg leading-light py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={handleInput}
          />
          <input
            className="border rounded text-lg leading-light py-3 px-2 mt-4 focus:outline-indigo-200"
            type="text"
            id="lastName"
            name="lastname"
            placeholder="Last name"
            onChange={handleInput}
          />
          <label>What's your email</label>
          <input
          id="email"
          name="email"
          type="email"
          placeholder="email@examplehere.com"
          onChange={handleInput}
          />
        </fieldset>
      </form>
    </>
  );
}

export default App;
