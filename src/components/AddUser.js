import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [users, setUsers] = useState([]);


  const generateRandomPassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8);
    setPassword(randomPassword);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    const newUser = { name, email, role, password };
    setUsers([...users, newUser]);
    setShowConfirmation(false);
    // Optionally, you can clear the form fields after confirming
    setName("");
    setEmail("");
    setRole("");
    setPassword("");
  };



  return (
    <div className="container">
      <div className="box">
        {!showConfirmation ? (
          <div>
            <h2>Add User</h2>
            <form>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Choose the Role</option> 
                  <option value="Super User">Super User</option>
                  <option value="Admin">Admin</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Team Lead">Team Lead</option>
                  <option value="Develoer">Developer</option>
                  <option value="QA">QA</option>
                  <option value="Analyst">Analyst</option>
                </select>
              </div>
              <button
                className="GenPass"
                type="button"
                onClick={generateRandomPassword}
              >
                Generate Password
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2>Confirm User Details</h2>
            <form>
              <div>
                <label>Name:</label>
                <input type="text" value={name} readOnly />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" value={email} readOnly />
              </div>
              <div>
                <label>Role:</label>
                <input type="text" value={role} readOnly />
              </div>
              <div>
                <label>Password:</label>
                <input type="text" value={password} readOnly />
              </div>
              <button className="GenPass" type="button" onClick={handleConfirm}>
                Confirm
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
