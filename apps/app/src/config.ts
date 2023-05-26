let config: null | { [key: string]: string } = null

export function getConfig() {
    if (!config) {
        const ALCHEMY_ID = process.env.ALCHEMY_ID
        if (!ALCHEMY_ID) throw new Error("ALCHEMY_ID not provided")

        config = {
            ALCHEMY_ID
        }
    }
    return config
}