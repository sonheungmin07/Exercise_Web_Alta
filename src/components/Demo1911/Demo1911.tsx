import React, { useEffect, useRef, useState } from "react";
import { fecthApi, getNumberOfImages } from "./Demo1911.logic";
import styles from "./Demo1911.module.css";

const Demo1911 = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [myUrl, setMyUrl] = useState<{ urls: string[] }[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getNumberOfImages();
      const data = await fecthApi(currentPage, 9);
      const pages = Math.ceil(res / 9);
      setMyUrl(data);
      setTotalPages(pages);
    };

    fetchApi();
  }, []);

  const handleScroll = async () => {
    const container = containerRef.current;
    if (container) {
      console.log(container.scrollTop + container.clientHeight);
      console.log(container.scrollHeight);

      if (
        container.scrollTop + container.clientHeight >=
          container.scrollHeight - 2 &&
        currentPage <= totalPages
      ) {
        const res = await fecthApi(currentPage + 1, 9);
        setMyUrl((prev) => [...myUrl, ...res]);
        setCurrentPage(currentPage + 1);
      }
    }
  };

  return (
    <div>
      <div
        className={styles.container}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {myUrl.map((item) => {
          return (
            <div className={styles.subcontainer}>
              {item.urls.map((item) => {
                return (
                  <div className={styles.item}>
                    <img className={styles.img} src={item} alt=""></img>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (item) => (
              <div>
                <a href="#" onClick={() => setCurrentPage(item)}>
                  {item}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo1911;
