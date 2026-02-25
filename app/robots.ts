export const dynamic = "force-static";

export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
			},
		],
		sitemap: "https://rabin.work/sitemap.xml",
		host: "https://rabin.work",
	};
}
