import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import imgCat1 from '../assets/coffee-specialty-menu-category-1-C.png';
import imgCat2 from '../assets/tea-specialty-menu-category-2-C.png';
import imgCat3 from '../assets/pastries-desserts-menu-category-3-C.png';
import imgCat4 from '../assets/savory-delights-menu-category-4-C.png';
import imgCat5 from '../assets/beverages-menu-category-5-C.png';
import imgCaramel from '../assets/caramel-macchiato.png';
import imgMocha from '../assets/Mocha-Latte.png';
import imgVanilla from '../assets/vanilla-latte.png';
import imgEspresso from '../assets/espresso-con-panna.png';

const DollarIcon = () => (
  <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] rounded-full border-2 border-[#282523] text-[#282523] flex items-center justify-center shrink-0">
    <span className="font-sans font-bold text-[14px] md:text-[16px] leading-none">$</span>
  </div>
);

const menuData = [
  {
    id: 'coffee-specialties',
    title: 'Coffee Specialties',
    description: 'Explore a diverse selection of expertly crafted coffee drinks that cater to coffee enthusiasts.',
    image: imgCat1,
    items: [
      {
        id: 'bristos-espresso',
        title: "Signature Espresso blend",
        description: 'Our carefully curated and richly aromatic espresso blend is a must-try for coffee connoisseurs, offering a delightful burst of flavors.',
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
        prices: [
          { label: 'Single Shot', price: '$3.50' },
          { label: 'Double Shot', price: '$4.50' }
        ]
      },
      {
        id: 'caramel-macchiato',
        title: "Caramel Macchiato",
        description: 'A delightful combination of espresso, steamed milk, and caramel syrup, topped with a swirl of whipped cream',
        image: imgCaramel,
        prices: [
          { label: 'Regular', price: '$4.75' },
          { label: 'Iced', price: '$5.50' }
        ]
      },
      {
        id: 'mocha-latte',
        title: "Mocha Latte",
        description: 'A velvety blend of espresso, cocoa, and steamed milk, finished with a dusting of cocoa powder.',
        image: imgMocha,
        prices: [
          { label: 'Regular', price: '$4.95' },
          { label: 'Decaf', price: '$5.25' }
        ]
      },
      {
        id: 'vanilla-latte',
        title: "Vanilla Latte",
        description: 'Smooth espresso mixed with creamy vanilla syrup and steamed milk, creating a deliciously balanced drink.',
        image: imgVanilla,
        prices: [
          { label: 'Regular', price: '$4.80' },
          { label: 'Sugar-Free', price: '$5.00' }
        ]
      },
      {
        id: 'espresso-con-panna',
        title: "Espresso Con Panna",
        description: 'A bold espresso shot topped with a dollop of freshly whipped cream, a simple yet indulgent choice.',
        image: imgEspresso,
        prices: [
          { label: 'Single Shot', price: '$4.00' }
        ]
      }
    ]
  },
  {
    id: 'tea-specialties',
    title: 'Tea Specialties',
    description: 'Discover the perfect cup from our hand-selected teas, sourced from the finest tea gardens.',
    image: imgCat2,
    imageScale: 'scale-[1.9]',
    items: [
      {
        id: 'earl-grey-reserve',
        title: 'Earl Grey Reserve',
        description: 'A classic British blend of fine black tea with a delicate hint of fragrant bergamot oil.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$4.00', label: 'Pot' }]
      },
      {
        id: 'matcha-green-tea-latte',
        title: 'Matcha Green Tea Latte',
        description: 'Experience the soothing and earthy goodness of our creamy Matcha Green Tea Latte, a delightful fusion of tradition and taste.',
        image: 'https://plus.unsplash.com/premium_photo-1694434865473-7a032b213b5e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        prices: [{ price: '$5.00', label: 'Regular' }, { price: '$5.75', label: 'Iced' }]
      },
      {
        id: 'chamomile-blossom',
        title: 'Chamomile Blossom Tea',
        description: 'A soothing herbal infusion of whole chamomile flowers, perfect for deep relaxation.',
        image: 'https://images.unsplash.com/photo-1719004322339-afe59dc291d5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        prices: [{ price: '$3.50', label: 'Cup' }]
      },
      {
        id: 'jasmine-pearl-green-tea',
        title: 'Jasmine Pearl Green Tea',
        description: 'Premium green tea leaves hand-rolled into pearls and naturally scented with fresh jasmine blossoms.',
        image: 'https://plus.unsplash.com/premium_photo-1731696604052-d0c8527e7831?q=80&w=3160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        prices: [{ price: '$4.50', label: 'Pot' }]
      },
      {
        id: 'masala-chai-spiced',
        title: 'Masala Chai Spiced',
        description: 'A robust blend of black tea, aromatic Indian spices, and steamed milk, lightly sweetened.',
        image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$4.75', label: 'Regular' }, { price: '$5.25', label: 'Large' }]
      },
      {
        id: 'iced-peach-oolong',
        title: 'Iced Peach Oolong',
        description: 'Refreshing cold-brewed oolong tea infused with sweet white peach notes and served over ice.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$4.50', label: 'Regular' }]
      }
    ]
  },
  {
    id: 'pastries-desserts',
    title: 'Pastries & Desserts',
    description: 'Indulge in our sweet treats baked fresh daily with love, butter, and wholesome ingredients.',
    image: imgCat3,
    imageScale: 'scale-[1.9]',
    items: [
      {
        id: 'flaky-butter-croissant',
        title: 'Flaky Croissants- Sweet & Savory',
        description: 'Indulge in our freshly baked, buttery croissants, available in both sweet (e.g., almond, chocolate) and savory (e.g., ham and cheese) options.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$3.50', label: 'Classic' }, { price: '$4.25', label: 'Almond' }]
      },
      {
        id: 'decadent-red-velvet-cake',
        title: 'Decadent Red Velvet Cake',
        description: 'Treat yourself to a slice of our velvety and moist red velvet cake, topped with luscious cream cheese frosting, a heavenly delight for dessert lovers.',
        image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$6.50', label: 'Slice' }]
      },
      {
        id: 'artisan-chocolate-eclair',
        title: 'Artisan Chocolate Éclair',
        description: 'Delicate choux pastry filled with rich vanilla bean custard and topped with dark Belgian chocolate glaze.',
        image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$4.50', label: 'Each' }]
      },
      {
        id: 'lemon-meringue-tart',
        title: 'Lemon Meringue Tart',
        description: 'A buttery shortcrust pastry shell filled with zesty lemon curd and topped with lightly toasted meringue.',
        image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$5.50', label: 'Tart' }]
      },
      {
        id: 'classic-tiramisu',
        title: 'Classic Tiramisu',
        description: 'Espresso-soaked ladyfingers layered with light mascarpone cream and dusted with premium cocoa powder.',
        image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$6.00', label: 'Portion' }]
      },
      {
        id: 'blueberry-bliss-pancakes',
        title: 'Blueberry Bliss Pancakes',
        description: 'Indulge in a stack of fluffy pancakes bursting with plump, juicy blueberries. With maple syrup, topped with whipped cream. Best breakfast option.',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$9.50', label: 'Stack' }]
      },
      {
        id: 'blueberry-bliss-muffins',
        title: 'Blueberry Bliss Muffins',
        description: 'Soft and fluffy muffins bursting with fresh plump blueberries, baked fresh every morning.',
        image: 'https://images.unsplash.com/photo-1525124541374-b7eaf79d0dbf?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$3.75', label: 'Each' }]
      }
    ]
  },
  {
    id: 'savory-delights',
    title: 'Savory Delights',
    description: 'Satisfy your hunger with our savory selections, featuring fresh, locally sourced ingredients.',
    image: imgCat4,
    imageScale: 'scale-[2]',
    items: [
      {
        id: 'vegan-avocado-toast',
        title: 'Vegan Avocado Toast with cream',
        description: 'Savor the goodness of our Vegan Avocado Toast, featuring smashed avocado, cherry tomatoes, and a drizzle of balsamic glaze on freshly baked artisanal bread.',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$8.50', label: 'Serving' }]
      },
      {
        id: 'smoked-salmon-bagel',
        title: 'Smoked Salmon Bagel',
        description: 'Toasted everything bagel generously layered with herb cream cheese, Scottish smoked salmon, capers, and red onion.',
        image: 'https://images.unsplash.com/photo-1502809301561-bfa71788b275?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$9.75', label: 'Serving' }]
      },
      {
        id: 'classic-quiche-lorraine',
        title: 'Classic Quiche Lorraine',
        description: 'A warm, savory tart filled with rich egg custard, smoked bacon, and aged Gruyère cheese.',
        image: 'https://images.unsplash.com/photo-1647275555893-0536f9990b45?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$7.50', label: 'Slice' }]
      },
      {
        id: 'gourmet-grilled-cheese',
        title: 'Gourmet Grilled Cheese',
        description: 'A blend of melted cheddar, mozzarella, and gouda on thick-cut sourdough bread, toasted to buttery perfection.',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$8.00', label: 'Sandwich' }]
      },
      {
        id: 'roasted-tomato-basil-soup',
        title: 'Roasted Tomato Basil Soup',
        description: 'A comforting bowl of velvety roasted tomato soup infused with fresh basil, served with a side of toasted sourdough.',
        image: 'https://images.unsplash.com/photo-1581347860118-588a42326161?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$6.00', label: 'Bowl' }]
      },
      {
        id: 'truffle-mushroom-bruschetta',
        title: 'Truffle Mushroom Bruschetta',
        description: 'Crispy ciabatta slices topped with sautéed wild mushrooms, fresh thyme, and a drizzle of truffle oil.',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$7.25', label: 'Plate' }]
      }
    ]
  },
  {
    id: 'beverages',
    title: 'Beverages',
    description: 'Quench your thirst with our selection of cool, refreshing beverages perfect for any time of day.',
    image: imgCat5,
    imageScale: 'scale-[1.9]',
    items: [
      {
        id: 'fresh-squeezed-orange-juice',
        title: 'Fresh Squeezed Orange Juice',
        description: '100% pure, freshly squeezed orange juice, cold-pressed daily for maximum vitamins and refreshing flavor.',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$4.50', label: 'Glass' }]
      },
      {
        id: 'signature-mint-lemonade',
        title: 'Signature Mint Lemonade',
        description: 'Zesty homemade lemonade perfectly balanced with a touch of sweetness and fresh crushed mint leaves.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$4.00', label: 'Regular' }, { price: '$4.75', label: 'Large' }]
      },
      {
        id: 'iced-berry-hibiscus-fresca',
        title: 'Iced Berry Hibiscus Fresca',
        description: 'A vibrant and tart hibiscus tea shaken with ice, fresh mixed berries, and a splash of sparkling water.',
        image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$5.00', label: 'Glass' }]
      },
      {
        id: 'rich-hot-chocolate',
        title: 'Rich Hot Chocolate',
        description: 'Luxurious melted dark chocolate blended with steamed whole milk, topped with toasted marshmallows.',
        image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$4.50', label: 'Mug' }]
      },
      {
        id: 'sparkling-blood-orange-mocktail',
        title: 'Sparkling Blood Orange Mocktail',
        description: 'A vibrant, artisanal mocktail crafted with fresh blood orange juice, aromatic bitters, and a splash of sparkling tonic.',
        image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$5.50', label: 'Glass' }]
      },
      {
        id: 'tropical-mango-smoothie',
        title: 'Tropical Mango Smoothie',
        description: 'A thick and creamy blend of ripe mangoes, banana, Greek yogurt, and a splash of coconut milk.',
        image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=800',
        prices: [{ price: '$6.50', label: 'Glass' }]
      }
    ]
  }
];

