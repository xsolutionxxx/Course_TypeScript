const serverConfig: {
    protocol: "http" | "https";
    port: 3000 | 3001;
    /* start: () => {}; */
} = {
    protocol: "https",
    port: 3000,
};

const startServer: (protocol: "http" | "https", port: 3000 | 3001) => string = (
    protocol: "http" | "https",
    port: 3000 | 3001,
): "Server started" => {
    console.log(`Server started on ${protocol}://server:${port}`);

    return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port);
