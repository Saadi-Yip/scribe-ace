
type state = {
    count: number;
    title: string;
  };
  type Prop = {
    stats: state[];
  };
  
  const Statistics = ({ stats }: Prop) => {
    return <section></section>;
  };
  
  export default Statistics;
  