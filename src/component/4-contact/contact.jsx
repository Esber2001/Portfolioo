import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
function Contact() {
    const [state, handleSubmit] = useForm("mwpbrjda");

    return (
        <section className="contact-us">
            <h1 className="title">
            <span className="icon-envelope"></span>
            Contact us
            </h1>
            <p className="subtitle">
            contact us for more information and get notified when I publish
            something new.
            </p>

            <div style={{ justifyContent: "space-between" }} className="flex">
            <form onSubmit={handleSubmit}>
                <div className="flex">
                <label htmlFor="email">Email Address :</label>
                <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    id="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                </div>

                <div style={{ marginTop: "24px" }} className="flex">
                <label htmlFor="message">Your message :</label>
                <textarea name="message" id="message" required></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                </div>

                <button
                type="submit"
                disabled={state.submitting}
                className="submit"
                >
                {state.submitting ? "submitting..." : "submit"}
                </button>

                {state.succeeded && (
                <p
                    className="success flex"
                    style={{ fontSize: "18px", marginTop: "1.7rem" }}
                >
                    <Lottie
                    loop={false}
                    style={{ height: 45 }}
                    animationData={doneAnimation}
                    />
                    your message has been sent successfully 👌
                </p>
                )}
            </form>
            <div className="animation">
                <Lottie
                className="contact-animation"
                loop={true}
                style={{ height: 355 }}
                animationData={contactAnimation}
                />
            </div>
            </div>
        </section>
        );
    }

export default Contact;