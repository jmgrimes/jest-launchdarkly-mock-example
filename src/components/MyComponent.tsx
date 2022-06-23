import type { FunctionComponent } from "react"
import { useFlagVariation } from "../support"

const MyComponent: FunctionComponent = () => {
    const myFlag = useFlagVariation<boolean>("my-flag", false)
    if (myFlag) {
        return <div>MyComponent is enabled.</div>
    }
    return <div>MyComponent is disabled.</div>
}

export default MyComponent