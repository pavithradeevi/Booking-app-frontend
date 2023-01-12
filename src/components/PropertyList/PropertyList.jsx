import React from 'react';
import useFetch from "../../hooks/useFetch";
import "./PropertyList.css"

export const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

    const images=[
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        "https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif",
        "https://www.holidify.com/images/cmsuploads/compressed/27494946425_1fb0d9b619_h_20181213175425.jpg",
        "https://www.homznspace.com/wp-content/uploads/2021/03/Main-A-CasaGrand-Florella-Villas-Sarjapur.jpg",
        "https://i.guim.co.uk/img/media/f7cbab06fc3a757caca4f29642941d0b3da8dad9/0_0_3000_2003/master/3000.jpg?width=465&quality=85&dpr=1&s=none",

    ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};