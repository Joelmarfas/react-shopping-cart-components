import React from "react";

import ItemCard from "../ItemCard";

function ProductsListing({
  products,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  handleAddToCart,
  ...props
}) {
  return (
    <section className="row" {...props}>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          shortDescription={product.shortDescription}
          isFavorite={product.isFavorite}
          upVotes={product.upVotes}
          downVotes={product.downVotes}
          handleDownVote={product.handleDownVote}
          handleUpVote={product.handleUpVote}
          handleSetFavorite={product.andleSetFavorite}
          handleAddToCart={product.handleAddToCart}
        />
      ))}
    </section>
  );
}

export default ProductsListing;
