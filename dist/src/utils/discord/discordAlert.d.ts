export interface DiscordAlertProps {
    webhookURL: string;
    title: string;
    description: string;
    color?: number;
    url?: string;
    author?: string;
    footer?: string;
    fields?: {
        name: string;
        value: string;
        inline?: boolean;
    }[];
    ping?: string;
    threadId?: string;
    timestamp?: string;
}
export default function discordAlert({ webhookURL, title, description, color, url, author, footer, fields, ping, threadId, timestamp, }: DiscordAlertProps): Promise<void>;
