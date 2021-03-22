import { auth } from "../lib/firebase";

const Dashboard = ({ user }) => {
  const handleSignOut = () => {
    auth.signOut().catch((error) => {
      console.log(error);
    });
  };
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={() => handleSignOut()}>Sign Out</button>
    </section>
  );
};

export default Dashboard;
