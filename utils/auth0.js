import { initAuth0 } from "@auth0/nextjs-auth0";

// export default initAuth0({
//   domain: "lanparty.us.auth0.com",
//   clientId: "09LGKfPpr2cTv1MELzMYcdVuKYre6gAM",
//   clientSecret:
//     "BcJm64kqB_wNfqFFY5evEeu5EHOR0e5kozDN1o1F4dEJHy7j1IjPBEn2rmsgAjbW",
//   secret: "BcJm64kqB_wNfqFFY5evEeu5EHOR0e5kozDN1o1F4dEJHy7j1IjPBEn2rmsgAjbW",
//   scope: "openid profile",
//   redirectUri: "http://localhost:3000/api/callback",
//   postLogoutRedirectUri: "http://localhost:3000/",
//   session: {
//     cookieSecret: `LLIeDUaEHHbdttjcdflfkoGGJID4jY6e>?{823h9ru2423rf903eiohr2039}`,
//   },
// });

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
  },
});
