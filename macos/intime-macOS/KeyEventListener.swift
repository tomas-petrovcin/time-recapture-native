@objc(KeyEventListener)
class KeyEventListener: RCTEventEmitter {

  @objc
  func sendKeyEvent(_ event: NSEvent) -> Void {

    let eventDetails: [String: Any] = [
        "keyCode": event.keyCode,
        "isARepeat": event.isARepeat,
        "modifierFlags": event.modifierFlags.rawValue
    ]

    self.sendEvent(withName: "keyDown", body: eventDetails)
  }

  override func supportedEvents() -> [String]? {
    return ["keyDown"]
  }

  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
