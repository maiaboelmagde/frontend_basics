console.log("The Third Question .........");
//-------------------------

const projectId = prompt("Enter Project ID:");
const projectName = prompt("Enter Project Name:");
const duration = prompt("Enter Project Duration:");

const project = {
    projectId: projectId,
    projectName: projectName,
    duration: duration, 
    printData: function () {
        console.log(`Project ID: ${this.projectId} , 
Project Name: ${this.projectName},
Project Duration: ${this.duration}`);
    }
};

project.printData();