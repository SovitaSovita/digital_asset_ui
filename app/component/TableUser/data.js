import React from "react";
const columns = [
  {name: "PROFILE", uid: "profile"},
  {name: "FIRSTNAME" , uid: "fname"},
  {name: "LASTNAME" , uid: "lname"},
  {name: "USERNAME" , uid: "uname"},
  {name: "POINT", uid: "point"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

const users = [
  {
    id: 1   ,
    fname: "Saut ",
    lname: "Sokreach",
    uname: "sautsokreach",
    point: 100,
    status: "approve",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2   ,
    fname: "Rin ",
    lname: "Phearun",
    uname: "pheathork",
    point: 99,
    status: "unapprove",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "pheathork@gmail.com",
  },
 
];

export {columns, users};
