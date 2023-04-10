let postData; 

fetch("https://jsonplaceholder.typicode.com/todos/1")
 .then((response) => response.json())
 .then((data) => {
    console.log(data);
    postData = data;
 });

 const postURL = "https://jsonplaceholder.typicode.com/todos";

 fetch(postURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
 })
  .then((response) => response.json())
  .then((data) => console.log(data));


  //test, 기다렸다가 실행을 해야되는데, 오히려 동시에 작용을 해서 오류가 날 수밖에 없는 의도가 있었디ㅏ. 
  // 아이디 값만 나온다, 
  // 그 이유는 기다리지 않으니까 postData가 없는 이유