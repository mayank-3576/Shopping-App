const UserContent = () => {
    const {user}=useContext(UserContext);
  return (
    <div>
      <h1>UserDashboard</h1>
      <h2>Welcome {user.name} {user.role} </h2>
      
    </div>
  )
}
export default UserLayout
