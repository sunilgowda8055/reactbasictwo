import { useState } from 'react'

function Post(props) {
  const [posts, setPost] = useState([])

  const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        console.log(data)
      })
      .catch((error) => console.error('error in fetching'))
  }

  return (
    <div style={{ margin: '100px' }}>
      <h2>User Posts information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque ex
        at! Nulla distinctio minus molestiae quaerat ipsa dolorum natus
        voluptatibus quia dolorem soluta! Repellendus, perspiciatis dicta. Fugit
        veniam iste voluptatibus asperiores dolorem? Minima nulla sunt modi
        temporibus quae cupiditate nihil deserunt doloremque at explicabo fuga
        id voluptatum maxime, veritatis architecto, dolor consequatur. Ex itaque
        obcaecati nesciunt, dignissimos impedit magnam tempora eius atque quam
        nisi voluptates eveniet numquam voluptatum blanditiis sequi amet
        voluptate distinctio quas mollitia nostrum est nulla voluptatibus
        voluptas architecto! Praesentium unde exercitationem repellat eligendi
        quidem impedit nisi reprehenderit quos labore consequatur ipsum
        voluptatem necessitatibus nesciunt fuga, consectetur ad. Repellendus
        accusantium consectetur vitae aperiam nam laboriosam sit hic debitis,
        deleniti provident, quidem dolorem natus maxime consequuntur consequatur
        nihil alias praesentium quaerat non aliquid. Facilis ea provident quis
        cumque perferendis. Ad nulla quia molestias, rem dicta amet
        consequuntur, quae ratione nam sed recusandae alias repudiandae quam
        iure maxime nobis, laudantium repellat quos deleniti. Illo totam debitis
        corporis aliquid, ipsa veniam quis. Officiis cupiditate accusantium
        fugiat neque fugit quod reprehenderit ea maiores reiciendis at, optio
        quo, ad qui sequi laborum rem commodi aliquid eum laboriosam? Id dolor
        iure blanditiis voluptatem magni officia odit sed corrupti nemo, itaque
        quod natus aliquam?
      </p>
      <button onClick={getPost}>Get post</button>
      <ul>
        {
posts.length > 0 && posts.map((post)=>{
  return <li key={post.id}> {post.title} </li>
})
        }
      </ul>
    </div>
  );
}

export default Post
