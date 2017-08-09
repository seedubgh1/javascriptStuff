var req = {
  "version": "string",
  "session": {
    "new": true,
    "sessionId": "string",
    "application": {
      "applicationId": "string"
    },
    "attributes": {
      "string": {}
    },
    "user": {
      "userId": "string",
      "accessToken": "string",
      "permissions": {
        "consentToken": "string"
      }
    },
    "context": {
      "System": {
        "application": {
          "applicationId": "string"
        },
        "user": {
          "userId": "string",
          "accessToken": "string",
          "permissions": {
            "consentToken": "string"
          }
        },
        "device": {
          "deviceId": "string",
          "supportedInterfaces": {
            "AudioPlayer": {}
          }
        },
        "apiEndpoint": "string"
      },
      "AudioPlayer": {
        "token": "string",
        "offsetInMilliseconds": 0,
        "playerActivity": "string"
      }
    },
    "request": {}
  }
}

console.log(req.session.context.System.user.permissions);
