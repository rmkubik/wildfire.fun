import React from 'react';
import emailSignUpStyles from './emailSignUp.module.scss';

export default ({ label }) => (
  <div className={emailSignUpStyles.container}>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/rmkubik"
      method="post"
      target="popupwindow"
      onSubmit={() =>
        window.open('https://buttondown.email/rmkubik', 'popupwindow')
      }
      className={emailSignUpStyles.form}
    >
      <label htmlFor="bd-email" id="bd-email">
        <input
          type="email"
          name="email"
          id="bd-email"
          className={emailSignUpStyles.email}
        />
        <input
          type="submit"
          value="Subscribe"
          className={emailSignUpStyles.submit}
        />
        <input type="hidden" value="1" name="embed" />
        <span>{label}</span>
      </label>
    </form>
  </div>
);
