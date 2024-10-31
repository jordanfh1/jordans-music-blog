import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/en/3/3a/The_Sound_of_Sonny.jpg',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/en/thumb/1/1d/Chet_%28album%29.jpg/220px-Chet_%28album%29.jpg',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/en/thumb/1/15/Bud_Powell_-_Jazz_Giant_%28album_cover%29.jpg/220px-Bud_Powell_-_Jazz_Giant_%28album_cover%29.jpg',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/I/51IpgrBH2JL.__AC_SY300_SX300_QL70_ML2_.jpg',
      },
      {
        protocol: 'https',
        hostname: 'e.snmc.io',
        port: '',
        pathname: '/i/600/w/5a5379a5ca516cdd83032a28858931ec/7168189/stan-getz-the-artistry-of-stan-getz-Cover-Art.jpg',
      },
      {
        protocol: 'https',
        hostname: 'ovationmusic.org.uk',
        port: '',
        pathname: '/wp-content/uploads/2019/09/Jordan-Houghton-300x300.jpg',
      }
    ],
  },
}



export default nextConfig;

