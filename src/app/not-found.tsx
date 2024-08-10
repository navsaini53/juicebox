"use client"; // This is a client component 👈🏽


import Header from '../../components/header/header';

import commonStyle from "./common.module.css";




export default function CrashPage() {

  

  
  return (<>

    <main className={commonStyle.main}>
      <Header hideBack={false} />



     <div style={{textAlign:'center',paddingTop:'20px'}}>
       -- Sorry custom 404 page --
        </div>

    </main>







  </>
  );
}