const MenuItemCard = ({ item }) => {
  return (
    <div className="bg-primary-2 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow h-full">
      {/* Image */}
      <div className="h-56 md:h-64 lg:h-72 w-full overflow-hidden shrink-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      
      {/* Content */}
      <div className="p-6 lg:p-8 flex flex-col flex-grow">
        <h3 className="font-heading text-2xl lg:text-3xl text-white-cream mb-3">{item.title}</h3>
        <p className="text-white-cream/85 text-sm lg:text-[15px] leading-relaxed mb-6 flex-grow font-body font-light">
          {item.description}
        </p>
        
        {/* Prices */}
        <div className="flex flex-col gap-4">
          {item.prices.map((priceOption, idx) => (
            <div key={idx} className="flex items-center text-white-cream font-bold">
              <DollarIcon />
              <span className="ml-4 tracking-wide text-sm md:text-[15px]">{priceOption.price} ({priceOption.label})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuCategory = ({ category, isOpen, onToggle }) => {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 mb-8 lg:mb-12">
      {/* Category Toggle Card */}
      <div 
        onClick={() => onToggle(category.id)}
        className={`bg-primary-2 rounded-2xl md:rounded-[2rem] px-8 pt-8 pb-20 md:px-12 md:pt-12 md:pb-24 lg:px-20 lg:pt-20 lg:pb-36 flex flex-col md:flex-row justify-center items-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md relative border border-black-5`}
      >
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-[280px] lg:h-[280px] shrink-0 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-12 lg:mr-16 shadow-xl border-[6px] border-primary-2">
          <img src={category.image} alt={category.title} className={`w-full h-full object-cover object-center ${category.imageScale || ''}`} />
        </div>
        
        <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center">
          <h2 className="font-heading text-4xl md:text-[3rem] lg:text-[4rem] text-white-cream mb-4 tracking-wide leading-none">{category.title}</h2>
          <p className="text-white-cream/80 text-sm md:text-base lg:text-[17px] max-w-lg leading-relaxed font-body font-light">{category.description}</p>
        </div>

        {/* Toggle Arrow at the bottom center of the card */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-secondary-1 p-2 md:p-3 rounded-full text-primary-2 shadow-sm transition-transform duration-300 hover:scale-110">
            {isOpen ? <ChevronUp size={28} strokeWidth={3} /> : <ChevronDown size={28} strokeWidth={3} />}
        </div>
      </div>

      {/* Expanded Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 overflow-hidden transition-all duration-500 origin-top ${isOpen ? 'opacity-100 max-h-[10000px] mt-4' : 'opacity-0 max-h-0'}`}>
        {category.items.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default function Menu() {
  const [openCategories, setOpenCategories] = useState(['coffee-specialties']);

  const toggleCategory = (id) => {
    setOpenCategories(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-secondary-1 min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[100px] min-[1720px]:px-[250px]">
      <h1 className="font-accent text-[4rem] md:text-[5.5rem] lg:text-[7rem] text-black-warm text-center mb-16 md:mb-24 leading-none tracking-tight">
        Bristo Café's Menu
      </h1>
      
      <div className="max-w-[1330px] mx-auto flex flex-col gap-8 lg:gap-12">
        {menuData.map(category => (
          <MenuCategory 
            key={category.id} 
            category={category} 
            isOpen={openCategories.includes(category.id)}
            onToggle={toggleCategory}
          />
        ))}
      </div>
    </div>
  );
}
