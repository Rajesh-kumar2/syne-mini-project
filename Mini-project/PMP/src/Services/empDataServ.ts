export class EmpDtaService {
    private EmpData: Array<any>;

    constructor() {
        this.EmpData = [
            {
                id: 1,
                firstName: "Rajesh",
                lastName: "Kumar",
                designation: "Developer",
                platform:"Full stack",
                empImg: "/djfhj/afdja/j.jpg"
            },
            {
                id: 2,
                firstName: "Rajesh",
                lastName: "Kumar",
                designation: "Developer",
                platform:"Full stack",
                empImg: "/djfhj/afdja/j.jpg"
            },
            {
                id: 3,
                firstName: "Mukesh",
                lastName: "Kumar",
                designation: "Tester",
                platform:"Java",
                empImg: "/djfhj/afdja/j.jpg"
            },
            {
                id: 4,
                firstName: "mahesh",
                lastName: "Kumar",
                designation: "sr dev",
                platform:"dot net",
                empImg: "/djfhj/afdja/j.jpg"
            },
            {
                id: 5,
                firstName: "Rupesh",
                lastName: "Kumar",
                designation: "Developer",
                platform:"Angular",
                empImg: "/djfhj/afdja/j.jpg"
            },
            {
                id: 6,
                firstName: "Manoj",
                lastName: "Kumar",
                designation: "TA",
                platform:"backend",
                empImg: "/djfhj/afdja/j.jpg"
            },
            
            
        ]
    }

    get eData() {
        return this.EmpData;
    }
}