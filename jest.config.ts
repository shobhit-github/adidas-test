import type { Config } from "@jest/types"

const testConf: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
}
export default testConf
