type Prop = {
  url:string
}

const Picture = (props:Prop) => {
  return <>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-2">
      <img className="object-cover object-center rounded" alt="hero" src={props.url} />
    </div>
  </>;
};

export default Picture;
