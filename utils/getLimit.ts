export default function getLimit(request: Request) {
  const url = new URL(request.url);
  const limitParam = url.searchParams.get('limit');
  return limitParam ? parseInt(limitParam, 10) : undefined;
}