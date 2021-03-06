angular.module("pro.config", [])

.constant("PROCONFIG", {
	"appVersion": "0.0.1",
	"releaseMode": "development",
	"webServiceConfig": {
		"development": {
			"baseUrl": "mocks/"
		},
		"staging": {
			"baseUrl": ""
		},
		"production": {
			"baseUrl": ""
		}
	},
	"serviceUrls": {
		"getMatchList": "getMatchList.json"
	}
})

.value("debug", true)

;