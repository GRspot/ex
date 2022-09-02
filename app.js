/*let a=5;
const b=2;


let myName="yumin";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log ("hello"+ myName);
myName ="Lim";
console.log (myName);



const amIFat= true;
console.log(amIFat);
let something;
console.log(something);

//배열 array 만들기 
const daysOfWeek=['mon','tue','wed','thu','fri','sat'];

const nonsense=[1,2,"hello",false,true,null];
console.log(daysOfWeek,nonsense);

//배열에서 값 받아오기
console.log(daysOfWeek[5]);
//배열에 값 추가하기
daysOfWeek.push("sun");

console.log(daysOfWeek);
const apple ="apple";

const toBuy=["potato","tomato","pizza"];
toBuy.push("candy");

console.log(toBuy);
//console.XXX 이 형태를 만들어 보기!
const playerName="yumin";
const playerPoints=1212121;
const playerPretty= true;
//현재 플레이어에 대한 정보가 어느정도 있다 하지만 이것은 ㅇㅇㅇ.ㅇㅇㅇ
//이런 형태가 아니다


//const player=["yumin","1212",'pretty'];
//이렇게 어레이로 만들면 진짜 별로 왜냐면 이 항목이 뭔지 확실히 알 수 가 없음 
//주석을 하나하나 달 수 도 있지만 그거는 너무 번거로움
//더 좋은 방법은 무엇일까

const player={
    name:"yumin",
    points:10,
    pretty:true,
};
console.log(player["name"]);
console.log(player.name);
//위 두개는 모두 같은 값을 도출하는 두가지 방법 
console.log(player);
player.pretty=false; //값을 업데이트 했다. const는 업데이트 못한다고 했지만
//이것은 const 속의 object를 없데이트 한 것으로 가능하다.
console.log(player);
//object 추가하기
player.lastName= ("Lim");
console.log(player);
//어레이처럼 똑같이 추가 가능!

//숫자도 업데이트 가능한데..
player.points=player.points+10;
console.log(player.points);
//이렇게 숫자 더하기도 가능!!
//function 만들기 
function sayHello(){
    console.log("Hello");
}
sayHello();
sayHello();
sayHello();

//() 이 괄호가 바로 시작 버튼이다 그 펑션이 움직이게 할 수 있는 버튼이다.
sayHello("yumin"); 

const C="yumin";

function helloM(nameOfPerson,age){
    console.log("Hello my name is"+nameOfPerson+"and I am"+age+"years old");
}

helloM("yumin,20");

function plus(a,b) {
    console.log (a+b);//이 콘솔로그는 이 함수 안에서만 존재할 수 있다.
    //밖에다가 console.log --- 하면 에러뜬다.
}
plus(1,3);



const player1={
    name:"yumin",
    helloS: function(otherPersonsName){
        console.log("hello!"+ otherPersonsName+ "nice to meet you")
    },
};


player1.helloS("Marco");

const player2={
    name:"Yumin",
    age:"20",
};

player2.name="yuminlim";
console.log(player2);






const age=22;
function calculateJpAge(ageOfKr){
    return ageOfKr-2;
}

const JpAge =calculateJpAge(age);
 
console.log(JpAge);
//true 인지 아닌지 알 수 있는것 if /else (조건문)
const age1=prompt("how old are you"); //prompt 는 자바를 멈춘다
console.log(age1);
//이 promopt 는 굉장히 오래된 방식이다.
//하나의 타입을 받아서 다른 타입으로 바꾸는 방법
//typeo: 값의 정보를 알 수 있다 (string,,null,,,,)
//여기서 prompt 는 string이 기본값이다. number으로 바꾸는 과정이 필요
//'15'를 15로 바꾸는 방법은 무엇일까?
//즉 string type 15를 number 15로 바꾸는 방법은 무엇일까?
//그떄 parseInt를 사용한다
console.log(typeof age1);

parseInt("age1");
console.log(typeof parseInt(age1)); 


//계산기 만들기....
const age2 =parseInt(prompt("how old are you?"));
console.log(age2);
console.log(age2+3);

//isNaN 이것은 우리에게 boolean을 return한다 그래서 여기에 넣으면
// 값이 참인지 거짓인지 두개로만 나온다.
//NaN이므로 숫자가 아니면 true 숫자이면 false가 나온다.

let age3=parseInt(prompt("나이를 입력하세요"));
if(isNaN(age3)){
    //true 혹은 false가 나오는 booelean type 만 넣을 수 있다.
    //if옆에가 ture가 나오면 밑의 것들이 실해외고
    const age3=parseInt(prompt("숫자를 다시 입력하세요"))

} else{
    console.log(parseInt(age3))
}

//if 가 3개가 필요하다면 else if 필요~~

const age4=parseInt(prompt("나이를 입력하세요"));

if(isNaN(age4)){
    console.log("숫자를 입력해 주세요")
}else if (age4<18){
    console.log("당신은 술을 마실 수 없습니다"); 
}else if (age4>=18 && age4<=50){
    console.log("당신은 술을 마실 수 있습니다");
}else { //else (즉 마지막)에는 조건을 달 수 없다.
    //그냥 위의 조건을 모두 만족하지 않는 것이 else 가 될 뿐이다..
    console.log("지나친 음주는 건강에 해롭습니다");
}
//true || true === true
//false || true === true
//true || false === true
//false || false === false


//true && true === true
//false && true === false
//true && false === false
//false && false === false

*/
