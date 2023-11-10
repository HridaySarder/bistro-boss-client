import { Helmet } from "react-helmet-async";
import UseMenu from "../../../components/hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"


const Menu = () => {
  const [menu] = UseMenu()
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle subheading="Don't Miss" heading="Today's Offer"></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessets menu items */}
<MenuCategory items={desserts} 
title="dessert"
img={dessertImg}
></MenuCategory>
{/* pizza menu items */}
<MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
{/* soup menu items */}
<MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
{/* salad menu items */}
<MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
