import "./single-post.css";

export default function SingelPost() {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img
          src="https://vuenj.com/wp-content/uploads/2020/07/Iguazu-Falls-scaled.jpg"
          alt="single post image"
          className="single-post-img"
        />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet consectetur.
          <div className="single-post-edit-remove">
            <i className="single-post-icon far fa-edit"></i>
            <i className="single-post-icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Safak</b>
          </span>
          <span className="single-post-date">1 houre ago</span>
        </div>
        <p className="single-post-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
          dolor officia illum nihil consequatur architecto perferendis magni rem
          itaque! Incidunt mollitia saepe fuga laborum est doloremque id
          inventore qui. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veritatis animi eligendi, pariatur quo reprehenderit molestias
          saepe amet ullam eius autem expedita numquam reiciendis cupiditate
          enim ea eveniet iste magnam est. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. A placeat aperiam assumenda hic error
          nemo sit nisi incidunt? Facilis, perferendis quaerat quod dolorum est
          cum animi corrupti. Voluptatum, tempore totam.
        </p>
      </div>
    </div>
  );
}
