/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
   
    experimental: { images: { allowFutureImage: true } },

    
      i18n: {
        locales: ["es"],
        defaultLocale: "es",
      },
   
  
  
  
};




module.exports = nextConfig
