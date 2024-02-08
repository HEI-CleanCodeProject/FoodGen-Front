const domains = process.env.NEXT_PUBLIC_IMAGE_DOMAINS || '';
/** @type {import('next').NextConfig} */
const nextConfig = {images: {
      domains:["*"],
    }};


export default nextConfig;
