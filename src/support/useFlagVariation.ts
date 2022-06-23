import type { LDClient } from "launchdarkly-js-client-sdk"
import { useLDClient } from "launchdarkly-react-client-sdk"

type Optional<T> = T | undefined
type UseFlagVariation = <T>(name: string, defaultValue?: T) => T

const useFlagVariation: UseFlagVariation = <T>(name: string, defaultValue?: T) => {
    const ldClient: Optional<LDClient> = useLDClient()
    if (ldClient) return ldClient.variation(name, defaultValue)
    return defaultValue
}

export default useFlagVariation