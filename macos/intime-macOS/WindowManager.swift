import Foundation
import AppKit

@objc(WindowManager)
class WindowManager: NSObject {
  
  @objc
  func makeTitlebarTransparent() -> Void {
    DispatchQueue.main.async {
      if #available(macOS 10.10, *) {
        NSApp.windows.first?.titlebarAppearsTransparent = true
      }
    }
  }

  @objc
  func makeBackgroundMovable() -> Void {
    DispatchQueue.main.async {
      if #available(macOS 10.2, *) {
        NSApp.windows.first?.isMovableByWindowBackground  = true
      }
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
