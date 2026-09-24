// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

interface IConfig {
    // I на початку - interface - венгерська нотація
    protocol: "http" | "https";
    port: 3000 | 3001;
    log: (msg: string) => void;
}

interface Role {
    role: string;
}

interface ConfigWithRole extends IConfig, Role {}

const serverConfig: ConfigWithRole = {
    protocol: "https",
    port: 3000,
    role: "admin",
    log: (msg: string): void => console.log(msg),
};

type StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: (msg: string) => void,
) => string;

const startServer: StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: (msg: string) => void,
): "Server started" => {
    log(`Server started on ${protocol}://server:${port}`);
    return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface Styles {
    [key: string]: string;
}

const styles: Styles = {
    position: "absolute",
    top: "10px",
    left: "20px",
};
