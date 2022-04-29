const readXlsxFile = require('read-excel-file/node')


//class
class User {
    constructor(clientname, projectname, projectlead, username, billHrs, nonBillHrs, totalHrs) {
        this.clientname = clientname;
        this.projectname = projectname;
        this.projectlead = projectlead;
        this.username = username;
        this.billHrs = billHrs;
        this.nonBillHrs = nonBillHrs;
        this.totalHrs = totalHrs;
        if (this.projectlead == this.username){
            this.role = "Leader";
        } else {
            this.role = "Peer";
        }
    }
}

let userInfo = {};

let path = '/Users/robertasaldana/Downloads/equipos.xlsx';
//let path = '/Users/robertasaldana/Downloads/Reporte horas-equipos 360 (1).xlsx';
readXlsxFile(path).then((rows) => {
    rows.shift();

    rows.forEach((col) => {

        let bill = 0;
        let nonbill = 0;
        let totalHr = 0;

        for (let i = 4; i < 10; i++) {
            if (col[i] != '-'){
                bill = bill + col[i];
            }
            
        }
        for (let i = 10; i < 15; i++) {
            if (col[i] != '-'){
                nonbill = nonbill + col[i];
            }
        }
        // console.log(nonbill);
        // console.log(bill);
        // console.log(totalHr);


        totalHr = bill + nonbill;

        const user = new User(col[0], col[1], col[2], col[3], bill, nonbill, totalHr);
        //console.log(col[2]);

        if (user.username != "Totals"){
            if (userInfo[user.username]){
                userInfo[user.username].push(user);
            } else {
                userInfo[user.username] = [user];
            }
        }
        
    });
    console.log(userInfo);
});


// let array = {};

// array["eduardo"] = ["Hola"];
// array["eduardo"].push("Bye");
// array["roberta"] = ["Hola"];
// array["roberta"].push("Bye");

// console.log(array["eduardo"].length);

// let cont = 0;
// // array.foreach((dato) => {
// //     dato;
// //     console.log(cont++);
// // });

// for (let i = 0; i<array.length; i++){
//     console.log(i);
// }

// UserInfo = todo los obj de usuarios
// ProjInfo = lista de usuarios y todos los usuarios en ese proj

// for (int key = 0; key < UserInfo.size(); key++ { //itera por persona
//     for UserInfo[key][i] //itera por projecto de persona
//         for ProjInfo[UserInfo[key][i].ProjName] //itera el projecto
//             //checamos si cada usuario cumplió con las horas
//             if (ProjInfo[UserInfo[key][i].ProjName.TotalHours >= 40]) //checamos si user 1 cumplio las horas
//                 if (team[UserInfo[key].username]){ //checa si el equipo de esta persona ya comenzo solo hace push si no crea equipo
//                     team[UserInfo[key].username].push(ProjInfo[UserInfo[key][i].name]) //push objeto que contenga name rol y hr
//                 } else {
//                     team[UserInfo[key].username] = ProjInfo[UserInfo[key][i].name] //crear equipo
//                 }
// }


