define({
  "status": 200,
  "responseType": "json",
  "response": {
    "stateToken": "01bfpkAkRyqUZQAe3IzERUqZGOfvYhX83QYCQIDnKZ",
    "type": "LOGIN",
    "expiresAt": "2019-03-01T23:05:43.000Z",
    "status": "FACTOR_CHALLENGE",
    "_embedded": {
      "request": {
        "ip": "127.0.0.1",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"
      },
      "user": {
        "id": "00uwd7cBE4Zzg7nVj0g3",
        "passwordChanged": "2019-02-02T00:15:12.000Z",
        "profile": {
          "login": "evra@rain.com",
          "firstName": "pat",
          "lastName": "evra",
          "locale": "en",
          "timeZone": "America/Los_Angeles"
        }
      },
      "factors": [{
        "id": "emailhp9NXcoXu8z2wN0g3s",
        "factorType": "email",
        "provider": "OKTA",
        "vendorName": "OKTA",
        "profile": {
          "email": "e...a@rain.com"
        },
        "_links": {
          "verify": {
            "href": "http://foo.com/api/v1/authn/factors/emailhp9NXcoXu8z2wN0g3s/verify",
            "hints": { "allow": ["POST"] }
          }
        }
      }],
      "authentication": {
        "protocol": "OAUTH2.0",
        "request": {
          "scope": "openid profile",
          "response_type": "id_token",
          "redirect_uri": "http://foo.com",
          "nonce": "81bdjqvg",
          "response_mode": "fragment"
        },
        "issuer": {
          "name": "Rain-Cloud59",
          "uri": "http://foo.com"
        },
        "client": { "id": "0oat59f8prmWrik500g3", "name": "IDX", "_links": {} }
      }
    },
    "_links": {
      "next": {
        "name": "verify",
        "href": "https://foo.com/api/v1/authn/factors/emailhp9NXcoXu8z2wN0g3s/verify",
        "hints": {
          "allow": [
            "POST"
          ]
        }
      },
      "cancel": {
        "href": "https://foo.com/api/v1/authn/cancel",
        "hints": {
          "allow": [
            "POST"
          ]
        }
      },
      "resend": [
        {
          "name": "email",
          "href": "https://foo.com/api/v1/authn/factors/emailhp9NXcoXu8z2wN0g3s/verify/resend",
          "hints": {
            "allow": [
              "POST"
            ]
          }
        }
      ]
    }
  }
});
