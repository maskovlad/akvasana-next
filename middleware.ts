import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/dashboard/orders", "/dashboard/settings"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (user === process.env.ADMIN_LOGIN && pwd === process.env.ADMIN_PWD) {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
