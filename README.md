# Sprint 3 – Sveriges Radio Player :radio:

Todays assignment is to use the Sveriges Radio API to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player!

## How to complete this assignment

Before you go any further, take a moment to look at an example API response from Sveriges Radio. Here you can find a list of all 55 stations, and a url to each station's live stream: http://api.sr.se/api/v2/channels?format=json&size=100

Your task is to use `fetch()` to get this JSON from the Sveriges Radio API and render a list of channels with playable streams on your page. You should use at least the station name, image, and colour keys in the JSON to create a layout which looks something like this:

![Wireframe](https://github.com/Technigo/assignment-radio-player/blob/master/wireframe.png)

### Project setup

In the "code" folder in this assignment you'll find a copy of the Technigo React starter project which you can use as a base to complete this assignment. In the terminal, "cd" into that folder and install dependencies by running `npm install`. Once that's done, you can start the project by running `npm start`.

### React Components

As always, start by thinking of how to divide your page into React components. You will probably want some sort of `Station` component at the very least, but perhaps that component can be broken up into more manageable pieces? Try to draw out your plan on paper to get it clear in your mind.

### API Key.

The Sveriges Radio API seems to work without any sort of authentication, so that's one less thing to worry about! :)

### Using APIs in React & Setting State from the Response

You will need to use the component lifecycle function `componentDidMount()` [docs](https://reactjs.org/docs/react-component.html#componentdidmount) to invoke a `fetch()` function on the url "http://api.sr.se/api/v2/channels?format=json&size=100". Use `.then()` to create a success callback function. Within that callback function, you can use `setState()` to inject the api response into your component.

Refer to the lecture material from the morning, and also check back on your old weather dashboard project for a reminder on how to use `fetch()`!

### Audio

Check out the [documentation](https://www.w3schools.com/tags/tag_audio.asp) for the `<audio>` tag. The format for the stream is mp3, so you'll need to use a `<source>` with the "type" of "audio/mpeg".

## GitHub

To complete this assignment, you need to fork this repository, add your code in the "code" folder, and then submit a pull request on GitHub (from your repository into the Technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

* [SR API Docs](http://sverigesradio.se/api/documentation/v2/index.html)
* [Audio HTML Tag](https://www.w3schools.com/tags/tag_audio.asp)
* [MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should be more comfortable using APIs, and have a little more of an idea of what you'd use an API for. You should be comfortable using `fetch()` now, and using the success callback to set state in React, to get data from the API into your page.

---

### :runner: Stretch Goals

This task has two stretch goals, but both are a little tough, and you'll need to do some research to complete them.

#### Stretch goal 1

Implement a search function which calls `.filter()` on the station list to decide which channels to render. This stretch goal requires you to research how to control form inputs in React - something we will cover more properly later in the sprint.

You will need use the `onChange` attribute on an input to invoke a function which will use the input's value in the `.filter()` call to filter the stations.

#### Stretch goal 2

This stretch goal is to control the audio tags using JavaScript to make it so that only one audio player can play at once. So if you have an audio tag which is currently playing, and you click another, then all other audio must be paused before you play the new one.

To do this, you will need to use a callback function your Station component to notify it's parent component when the user clicks play. You will need to use an `onPlay` prop on the `<audio>` element to trigger the callback function prop. You can then use the function in the parent, which was invoked by the child, to store which player is currently playing. When the user tries to start a new channel, the callback function will be invoked again, and, if there's a currently playing station, you can use the `.pause()` event on it to pause it.

This one's a little tough since it requires multi-directional callbacks to work properly.

Read about [lifting state up](https://reactjs.org/docs/lifting-state-up.html) or google [React callback to parent](https://www.google.se/search?q=react+callback+to+parent) for some ideas of how to implement child -> parent callbacks in React.
