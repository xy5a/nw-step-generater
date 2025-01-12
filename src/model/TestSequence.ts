import type TestStep from './TestStep'

class TestSequence {
  tests: Array<TestStep>
  batteryInfo: batteryInfo

  constructor() {
    this.tests = []
    this.batteryInfo = {
      Mass: 1.0,
    }
    // TODO
  }

  addTest(test: TestStep) {
    this.tests.push(test)
  }

  dropTest(n: number) {
    this.tests.splice(n, 1)
  }

  generateFile(): string {
    const dom = document.implementation.createDocument('', 'root')
    // TODO: generate header
    for (const test of this.tests) {
      dom.appendChild(test.generateXml(this.batteryInfo))
    }

    return new XMLSerializer().serializeToString(dom)
  }
}

interface batteryInfo {
  Mass: number
}

export default TestSequence
export type { batteryInfo }
