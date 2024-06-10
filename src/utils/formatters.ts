export function formatCardString(str: string) {
    const last4 = str.slice(-4);
    return `XXXX-${last4}`;
}