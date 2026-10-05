# Introduction to React Native and Expo: Tesla App
![Screenshots of finished project](./assets/images/screenshotsOfReactNativeProject-TeslaApp.png)

This is a great first React Native project. It's taught by Vadim at notJust.dev (https://www.youtube.com/watch?v=iQ_0Fd_N3Mk&ab_channel=notJust%E2%80%A4dev)


## Tutorial Includes:
* You learn to initiate a project via expo router, create and style components, nest and integrate components into an app in ~ 2hours.
* Finished app includes: A scrollable feed of car listings composed of listing components, button components, and a header component. Scroll behavior is also made snap-to-grid like a tiktok feed.
* Vadim starts off by hardcoding the components and then shows you how to transform them into reusable components by implementing props. I appreciated this.
* This app makes for a great reference for other projects that implement feed scrolling, buttons, headers, links.
* I directed all of the pressable items to my blog: METAPLASTICITY by PSYCHOBIOMACHINE (https://psychobiomachine.substack.com/)

## Note: 
* This youtube video is like 4 years old and Vadim uses '.js' for all of his files and keeps his main 'App.js' file out in the open. I had to make a couple of changes to make it work. However, it's still a React Native app and it's written using JSX + js. 
* It's still very easy to follow along.
* As of 8-2025 expo projects default to typescript (.tsx) and the 'App.js' file that Vadim worked on is in the 'App' directory as 'index.tsx'. It doesn't make a big difference. You don't have to implement typescript 'typing' in .tsx files. There is no implementation of typescript features in this app and I only created .jsx files during this project. I left all of the .tsx configuration materials alone.
* You will need to adjust the all of the paths (ex: ../assets -> ../../assets ) due to the index file being in its own directory.
