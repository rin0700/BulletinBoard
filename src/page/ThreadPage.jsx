import Header from "../components/Header";
import Thread_id from "../components/Thread_id";
import NewPost from "../components/newPost";
import '../Style/ThreadPage.css';

function ThreadPage() {
  return (
    <>
      <Header />
      <NewPost />
      <Thread_id />
    </>
  )
}

export default ThreadPage;
