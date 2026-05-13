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

export default async function discordAlert({
    webhookURL,
    title,
    description,
    color = 0xdb6d28,
    url,
    author,
    footer,
    fields,
    ping,
    threadId,
    timestamp,
}: DiscordAlertProps): Promise<void> {
    const webhookUrl = new URL(webhookURL)
    if (threadId) {
        webhookUrl.searchParams.set('thread_id', threadId)
    }

    const payload: { content?: string; embeds: object[] } = {
        embeds: [
            {
                author: author ? author : undefined,
                title: `${title} 🐝`,
                url,
                description,
                color,
                fields,
                footer: footer ? { text: footer } : undefined,
                timestamp: timestamp ?? new Date().toISOString(),
            }
        ]
    }

    if (ping) {
        payload.content = `<@&${ping}>`
    }

    const response = await fetch(webhookUrl.toString(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })

    if (!response.ok) {
        throw new Error(`Discord webhook failed: ${response.status} ${await response.text()}`)
    }
}
