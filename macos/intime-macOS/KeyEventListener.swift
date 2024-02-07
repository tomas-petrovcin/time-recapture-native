@objc(KeyEventListener)
class KeyEventListener: RCTEventEmitter {

  @objc
  func sendKeyEvent(_ key: UInt16) -> Void {
    self.sendEvent(withName: "keyDown", body: ["key": key])
  }

  override func supportedEvents() -> [String]? {
    return ["keyDown"]
  }

  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
