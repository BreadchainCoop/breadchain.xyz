export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const API_KEY = import.meta.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = import.meta.env.MAILCHIMP_AUDIENCE_ID;
  const DATA_CENTER = import.meta.env.MAILCHIMP_DATA_CENTER;

  const data = await request.formData();
  const email = data.get("email");
  const feedUrl = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  if (!email) {
    return new Response(
      JSON.stringify({
        message: "Enter your email address",
      }),
      { status: 400 }
    );
  }

  const options = {
    method: "POST",
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  };

  try {
    const addSubscriber = await fetch(feedUrl, options).then((response) =>
      response.json()
    );
    if (addSubscriber.status === "subscribed") {
      return new Response(
        JSON.stringify({
          message: "Success! You are now subscribed to the newsletter.",
        }),
        { status: 200 }
      );
    } else if (
      addSubscriber.status === 400 &&
      addSubscriber.title == "Member Exists"
    ) {
      return new Response(
        JSON.stringify({
          message: "You are already subscribed to the newsletter.",
        }),
        { status: 200 }
      );
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: error.message,
      }),
      { status: 400 }
    );
  }
};
