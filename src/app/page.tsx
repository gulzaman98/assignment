import styles from "../app/app.module.css"
import Link from "next/link";
export default function Home() {
  return (
   <div className= {styles.container}> 
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/services">Services</Link></li>
    
    </ul>
   <h1 className= {styles.header}>Hello Gulzaman Arain</h1>
   </div>
  );
  
}
