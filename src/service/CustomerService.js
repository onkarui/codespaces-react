export function getCustomersMedium() {
    return Promise.resolve([{
        "id": 1000,
        "firstName": "James Butt",
        "lastName":"",
        "country": {
            "name": "Algeria",
            "code": "dz"
        },
        "currentAddress": "Benton, John B Jr",
        "date": "2015-09-13T00:00:00.000Z",
        "status": "unqualified",
        "doNotDisturb":"Y",
        "verified": true,
        "activity": 17,
        "representative": {
            "name": "Ioni Bowcher",
            "image": "ionibowcher.png"
        },
        "balance": 70663
    }, {
        "id": 1001,
        "firstName": "Josephine Darakjy",
        "lastName":"",
        "country": {
            "name": "Egypt",
            "code": "eg"
        },
        "company": "Chanay, Jeffrey A Esq",
        "doNotDisturb":"Y",
        "date": "2019-02-09T00:00:00.000Z",
        "status": "proposal",
        "verified": true,
        "activity": 0,
        "representative": {
            "name": "Amy Elsner",
            "image": "amyelsner.png"
        },
        "balance": 82429
    }, {
        "id": 1002,
        "firstName": "Art Venere",
        "country": {
            "name": "Panama",
            "code": "pa"
        },
        "lastName":"abc",
        "company": "Chemel, James L Cpa",
        "doNotDisturb":"Y",
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
