export default function getBaseURL() {
  if (typeof window !== 'undefined') return '';
  const productionHost = process.env.VERCEL_URL;
  return productionHost
    ? `https://${productionHost}`
    : 'http://localhost:3000';
}