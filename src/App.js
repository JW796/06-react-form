import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firsrName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  console.log(userInfo);

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form className="w-5/6 max-w-xl mx-auto py-4">
        <fieldset className="flex flex-col gap-2 border py-1 py-3">
          <legend className="text-2xl font-semibold mb-2 text-gray-500">
            About you
          </legend>
          <div className="inline-grid">
            <label className="text-3xl font-semibold" htmlFor="">
              What's your name?
            </label>
            <input
              className="w-4/5 border rounded text-lg leading-light py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              onChange={handleInput}
            />
            <input
              className="w-4/5 border rounded text-lg leading-light py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              type="text"
              id="lastName"
              name="lastname"
              placeholder="Last name"
              onChange={handleInput}
            />
          </div>
          <div className="inline-grid">
            <label className="text-2xl font-semibold">What's your email</label>
            <input
              className="w-4/5 border rounded text-lg leading-light py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              id="email"
              name="email"
              type="email"
              placeholder="email@examplehere.com"
              onChange={handleInput}
            />
          </div>
          <div className="inline-grid">
            <label className="text-2xl font-semibold">
              What is your date of birth
            </label>
            <input
              className="w-4/5 border rounded text-lg leading-light py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              id="dob"
              name="dob"
              type="date"
              max="2006-01-01"
              placeholder="Date of birth"
              onChange="handleInput"
            />
          </div>
          <div flex flex-col>
            <label className="text-2xl font-semibold">
              What's your gender?
            </label>
            <select
              className="w-3/5 border rounded text-lg leading-light py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              name="gender"
              id="gender"
              onChange={handleInput}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="MTF">MTF</option>
              <option value="FTM">FTM</option>
              <option value="Non-binary<">Non-binary</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2 border py-1 py-3">
          <legend className="text-2xl font-semibold mb-2 text-gray-500">
            Promts
          </legend>
          <div>
            <label className="text-2xl font-semibold">
              <select
                className="w-4/5 border rounded text-lg leading-light py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
                name="promt1"
                id="promt1"
                onChange={handleInput}
              >
                <option value="My top intrests are...">
                  My top five intrests are...
                </option>
              </select>
            </label>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
