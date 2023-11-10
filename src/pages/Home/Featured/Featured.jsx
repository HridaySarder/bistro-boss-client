import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className="featuredItem bg-fixed text-white pt-8 my-20">
      <SectionTitle
      subheading={"Chect it Out"}
      heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 bg-slate-500 bg-opacity-60 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug20, 2025</p>
          <p className="uppercase">Where can i get some?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero repellat quasi id reprehenderit nisi error. Eaque, delectus quaerat? Illum reiciendis accusamus quo voluptates voluptatum ad in at praesentium rerum.
          Facilis sit vel repellendus a voluptatibus doloribus, necessitatibus, illo, aliquam fugit enim explicabo placeat accusantium? Laboriosam optio sed magni fuga architecto.
         </p>
          <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;