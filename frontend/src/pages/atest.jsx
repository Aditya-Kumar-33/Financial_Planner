import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ATEST = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const signedUser = JSON.parse(localStorage.getItem("user"));
    if (signedUser) setUser(signedUser);
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   setUser(null);
  // };

  const [savings, setSavings] = useState([]);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;


    axios.get("http://localhost:5000/savings", {
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(response => setSavings(response.data))
    .catch(error => console.error("Error fetching savings:", error));
  }, []);
  console.log(savings);

  return (
    <div>
      {savings.length > 0 ? (
        savings.map((saving, index) => (
          <div key={index}>
            <p>Type: {saving.type}</p>
            <p>Amount: ₹{saving.amount}</p>
            <p>Category: {saving.category}</p>
            <p>Payment Method: {saving.paymentMethod}</p>
            <p>Date: {new Date(saving.dateTime).toLocaleDateString()}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No savings found.</p>
      )}
    </div>
  );
  
};

export default ATEST;