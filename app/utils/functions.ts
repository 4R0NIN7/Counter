// eslint-disable-next-line no-promise-executor-return
const timeout = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export { timeout }
