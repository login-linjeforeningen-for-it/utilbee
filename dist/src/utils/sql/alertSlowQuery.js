import discordAlert from "../discord/discordAlert.js";
export default async function alertSlowQuery({ application, duration, name, cacheTTL, webhookURL, criticalRole }) {
    const lowerCaseName = name.toLowerCase();
    const firstUpperCaseName = `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`;
    if (duration > cacheTTL / 2 && webhookURL) {
        console.warn(`${firstUpperCaseName} query exceeded half of cache TTL: ${duration.toFixed(2)}s`);
        await discordAlert({
            webhookURL,
            title: `${application} ${firstUpperCaseName} Query Timing`,
            description: `Slow ${lowerCaseName} query detected: ${duration.toFixed(2)}s`,
            ping: duration > (cacheTTL - 1) ? criticalRole : undefined,
        });
    }
}
