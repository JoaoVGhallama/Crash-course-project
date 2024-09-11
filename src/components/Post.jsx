import styles from './Post.module.css'
import Counter from '../components/Counter.jsx'

function Post(props) { 
    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            <p className = {styles.text}>{props.body}</p>
            <Counter/>
        </li>
    )
}

export default Post