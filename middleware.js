// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/upload", request.url));
// }

import { auth } from "./app/utils/auth";
export const middleware = auth;

export const config = {
  matcher: ["/upload"],
};

// // middleware.js or middleware.ts
// import { auth } from "./app/utils/auth"; // Adjust the import path as necessary

// // Export the middleware function
// export const middleware = auth;

// // Optionally, you can define the config for the middleware
// export const config = {
//   matcher: ["/upload"], // Adjust as needed
// };

// export { auth as middleware } from "./app/utils/auth";

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// import { auth } from "./app/utils/auth";

// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/login") {
//     const newUrl = new URL("/login", req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }
// });
