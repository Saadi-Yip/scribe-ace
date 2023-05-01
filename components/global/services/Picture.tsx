type Prop = {
  url:string
}

const Picture = (props:Prop) => {
  return <>
    <div className="lg:w-3/5 lg:ml-auto w-2/3 mb-10 lg:mb-0">
      <img className="object-cover w-full lg:rounded-tl-3xl sm:rounded-2xl lg:rounded-sm" alt="hero" src={props.url} />
    </div>
  </>;
};

export default Picture;
