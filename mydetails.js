const myname=prompt("What is your name?")
const mycollege=prompt("What is your college name?")
const mybranch=prompt("What is your branch name?")
export default function Hello(){
    return(
        <>
        <h1>My name is {myname}</h1>
        <h1>My college is {mycollege}</h1>
        <h1>My branch is {mybranch}</h1>
        </>
    );
}