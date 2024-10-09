import styles from "../services/services.module.css"
import Link from "next/link";
const Services  = ()=>{
    return (
        <div className= {styles.container}>
        <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/services">Services</Link></li>
    </ul>
       <h1 className= {styles.header}>Web Developers! </h1> 


        </div> 
    )
};

export default Services 