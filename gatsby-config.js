require('dotenv').config({
	path: '.env',
});

module.exports = {
	siteMetadata: {
		siteTitle: 'Gatsby Starter DotDev',
		siteTitleAlt: 'Gatsby Starter DotDev',
		siteHeadline: 'Gatsby Starter DotDev',
		siteUrl: 'https://gatsby-starter-dotdev.kennethwang.dev',
		siteDescription: 'Gatsby Starter for Dotdev Theme',
		siteLanguage: 'en',
		siteImage: '/banner.jpg',
		author: 'John Doe',
		role: 'backend engineer',
		footerLinks: [
			{
				title: 'Email',
				url: 'mailto:me@kennethwang.dev',
			},
			{
				title: 'GitHub',
				url: 'https://github.com/KennethWangDotDev/gatsby-starter-dotdev',
			},
		],
		projectsSubtitle: 'A selection of my favorite projects, completed in recent years.',
		writingsSubtitle: 'My thoughts on web development and product design.',
	},
	plugins: [
		{
			resolve: 'gatsby-theme-dotdev',
			options: {},
		},
	],
};
