/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.externals.push("nodemailer");
        }
        return config;
    },
};

export default nextConfig;
