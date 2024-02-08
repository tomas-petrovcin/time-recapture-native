rm -rf node_modules macos/Pods macos/build package-lock.json
rm -rf ios/Pods ios/build
rm -rf ~/Library/Developer/Xcode/DerivedData/*

npm i
cd macos && pod install && cd ..

npm start -- --reset-cache
