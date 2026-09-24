type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

type Role = {
    role: string;
};
type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
    protocol: "https",
    port: 3000,
    role: "admin",
};

const backupConfig: ConfigWithRole = {
    protocol: "https",
    port: 3000,
    role: "user",
};

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServer: StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
): "Server started" => {
    if (port === 3000 || port === 3001) {
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error("Invalid port");
    }
    return "Server started";
};

startServer("https", 3001);
