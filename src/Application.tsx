import type { FunctionComponent } from "react"
import { Fragment } from "react"

import { MyComponent } from "./components"

const Application: FunctionComponent = () => {
    return <Fragment>
        <div>Welcome to the Application!</div>
        <MyComponent/>
    </Fragment>
}

export default Application