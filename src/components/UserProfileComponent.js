
import styles from '../styles/UserProfile.module.css'

export default function UserProfile({name,email,profilePicture}){

    return(
        <div className={styles.UserProfile}> 
            <div className={styles.centeredImage}> 
                <img src={profilePicture} alt="profilePicture" className={styles.circularPic}/> 
            </div> 
           <div className={styles.userInfo}>
            <h2>{name}</h2>
            <p>{email}</p>
           </div> 
           <div className={styles.goButton}>
         
           </div>
        
        </div>
    )
}