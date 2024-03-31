import{
   useParams
}from 'react-router-dom';

const DiscussionThread = () => {
    let { discussionThread } = useParams();

    return(
        <div><em>{discussionThread}: This is discussion is very active</em></div>
    )
}

export default DiscussionThread;