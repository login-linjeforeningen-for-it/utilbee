export default async function discordAlert({ webhookURL, title, description, color = 0xff0000, url, author, footer, fields, ping, threadId, timestamp, }) {
    const webhookUrl = new URL(webhookURL);
    if (threadId) {
        webhookUrl.searchParams.set('thread_id', threadId);
    }
    const payload = {
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
    };
    if (ping) {
        payload.content = `<@&${ping}>`;
    }
    const response = await fetch(webhookUrl.toString(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
        throw new Error(`Discord webhook failed: ${response.status} ${await response.text()}`);
    }
}
