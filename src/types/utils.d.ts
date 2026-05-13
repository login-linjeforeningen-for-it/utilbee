/* eslint-disable @stylistic/semi */

declare module 'utilbee/utils' {
    export interface SlowQueryProps {
        application: string
        duration: number
        name: string
        cacheTTL: number
        webhookURL: string
        criticalRole: string
    }

    export interface DiscordAlertProps {
        webhookURL: string
        title: string
        description: string
        color?: number
        url?: string
        author?: string
        footer?: string
        fields?: { name: string; value: string; inline?: boolean }[]
        ping?: string
        threadId?: string
        timestamp?: string
    }

    export default async function alertSlowQuery(props: SlowQueryProps): Promise<void>;
    export function discordAlert(props: DiscordAlertProps): Promise<void>;
}
