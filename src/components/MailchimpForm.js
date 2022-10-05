import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";
import { Contact } from "./Contact"

export const MailchimpForm = () => {
  const postUrl = `https://dayoneedu.us13.list-manage.com/subscribe/post?u=8474b3d989cc41a656e18eda9&id=901f2a2569`;
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Contact
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
        />
    </>
  )
}
