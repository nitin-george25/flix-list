/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        API_PATH: 'https://api.themoviedb.org/3',
        API_KEY: '14f42019af4f87a6c1044e9f7c093828',
    },
    images: {
        domains: ['image.tmdb.org'],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/w500',
        }, ],
    },
};

module.exports = nextConfig;