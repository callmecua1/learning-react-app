const Footer = () => {

    const buttonPush = () => {
        alert("Thank you for subscribe our newsletter");
    };

  return (
    <footer>
      <div className="newsletter">
        <h1>Newsletter</h1>
        <input id="subscription" type="text" placeholder="Your Email" />
        <button onClick={() => buttonPush()}>Subscribe</button>
      </div>
      <div className="copyright">
        <ul>
          <li>About</li>
          <li>Store Location</li>
          <li>FAQs</li>
          <li>News</li>
          <li>Carrers</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
