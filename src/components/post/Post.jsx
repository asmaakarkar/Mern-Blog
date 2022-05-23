import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://vuenj.com/wp-content/uploads/2020/07/Iguazu-Falls-scaled.jpg"
        alt="post image"
        className="post-img"
      />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <span className="post-title">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        architecto omnis animi id ut sit earum soluta cupiditate, ex quidem
        repellat, itaque, voluptas dolores nisi ea officiis nihil consequuntur.
        Necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat architecto omnis animi id ut sit earum soluta cupiditate, ex
        quidem repellat, itaque, voluptas dolores nisi ea officiis nihil
        consequuntur. Necessitatibus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Placeat architecto omnis animi id ut sit earum soluta
        cupiditate, ex quidem repellat, itaque, voluptas dolores nisi ea
        officiis nihil consequuntur. Necessitatibus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Placeat architecto omnis animi id ut sit
        earum soluta cupiditate, ex quidem repellat, itaque, voluptas dolores
        nisi ea officiis nihil consequuntur. Necessitatibus.
      </p>
    </div>
  );
}
