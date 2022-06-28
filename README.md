# Linda Benson Interiors
Linda Benson was my first ever freelance client and this site (Linda Benson Interiors)
was the first real live website I ever designed, built, and deployed onto the internet.
I worked with Linda to figure out what she envisioned for this website, and made UI/UX
recommendations based on everything I had learned at RIT while earning my BS in IT.

Around 10 years ago, I built this site with PHP, MySQL, and Javascript. What you're
looking at now is an MVP rewrite using GatsbyJS. I chose GatsbyJS because React's
website recommends GatsbyJS for static websites as it lets you use React components,
but outputs pre-rendered HTML and CSS to guarantee the fastest load time.

The original Javascript has been replaced with React state management. The image
serving has been optimized using the gatsby-plugin-image package so image sizes
are dynamic and load times are as fast as possible. CSS floats and relative
positioning have been replaced with CSS flex.

And finally, the entire site optimization, including SEO, has been tested using Google's
Lighthouse tool: Performance 100/100, Accessibility 97/100, and Best Practices 100/100.

I will be working to make improvements moving forward including: Responsive CSS
for a better tablet/mobile experience, updating image serving to be even more
performant, updating file/folder structure/organization, implementing a database
to store site information, and creating a backend to facilitate site/database
content updates.

## Technologies

- GatsbyJS
- ReactJS
- gatsby-plugin-image
- gatsby-plugin-sharp
- gatsby-source-filesystem
- CSS Flex

## Launch

Download the source code and from the project root directory run
`npm install`

- To run the dev instance: `npm run develop`

- To test the production build (minified css/js): `npm run serve`
