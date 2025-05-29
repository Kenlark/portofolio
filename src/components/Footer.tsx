import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </div>
  );
}

export default Footer;
