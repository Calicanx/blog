const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.ayushchugh.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.senderstack.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "senderstack.com", // <-- added (no www)
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "myphotoai.io",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "dukakuu.co.ke",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "andika.io",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.pms-dash-vision.lovable.app",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "pms-dash-vision.lovable.app",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.duaranet.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.pinimg.com",
				port: "",
				pathname: "/**",
			}
		],
	},
	// async redirects() {
	// 	if (!process.env.POSTGRES_URL) {
	// 		return [];
	// 	}
	// 	const { rows: redirects } = await sql`
	//     SELECT source, destination, permanent
	//     FROM redirects;
	//   `;
	// 	return redirects.map(({ source, destination, permanent }) => ({
	// 		source,
	// 		destination,
	// 		permanent: !!permanent,
	// 	}));
	// },
	// headers() {
	// 	return [
	// 		{
	// 			source: "/(.*)",
	// 			headers: securityHeaders,
	// 		},
	// 	];
	// },
};

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' data:;
`;

// const securityHeaders = [
// 	{
// 		key: "Content-Security-Policy",
// 		value: ContentSecurityPolicy.replace(/\n/g, ""),
// 	},
// 	// {
// 	// 	key: "Referrer-Policy",
// 	// 	value: "origin-when-cross-origin",
// 	// },
// 	{
// 		key: "X-Frame-Options",
// 		value: "DENY",
// 	},
// 	{
// 		key: "X-Content-Type-Options",
// 		value: "nosniff",
// 	},
// 	{
// 		key: "X-DNS-Prefetch-Control",
// 		value: "on",
// 	},
// 	{
// 		key: "Strict-Transport-Security",
// 		value: "max-age=31536000; includeSubDomains; preload",
// 	},
// 	{
// 		key: "Permissions-Policy",
// 		value: "camera=(), microphone=(), geolocation=()",
// 	},
// ];

export default nextConfig;
