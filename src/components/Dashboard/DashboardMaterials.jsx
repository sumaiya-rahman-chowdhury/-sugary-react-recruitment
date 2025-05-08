import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchMaterials } from "../../api/fetchMaterials";
import { useInView } from "react-intersection-observer";
import MaterialCard from "./Materials/Card";
import { AlertTriangle, Hourglass, Loader, RefreshCcw } from "lucide-react";
import LoadingMaterials from "../Loading/LoadingMaterials";
import { ErrorDisplay } from "../Error/ErrorDisplay";

function DashboardMaterials() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    refetch,
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

  if (isLoading) return <LoadingMaterials />;
  if (error) return <ErrorDisplay error={error} onRetry={() => refetch()} />;
  console.log(allMaterials);
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {allMaterials.map((material) => (
            <MaterialCard key={material.Id} material={material}></MaterialCard>
          ))}
        </div>
        <div>
          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-purple-500 py-8">
              <Loader className="h-5 w-5 animate-spin" />
              <p className="font-medium">Loading materials...</p>
            </div>
          )}
          {isFetchingNextPage && (
            <div className="flex items-center justify-center gap-2 text-purple-500 py-4">
              <Hourglass className="h-5 w-5 animate-pulse" />
              <p className="font-medium">Loading more delights...</p>
            </div>
          )}
          {/* {error && <p>Error loading materials.</p>} */}
          <div ref={ref} style={{ height: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default DashboardMaterials;
