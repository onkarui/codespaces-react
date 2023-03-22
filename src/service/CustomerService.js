export function getCustomersMedium() {
    return Promise.resolve([{
        "id": 1000,
        "firstName": "James",
        "lastName":"Butt",
        "country": {
            "name": "Algeria",
            "code": "dz"
        },
        "phoneNumber":"9871235467",
        "mailingAddress":"test1@gmail",
        "policyNumber":"3",
        "subscribeId":"IJHBVBNM",
        "currentAddress": "Benton, John B Jr",
        "date": "2015-09-13T00:00:00.000Z",
        "status": "unqualified",
        "verified": true,
        "activity": 17,
        "representative": {
            "name": "Ioni Bowcher",
            "image": "ionibowcher.png"
        },
        "balance": 70663
    }, {
        "id": 1001,
        "firstName": "Josephine ",
        "lastName":"Darakjy",
        "country": {
            "name": "Egypt",
            "code": "eg"
        },
        "phoneNumber":"6578674653",
        "company": "Chanay, Jeffrey A Esq",
        "policyNumber":"2",
        "subscribeId":"IJHBVBNM",
        "currentAddress": "Manhattan, NY",
        "date": "2019-02-09T00:00:00.000Z",
        "status": "proposal",
        "verified": true,
        "activity": 0,
        "mailingAddress":"test3@gmail.com",
        "representative": {
            "name": "Amy Elsner",
            "image": "amyelsner.png"
        },
        "balance": 82429
    }, {
        "id": 1002,
        "firstName": "Art ",
        "lastName": "Venere",
        "country": {
            "name": "Panama",
            "code": "pa"
        },
        "phoneNumber":"123456789",
        "lastName":"abc",
        "mailingAddress":"check@gmail.com",
        "subscribeId":"IJHBVBNM",
        "currentAddress": "Austin, Texas",
        "policyNumber":"2",
        "company": "Chemel, James L Cpa",
        "date": "2017-05-13T00:00:00.000Z",
        "status": "qualified",
        "verified": false,
        "activity": 63,
        "representative": {
            "name": "Asiya Javayant",
            "image": "asiyajavayant.png"
        },
        "balance": 28334
    }])
}
