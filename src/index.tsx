import type { AsyncProviderConfig } from "launchdarkly-react-client-sdk"
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk"
import { render } from "react-dom"

import Application from "./Application"

const rootElement = document.getElementById("root")
const rootApplication = <Application/>

const ldProviderConfig: AsyncProviderConfig  = {
    clientSideID: "your-client-side-id",
    user: {
        key: "11",
        name: "Jane Hopper",
        email: "janehopper@example.com",
    },
    options: {
        sendEventsOnlyForVariation: true,
    },
}

asyncWithLDProvider(ldProviderConfig)
    .then((LDProvider) => <LDProvider>{rootApplication}</LDProvider>)
    .then((application) => render(application, rootElement))
