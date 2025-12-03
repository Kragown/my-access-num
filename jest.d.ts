import '@testing-library/jest-dom'

declare namespace jest {
  interface Matchers<R = void> {
    toBeInTheDocument(): R
    toHaveTextContent(text: string | RegExp): R
    toBeVisible(): R
    toBeDisabled(): R
    toBeEnabled(): R
    toHaveClass(...classNames: string[]): R
    toHaveAttribute(attr: string, value?: string): R
    toHaveValue(value: string | number | string[]): R
    toBeChecked(): R
    toBeRequired(): R
    toBeInvalid(): R
    toBeValid(): R
    toBeEmptyDOMElement(): R
    toContainElement(element: HTMLElement | null): R
    toContainHTML(htmlText: string): R
    toHaveAccessibleDescription(expectedDescription?: string | RegExp): R
    toHaveAccessibleName(expectedName?: string | RegExp): R
    toHaveDisplayValue(value: string | RegExp | (string | RegExp)[]): R
    toHaveFormValues(expectedValues: Record<string, any>): R
    toHaveStyle(css: string | Record<string, any>): R
    toBePartiallyChecked(): R
    toHaveErrorMessage(message: string | RegExp): R
  }
}
