import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Start streamlining Your Operations
        <br />
        <span className="orange_gradient text-center">VendorHub</span>
      </h1>
      <p className="desc text-center">Easily create and manage vendor profiles</p>

      <Feed/>

    </section>
  );
};

export default Home;
