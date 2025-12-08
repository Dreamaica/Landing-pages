import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ArrowRight, Heart } from 'lucide-react';
import { getProducts, getCategories, Product } from '../services/productData';

// Earthy Pastel Palette for Product Backgrounds
const EARTH_PASTELS = [
  '#E6E2DE', // Stone
  '#E0E5DF', // Sage-ish
  '#EFE8D8', // Sand
  '#DCDCDC', // Mist
  '#E8DED1', // Clay
  '#D8E0D8', // Pale Green
  '#F0EAE4', // Soft Taupe
  '#E4E4E6', // Cool Grey
];

// Helper to get a deterministic color based on product ID
const getProductColor = (id: string) => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % EARTH_PASTELS.length;
  return EARTH_PASTELS[index];
};

export const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Wishlist State
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [viewWishlist, setViewWishlist] = useState(false);

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
    setCategories(getCategories(data));

    // Load Wishlist from LocalStorage
    const savedWishlist = localStorage.getItem('empress_wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error("Failed to parse wishlist", e);
      }
    }
  }, []);

  const toggleWishlist = (e: React.MouseEvent | null, productId: string) => {
    if (e) e.stopPropagation();
    
    let newWishlist;
    if (wishlist.includes(productId)) {
      newWishlist = wishlist.filter(id => id !== productId);
    } else {
      newWishlist = [...wishlist, productId];
    }
    
    setWishlist(newWishlist);
    localStorage.setItem('empress_wishlist', JSON.stringify(newWishlist));
  };

  const filteredProducts = viewWishlist 
    ? products.filter(p => wishlist.includes(p.id))
    : activeCategory === 'All' 
      ? products 
      : products.filter(p => p.category && p.category.split(';').map(c => c.trim()).includes(activeCategory));

  return (
    <section id="shop" className="relative w-full min-h-screen bg-earth-dark py-24 px-4 md:px-12 lg:px-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-earth-dark to-earth-dark pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-block mb-4">
           <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 tracking-wide">
          Treasures of the <span className="text-gold italic">Earth & Spirit</span>
        </h2>
        <p className="text-gray-400 font-sans text-sm md:text-base tracking-widest uppercase">
          Curated Cultural Goods for the Sovereign Mind
        </p>
      </div>

      {/* Category Filter & Wishlist Toggle */}
      <div className="relative z-10 mb-16 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex justify-center items-center gap-4 min-w-max px-4">
          
          {/* Categories */}
          {!viewWishlist && categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2 rounded-full text-sm font-sans tracking-wide transition-all duration-300 border
                ${activeCategory === cat 
                  ? 'bg-gold text-earth-dark border-gold font-bold shadow-[0_0_15px_rgba(198,166,69,0.4)]' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-gold/50 hover:text-white'}
              `}
            >
              {cat}
            </button>
          ))}

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mx-2" />

          {/* Wishlist Toggle */}
          <button
            onClick={() => {
              setViewWishlist(!viewWishlist);
              // Reset category to All if we exit wishlist view, or stay on All
              if (viewWishlist) setActiveCategory('All'); 
            }}
            className={`
              px-6 py-2 rounded-full text-sm font-sans tracking-wide transition-all duration-300 border flex items-center gap-2
              ${viewWishlist 
                ? 'bg-rasta-red text-white border-rasta-red font-bold shadow-[0_0_15px_rgba(161,38,42,0.4)]' 
                : 'bg-white/5 text-gray-400 border-white/10 hover:border-rasta-red/50 hover:text-white'}
            `}
          >
            <Heart size={14} className={viewWishlist ? "fill-current" : ""} />
            <span>Wishlist</span>
            {wishlist.length > 0 && (
              <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${viewWishlist ? 'bg-white/20' : 'bg-rasta-red/20 text-rasta-red'}`}>
                {wishlist.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        <AnimatePresence mode='popLayout'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group cursor-pointer flex flex-col items-center"
                >
                  {/* Image Container - The "Cut Out" Look */}
                  <div 
                    className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl"
                    style={{ backgroundColor: getProductColor(product.id) }}
                  >
                    {/* Badge */}
                    {(product.ribbon || product.inventory === 'InStock') && (
                      <span className="absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-widest text-earth-brown/80">
                        {product.ribbon || "New Arrival"}
                      </span>
                    )}

                    {/* Heart Button */}
                    <button 
                      onClick={(e) => toggleWishlist(e, product.id)}
                      className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/5 hover:bg-white/40 transition-all active:scale-95 group/heart backdrop-blur-sm"
                      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart 
                        size={18} 
                        className={`transition-all duration-300 ${isWishlisted ? 'fill-rasta-red text-rasta-red scale-110' : 'text-earth-dark/60 group-hover/heart:text-rasta-red'}`} 
                      />
                    </button>

                    {/* Product Image with Multiply Blend Mode for Transparency Effect */}
                    <div className="w-full h-full p-8 flex items-center justify-center">
                      {product.images[0] ? (
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 filter contrast-125"
                        />
                      ) : (
                        <div className="text-earth-brown/50 font-serif">No Image</div>
                      )}
                    </div>

                    {/* Hover Overlay - Quick View */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-6">
                      <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                          <ShoppingBag className="w-3 h-3" /> Quick View
                      </button>
                    </div>
                  </div>

                  {/* Minimal Text Info */}
                  <div className="text-center w-full px-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">
                      {product.ribbon || "New"}
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-white mb-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="font-sans text-gray-400 text-sm line-clamp-2 mb-4 h-10 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute pointer-events-none">
                      {product.description.replace(/<[^>]*>?/gm, '').substring(0, 60)}...
                    </p>
                    <div className="font-sans text-lg font-medium text-gray-200 mt-2">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 text-lg font-serif italic">
                {viewWishlist 
                  ? "Your wishlist is empty. Explore our treasures and find something to love." 
                  : "No treasures found in this category."}
              </p>
              {viewWishlist && (
                <button 
                  onClick={() => setViewWishlist(false)}
                  className="mt-6 px-6 py-2 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-earth-dark transition-all rounded-full"
                >
                  Return to Shop
                </button>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-earth-dark border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:text-gold hover:bg-black transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Image Area */}
              <div 
                className="w-full md:w-1/2 h-64 md:h-auto relative flex items-center justify-center p-12"
                style={{ backgroundColor: getProductColor(selectedProduct.id) }}
              >
                 {/* Modal Heart Button */}
                 <button 
                    onClick={(e) => toggleWishlist(e, selectedProduct.id)}
                    className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all active:scale-95 backdrop-blur-sm"
                  >
                    <Heart 
                      size={24} 
                      className={`transition-all duration-300 ${wishlist.includes(selectedProduct.id) ? 'fill-rasta-red text-rasta-red scale-110' : 'text-earth-dark/60'}`} 
                    />
                 </button>

                 {selectedProduct.images[0] && (
                    <img 
                      src={selectedProduct.images[0]} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl"
                    />
                 )}
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar bg-[#111]">
                 <div className="mb-8">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">
                      {selectedProduct.category && selectedProduct.category.split(';').join(', ')}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                      {selectedProduct.name}
                    </h2>
                    <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-8">
                       <span className="text-3xl text-white font-sans font-light">
                         ${selectedProduct.price.toFixed(2)}
                       </span>
                       {selectedProduct.ribbon && (
                         <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider rounded-sm">
                           {selectedProduct.ribbon}
                         </span>
                       )}
                    </div>
                 </div>

                 <div 
                   className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-a:text-gold text-base leading-relaxed mb-12"
                   dangerouslySetInnerHTML={{ __html: selectedProduct.description }} 
                 />

                 <div className="mt-auto">
                    <button className="w-full py-5 bg-gold hover:bg-white text-earth-dark font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:shadow-lg">
                       <ShoppingBag className="w-5 h-5" />
                       Add to Collection
                    </button>
                    <button className="w-full mt-4 py-4 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 font-bold uppercase tracking-widest rounded-xl transition-all duration-300">
                       View Full Details
                    </button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};