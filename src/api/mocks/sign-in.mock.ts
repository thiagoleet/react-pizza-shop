import { http, HttpResponse } from "msw";

export const signInMock = http.post("/authenticate", async ({ request }) => {
  const { email } = await request.json();

  if (email === "john.doe@example.com") {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Set-Cookie": "auth=sample-jwt",
      },
    });
  }

  return new HttpResponse(null, { status: 401 });
});
