import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
   const [name, setName] = useState('River');
   const msg = age > 19 ? "성인입니다." : "미성년자입니다.";
   
   function changeName() {
      setName(name === "River" ? "Steve" : "River");
   }

   return (
      <>
         <h2>{name}({age}) : {msg}</h2>
         <UserName name={name} />
         <button onClick={changeName}>Change Name</button>
      </>
   );
}