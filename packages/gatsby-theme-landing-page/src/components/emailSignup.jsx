import React from 'react';

export default () => (
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/rmkubik"
    method="post"
    target="popupwindow"
    onSubmit={() =>
      window.open('https://buttondown.email/rmkubik', 'popupwindow')
    }
    className="embeddable-buttondown-form"
  >
    <label htmlFor="bd-email" id="bd-email">
      Enter your email
      <input type="email" name="email" id="bd-email" />
    </label>
    <input type="hidden" value="1" name="embed" />
    <input type="submit" value="Subscribe" />
  </form>
);
