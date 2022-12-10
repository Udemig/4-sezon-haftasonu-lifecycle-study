import React, { useEffect, useState } from "react";

/* 
    SIRALI LIFECYCLE METHODS LİSTESİ
    1. constructor
    2.render
    (useEffect)
    3.componentDidMount
    4.componentDidUpdate
    5.componentWillUnmount
*/

const MyComponent = () => {
  /* CONSTRUCTOR - component'a tanıtmak */
  const [text, setText] = useState(1);
  const [todo, setTodo] = useState(null);
  console.log("constructor çalışıyor...");

  /* 
        useEffect yazılması: 
        1. useEffect İKİ parametre alır. Birinci parametre
        yapılacak iştir; ikinci parameter DEPENDENCY (BAĞIMLILIK)tır.
        2. Component içerisinde birden fazla useEffect yazılabilir
    */

  /* bu hali componentDidMount'tur. Component ekrana basılırken 1 KERE
        çalışır ve bir daha çalışmaz
    */
  /* useEffect(() => {
    console.log("componentDidMount çalışıyor...")
  }, []); */

  /* Eğer ikinci parametre olan dizi (dependency'yi) vermezsek
        component HER RENDER OLDUĞUNDA tekrar tekrar çalışır
    */
  /* useEffect(() => {}); */

  /* componentDidUpdate */
  /* 
    1. componentDidMount gibi ekrana ilk kez basılırken çalışır.
    2. Dependency (Bağımlılığı) olan text state'i her değiştinde
    bu useEffect tekrar çalışır.
  */
  useEffect(() => {
    console.log("componentDidMount ve componentDidUpdate");
    fetch(`https://jsonplaceholder.typicode.com/todos/${text}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodo(json);
      });

    /* componentWillUnmount */
    return () => {
      console.log("componentWillUnmount");
    };
  }, [text]);

  /* RENDER */
  if (todo === null) {
    return (
      <div>
        {console.log("render fonksiyonu çalışıyor...")}
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {console.log("render fonksiyonu çalışıyor...")}
      <h1>MyComponent</h1>
      <p>
        {todo.id}:{todo.title}
      </p>
      <button onClick={() => setText(text + 1)}>Next</button>
    </div>
  );
};
export default MyComponent;
