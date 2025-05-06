import { useState } from "react";
import type { FormEvent } from "react";
import { SectionCard } from "./SectionCard";

export function NewsletterSection() {
  const [responseMessage, setResponseMessage] = useState("");
  const [responseStatus, setResponseStatus] = useState(0);
  const [email, setEmail] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/subscribe", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
      setResponseStatus(response.status);
      setEmail("");
    }
  }

  const getInputClass = () => {
    let className =
      "rounded-lg border h-[45px] px-4 py-2 focus:outline-none dark:border-breadgray-toast dark:bg-breadgray-darkest ";
    if (responseStatus === 200) {
      className += "focus:border-status-success";
    } else if (responseStatus === 400) {
      className += "focus:border-status-error";
    } else {
      className += "focus:border-white";
    }
    return className;
  };

  const getButtonClass = () => {
    let className = "h-[45px] font-bold px-4 py-2 rounded-lg tracking-wider ";
    if (responseStatus === 200) {
      className += "bg-status-success text-breadgray-charcoal";
    } else if (responseStatus === 400) {
      className += "bg-status-error text-white";
    } else {
      className += "bg-breadpink-500 text-white";
    }
    return className;
  };

  return (
    <SectionCard id="newsletter">
      <div className="flex flex-col md:flex-row md:gap-12 md:items-center">
        <div className="md:w-1/2">
          <h2 className="font-bold text-[28px] md:text-[38px]">
            Join our newsletter, stay up to date.
          </h2>
          <p className="text-breadgray-grey pt-4 md:pt-0">
            Receive updates on the latest features, partnerships and new crypto
            leftist initiatives.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-wrap md:justify-end pt-8 md:pt-0">
            <form
              onSubmit={submit}
              className="w-full md:w-[320px] flex flex-col gap-2"
            >
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={getInputClass()}
              />
              <button type="submit" className={getButtonClass()}>
                {responseStatus === 0 && "Subscribe"}
                {responseStatus === 200 && "Subscribed!"}
                {responseStatus === 400 && "Error, try again"}
              </button>
              {responseMessage && (
                <p className="text-breadgray-grey">{responseMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
