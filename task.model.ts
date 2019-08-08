 export interface Task{
    id:string;
    title:string;
    description:string;
    status:TaskStatus;

}
 export enum TaskStatus{
     OPEN='OPNE',
     IN_PROGRESS='IN_PROGRESS',
     DONE="DONE",
 }