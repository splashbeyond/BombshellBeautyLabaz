import { defineMiddleware } from 'astro/middleware';

const ALLOWED = new Set(['v1', 'v2', 'v3']);

export const onRequest = defineMiddleware(async (context, next) => {
  const q = context.url.searchParams.get('variant');
  const cookieVal = context.cookies.get('demo-variant')?.value;

  let v: string = 'v1';
  if (q && ALLOWED.has(q)) {
    v = q;
    context.cookies.set('demo-variant', v, {
      path: '/',
      maxAge: 60 * 60 * 24 * 90,
      sameSite: 'lax',
    });
  } else if (cookieVal && ALLOWED.has(cookieVal)) {
    v = cookieVal;
  }

  context.locals.siteVariant = v as 'v1' | 'v2' | 'v3';
  return next();
});
