import React from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
// We'll need quite a few imports from react-router-dom

import ItemDetails from "./ItemDetails";

export default function Item(props) {
  // We get ALL items through props. We'll use the URL to find out which item is the one to show.
  const { items } = props;

  const params = useParams();
  console.log("params", params);

  const match = useRouteMatch();
  console.log("match", match);

  const foundItem = items.find((item) => {
    return String(item.id) === params.itemId;
  });

  console.log("found: ", foundItem);

  // 👉 STEP 7 - We need to pull item from items, using a parameter in the URL (:itemID)
  // Beware! The ids are integers, whereas URL parameters are strings.
  // Beware! The JSX is expecting 'item' to exist instantly!
  // we use this hook to grab they dynamic parts of the path (:itemID).

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={foundItem.imageUrl} alt={foundItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{foundItem.name}</h2>
          <h4>${foundItem.price}</h4>
        </div>
      </div>

      <nav className="item-sub-nav">
        {/* 👉 STEP 8 - Here go the NavLinks to `<current url>/shipping` and `<current url>/description` */}

        <NavLink to={`${match.url}/shipping`}>Shipping</NavLink>
        <NavLink to={`${match.url}/description`}>Description</NavLink>
      </nav>

      {/* 👉 STEP 9 - Here go the Routes for `<current path>/shipping` and `<current path>/description` */}
      {/* These Routes should render <ItemDetails /> */}
      <Route path={`${match.path}/shipping`}>
        <ItemDetails text={foundItem.shipping} />
      </Route>
      <Route path={`${match.path}/description`}>
        <ItemDetails text={foundItem.description} />
      </Route>

      {/* 👉 STEP 10 - Shorten paths and urls with `useRouteMatch` hook */}
    </div>
  );
}
