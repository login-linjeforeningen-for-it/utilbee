import type { SlowQueryProps } from 'utilbee/utils'
import discordAlert from '../discord/discordAlert.ts'

export default async function alertSlowQuery({
    application,
    duration,
    name,
    cacheTTL,
    webhookURL,
    criticalRole
}: SlowQueryProps): Promise<void> {
    const lowerCaseName = name.toLowerCase()
    const firstUpperCaseName = `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`
    if (duration > cacheTTL / 2 && webhookURL) {
        console.warn(`${firstUpperCaseName} query exceeded half of cache TTL: ${duration.toFixed(2)}s`)
        await discordAlert({
            webhookURL,
            title: `${application} ${firstUpperCaseName} Query Timing`,
            description: `Slow ${lowerCaseName} query detected: ${duration.toFixed(2)}s`,
            ping: duration > (cacheTTL - 1) ? criticalRole : undefined,
        })
    }
}
