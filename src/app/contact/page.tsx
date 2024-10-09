import styles from "../contact/contact.module.css"
import Link from "next/link";
const Contact = ()=>{
    return (
        <div className= {styles.container}>
     <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/services">Services</Link></li>
    </ul>
       <h1 className= {styles.header}> xyzzzz@gmail.com </h1>
        </div> 
    )
};

export default Contact
