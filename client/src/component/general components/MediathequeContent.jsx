

function MediathequeContent(props) {
  return (
    <div className="w-[18] flex flex-col items-center cursor-pointer">
      <div className="shadow-xl w-[12rem] h-[16rem]">
        <img className="h-full w-full " src={props.src} alt="" />
      </div>
      <div className="pt-4">
        <p>{props.title} </p>
      </div>
    </div>
  );
}

export default MediathequeContent;
