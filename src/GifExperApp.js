import React, { useState } from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

export const GifExperApp = () => {
  const [categories, setCategories] = useState(["Messi"]);

  // const handleAdd = () => {

  // 'HunterXHunter'

  //setCategories([...categories, 'HunterXHunter']);
  //   setCategories( cats => [ ...cats, 'HunterXHunter']);
  // }

  return (
    <div>
      <h2>GifExperApp!!!</h2>
      <AddCategory setCategories= {setCategories} />
      <hr />
      { /*categories + ' ' */}
      <ol>
        
        {
         
          categories.map((category) => (
              <GifGrid key={category} category={category} />
                                       )
                        )
        }
      </ol>
    </div>
  );
};
