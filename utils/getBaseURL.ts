const getBaseURL = () =>  {
  if (typeof window !== 'undefined') return '';
  return process.env.VERCEL_ENV === "production"
    ? `https://justradiohead.vercel.app`
    : 'http://localhost:3000';
};

export default getBaseURL;