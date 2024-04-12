function Logout() {
  // Function to handle logout
  const handleLogout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem("Token");
    // Redirect the user to the login page or any other desired page
    window.location.href = "/login"; // Replace '/login' with the URL of your login page
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
