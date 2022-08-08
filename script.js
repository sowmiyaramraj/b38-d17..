document.body.style.backgroundColor = "rgb(228, 196, 114";

function foo(num)
{
    return new Promise((resolve, reject) => 
        setTimeout(()=>resolve(num-1) ,1000));
}
foo(11).then((data)=>
{
    doc(data);
    console.log(data);
    return foo(data);
}).then((data1)=>{
    doc(data1);
    console.log(data1);
    return foo(data1)
}).then((data2)=>{
    doc(data2);
    console.log(data2);
    return foo(data2)
}).then((data3)=>
{
    doc(data3);
    console.log(data3);
    return foo(data3);
}).then((data4)=>
{
    doc(data4);
    console.log(data4);
    return foo(data4);
}).then((data5)=>
{
    doc(data5);
    console.log(data5);
    return foo(data5);
}).then((data6)=>
{
    doc(data6);
    console.log(data6);
    return foo(data6);
}).then((data7)=>
{
    doc(data7);
    console.log(data7);
    return foo(data7);
}).then((data8)=>
{
    doc(data8);
    console.log(data8);
    return foo(data8);
}).then((data9)=>
{
    doc(data9);
    console.log(data9);
    document.body.style.fontSize="52px"
    document.body.append("Happy Independence Day");
    console.log("Happy Independence Day")
}).catch((error)=>console.log(error));

function doc(ress)
{
   var res=document.createElement("div");
    res.style.color="blue";
    res.style.fontSize="32px";
    res.innerHTML=ress;
    document.body.append(res); 
}

