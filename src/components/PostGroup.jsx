import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import styles from './PostGroup.module.css'

function PostGroup() {
    return (
        <>
        <NewPost/>
            <ul className={styles.posts}>
                <Post author="Maximilian" body="React.js é foda."/>
                <Post author="Maximilian" body="React.js é foda."/>
            </ul>
        </>

    )
}

export default PostGroup