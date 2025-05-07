import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchMaterials } from "../../api/fetchMaterials";
import { useInView } from "react-intersection-observer";

function DashboardMaterials() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["materials"],
    queryFn: fetchMaterials,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);
  const allMaterials = data?.pages.flatMap((page) => page.materials) || [];
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(allMaterials);
  return (
    <div>
      DashboardMaterials:
      <div>
        <h1>Dashboard</h1>

        <div className="materials-list">
          {allMaterials.map((material) => (
            <div key={material.Id} className="material-item">
              <img
                src={`https://d1wh1xji6f82aw.cloudfront.net/${material.CoverPhoto}`}
                alt={material.Title}
                width={200}
                height={200}
              />
              <h3>{material.Title}</h3>
              <p>{material.BrandName}</p>
              <p>Price: ${material.SalesPriceInUsd}</p>
            </div>
          ))}
        </div>

        {isLoading && <p>Loading materials...</p>}
        {isFetchingNextPage && <p>Loading more...</p>}
        {error && <p>Error loading materials.</p>}

        <div ref={ref} style={{ height: "1px" }} />
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </div>
  );
}

export default DashboardMaterials;
