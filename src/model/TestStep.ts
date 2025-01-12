import type { batteryInfo } from './TestSequence'

class TestStep {
  type!: string
  generateXml!: (batteryInfo: batteryInfo) => Element
  description: () => string = () => `Test Step: ${this.type}`
}

export default TestStep
