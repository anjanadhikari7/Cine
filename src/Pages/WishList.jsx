import { Tab, Tabs } from "react-bootstrap";


import DisplayWishList from "../Components/displayWishlist";

const WishList = () => {
  
  const handleOnRemove = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie from your wishlist?"
    );
    if (confirmDelete) {
      const updatedWishList = wishList.filter((movie) => movie.id !== id);
      setWishList(updatedWishList);
    }
  };
  return (
    <>
      <Tabs defaultActiveKey="all" id="wishlist-tabs" className="mb-3">
        <Tab eventKey="all" title="All Movies" className="p-3 subtle-tab">
          <DisplayWishList
            wishList={wishList}
            handleOnRemove={handleOnRemove}
          />
        </Tab>
        <Tab eventKey="action" title="Action Movies" className="p-3 subtle-tab">
          <DisplayWishList
            wishList={wishList}
            Genre="Action"
            handleOnRemove={handleOnRemove}
          />
        </Tab>
        <Tab eventKey="comedy" title="Comedy Movies" className="p-3 subtle-tab">
          <DisplayWishList
            wishList={wishList}
            Genre="Comedy"
            handleOnRemove={handleOnRemove}
          />
        </Tab>
      </Tabs>
    </>
  );
};

export default WishList;
