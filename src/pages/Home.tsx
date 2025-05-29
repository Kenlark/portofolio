import Card from "../components/CardProject";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of our application.</p>
      </div>
      <Card title="Project" description="description" />
    </div>
  );
}

export default Home;
