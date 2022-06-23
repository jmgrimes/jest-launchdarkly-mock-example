import { render } from "@testing-library/react"
import { ldClientMock } from "jest-launchdarkly-mock"
import { any } from "jest"
import { when } from "jest-when"

import MyComponent from "./MyComponent"

const mockFlagVariationWithValue = (name: string, value: boolean) => {
    when(ldClientMock.variation).calledWith(name, expect.any(Boolean)).mockReturnValue(value)
}

const mockFlagVariationReset = () => {
    ldClientMock.variation.mockReset()
}

describe("<MyComponent/>", () => {
    it("renders the correct value when the my-flag variation is false", () => {
        mockFlagVariationWithValue("my-flag", false)
        const { getByText } = render(<MyComponent/>)
        expect(getByText("MyComponent is disabled.")).toBeInTheDocument()
    })

    it("renders the correct value when the my-flag variation is true", () => {
        mockFlagVariationWithValue("my-flag", true)
        const { getByText } = render(<MyComponent/>)
        expect(getByText("MyComponent is enabled.")).toBeInTheDocument()
    })

    afterEach(mockFlagVariationReset)
})