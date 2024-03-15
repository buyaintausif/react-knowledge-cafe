import PropTypes from "prop-types";


const Bloog=({blog})=> {
  const { title,cover,img,hashtag,posted_date,author_img,author,reading_time } = blog;
  return (
    <div>
      <img src={cover} alt="" />

      <div className="flex justify-between">
        <div className="flex">
<img className="size-16" src={author_img} alt="" />

<div className="ml-6" >
    <h2 className="text-2xl">{author}</h2>
    <p>{posted_date}</p>
</div>
        </div>

        <div>
        <span>{reading_time} : Min reading</span>
        </div>
      </div>

      <h2>{title}</h2>

      <p>
        {
            hashtag.map((hash,idx) => <span key={idx}><a href="#">{hash}</a></span>)
        }
      </p>
    </div>
  );
}

Bloog.PropTypes = {
  Bloog: PropTypes.object.isRequired
};

export default Bloog

