import { StackClientApp } from "@stackframe/stack";
import {
  BASE_URL,
  REDIRECT_AFTER_SIGN_IN,
  REDIRECT_AFTER_SIGN_UP,
} from "@/lib/constants";

// Configure the StackClientApp instance for client-side authentication.
// Uses constants for redirect URLs to ensure consistency.
// See: https://docs.stack-auth.com/docs/sdk/objects/stack-app#constructor-1
export const stackClientApp = new StackClientApp({
  tokenStore: "nextjs-cookie",
  urls: {
    afterSignIn: `${REDIRECT_AFTER_SIGN_IN}/account-settings`,
    afterSignUp: `${REDIRECT_AFTER_SIGN_UP}/wiki`,
    afterSignOut: `${BASE_URL}`,
  },
});
