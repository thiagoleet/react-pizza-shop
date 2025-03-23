import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "@/api/auth/get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  async () => {
    return HttpResponse.json({
      id: "custom-user-id",
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1234567890",
      role: "manager",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
);
