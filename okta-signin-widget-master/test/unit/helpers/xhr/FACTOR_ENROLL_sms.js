define({
    "status": 200,
    "responseType": "json",
    "response": {
        "stateToken": "01testStateToken",
        "type": "LOGIN",
        "expiresAt": "2019-03-05T05:41:39.000Z",
        "status": "FACTOR_ENROLL",
        "_embedded": {
            "request": {
                "ip": "127.0.0.1",
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"
            },
            "user": {
                "id": "00u188zRMOnyvfENi0g3",
                "profile": {
                    "login": "lingard@rain.com",
                    "firstName": "jesse",
                    "lastName": "lingard",
                    "locale": "en",
                    "timeZone": "America/Los_Angeles"
                }
            },
            "factors": [
                {
                    "factorType": "sms",
                    "provider": "OKTA",
                    "vendorName": "OKTA",
                    "_links": {
                        "enroll": {
                            "href": "http://foo.okta.com/api/v1/authn/factors",
                            "hints": {
                                "allow": [
                                    "POST"
                                ]
                            }
                        }
                    },
                    "status": "NOT_SETUP",
                    "enrollment": "REQUIRED"
                }
            ],
            "authentication": {
                "protocol": "OAUTH2.0",
                "request": {
                    "scope": "openid profile",
                    "response_type": "id_token",
                    "redirect_uri": "http://foo.okta.com",
                    "nonce": "6wi0aqhs",
                    "response_mode": "fragment"
                },
                "issuer": {
                    "name": "Rain-Cloud59",
                    "uri": "http://nikhil.sigmanetcorp.us:1802"
                },
                "client": {
                    "id": "0oat59f8prmWrik500g3",
                    "name": "IDX",
                    "_links": {

                    }
                }
            }
        },
        "_links": {
            "cancel": {
                "href": "http://foo.okta.com/api/v1/authn/cancel",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            }
        }
    }
});