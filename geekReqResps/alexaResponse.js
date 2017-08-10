var resp = {
  "version": "string",
  "sessionAttributes": {
    "string": "<object>"
  },
  "response": {
    "outputSpeech": {
      "type": "string",
      "text": "string",
      "ssml": "string"
    },
    "card": {
      "type": "string",
      "title": "string",
      "content": "string",
      "text": "string",
      "image": {
        "smallImageUrl": "string",
        "largeImageUrl": "string"
      }
    },
    "reprompt": {
      "outputSpeech": {
        "type": "string",
        "text": "string",
        "ssml": "string"
      }
    },
    "directives": [
      {
        "type": "Display.RenderTemplate",
        "template": {
          "type": "string"
		  // ...
        }
      },
      {
        "type": "AudioPlayer",
        "playBehavior": "string",
        "audioItem": {
          "stream": {
            "token": "string",
            "url": "string",
            "offsetInMilliseconds": 0
          }
        }
      },
      {
        "general": {
          "type": "VideoApp.Launch",
          "videoItem": {
            "source": "string",
            "metadata": {
              "title": "string",
              "subtitle": "string"
            }
          }
        }
      }
    ],
    "shouldEndSession": true
  }
}

console.log(resp);
