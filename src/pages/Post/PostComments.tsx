import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WaitingFetchCircle } from "../../components/WaitingFetchCircle";
import { Comment } from "../../constants/comment";
import { useNotification } from "../../context/notification";
import { useApi } from "../../services";



export function PostComments() {

  const { id } = useParams();
  const [comments, setComments] = useState<Comment[] | null>(null);
  const { getPostComments } = useApi();
  const { notify } = useNotification();

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!id) throw new Error("Id de post nao encontrado");
        const commentsBack = await getPostComments(Number(id));
        setComments(commentsBack);
      } catch (err: unknown) {
        notify(err);
      }
    };
    fetch();
  }, []);


  return (
    <div>
      {!comments ?
        <WaitingFetchCircle />
        :
        comments.map((comment, index) => (
          <div key={index}
            style={{
              marginBottom: 30
            }}
          >
            <h1>{comment.name}</h1>
            <h2>{comment.email}</h2>
            <h3>{comment.body}</h3>
          </div>
        ))
      }
    </div>
  );
}