# Fiori Sample - Calling REST API through Destination

For this example the destination being used is (and should be manually created in subaccount):

## ARIBAAPIDEST
```
Type=HTTP
clientId=<<ARIBA API USER >>
clientSecret=<< ARIBA API PASSWORD >>
HTML5.DynamicDestination=true
Authentication=OAuth2ClientCredentials
Name=ARIBAAPIDEST
WebIDEEnabled=true
tokenServiceURL=https://api-eu.ariba.com/v2/oauth/token
ProxyType=Internet
URL=https://eu.openapi.ariba.com
tokenServiceURLType=Dedicated
tokenServiceUser=<<ARIBA API USER >>
tokenServicePassword=<< ARIBA API PASSWORD >>
```
