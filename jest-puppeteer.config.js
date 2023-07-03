// const config = {
//     launch: {
//         headless: new
//     }
// };

// module.exports = config;

module.exports = {
    launch: {
        headless: "new",
        defaultViewport: { width: 1600, height: 900 }
    },
    browserContext: 'incognito',
    server: {
        command: "npm run start",
        port: 3000,
        launchTimeout: 10000,
        debug: true,
    },
};